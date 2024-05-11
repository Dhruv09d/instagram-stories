import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN, userSessionActive } from "utils/common";

const refreshUrl = "/user/refresh-token";
const signInUrl = "/user/sign-in";
const validateTokenUrl = "user/validate-reset-token";

const adminInstance = axios.create({
  baseURL: process.env.REACT_APP_USER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let locationInfo: any;

let failedUserQueue = [];

adminInstance.interceptors.request.use(handleRequest);
adminInstance.interceptors.response.use(handleResponse, (error) =>
  handleError(error, adminInstance, failedUserQueue),
);

function processQueue(error: AxiosError, token = null) {
  [failedUserQueue].forEach((failedQueue) => {
    failedQueue.forEach((promise) => {
      if (error) {
        promise.reject(error);
      } else {
        promise.resolve(token);
      }
    });
    failedQueue.length = 0;
  });
}

async function handleRequest(req: AxiosRequestConfig) {
  //interceptor bypass if the api belongs to googleapis.com
  if (req.url.includes("googleapis.com")) {
    return req;
  }
  req.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`;
  if (req.url === signInUrl) {
    req.headers["x-role-type"] = "GERRY_ADMIN";
  }

  if (!locationInfo) {
    try {
      await fetchLocation();
    } catch (error) {
      return error;
    }
  }

  req.headers["x-user-location"] = locationInfo;

  return req;
}

function handleResponse(response: AxiosResponse<any>) {
  if (
    response?.config &&
    [refreshUrl, signInUrl].includes(response.config.url)
  ) {
    /**
     * set token if user is verified
     */
    userSessionActive({
      accessToken: response.headers["x-access-token"],
      refreshToken: response.headers["x-refresh-token"],
    });
  }
  return response;
}

async function handleError(
  error: AxiosError<any>,
  instance: AxiosInstance,
  failedQueue: any[],
) {
  const status = error.response ? error.response.status : null;
  const originalRequest = error.config;
  if (
    status === 401 &&
    ![refreshUrl, validateTokenUrl, signInUrl].includes(error.config.url)
  ) {
    /**
     * if access-token is expired, get new access-token from refresh-token and retry requests
     */

    if (isRefreshing) {
      /**
       * if refresh token api is pending, adding new request to failed queue
       */
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then((accessToken) => {
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return instance(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }

    isRefreshing = true;
    return adminInstance
      .post(refreshUrl, {
        refreshToken: localStorage.getItem(REFRESH_TOKEN),
      })
      .then(async (res) => {
        const accessToken = res?.headers && res.headers["x-access-token"];
        const refreshToken = res?.headers && res.headers["x-refresh-token"];
        userSessionActive({ accessToken, refreshToken });

        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

        /**
         * processing all the failed request with new access token
         */
        return instance(originalRequest)
          .then((originalResponse) => {
            processQueue(null, accessToken);
            return originalResponse;
          })
          .catch((originalError) => {
            processQueue(originalError, null);
            return Promise.reject(originalError);
          });
      })
      .catch((err: AxiosError) => {
        if (err.config.url === refreshUrl) {
          localStorage.clear();
          window.location.reload();
        }
        return Promise.reject(err);
      })
      .finally(() => {
        isRefreshing = false;
      });
  }
  return Promise.reject(error);
}

export default adminInstance;
