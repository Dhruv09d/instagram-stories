import { AxiosRequestConfig } from "axios";
import adminInstance from "./axios";

const InstanceTypeMapping = {
  adminInstance,
} as const;

type InstanceTypes = keyof typeof InstanceTypeMapping;
const fetcher = (instanceType: InstanceTypes) => {
  let axios = InstanceTypeMapping[instanceType];

  return {
    get: async (url: string, params = {}) => {
      return axios
        .request({
          url,
          method: "GET",
          params,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
    /**
     * @function post To create a resource
     * @returns Promise
     */
    post: async (
      url: string,
      data: any,
      params = {},
      onProgress?: (progress: number) => void,
    ) => {
      const config: AxiosRequestConfig = {};

      if (onProgress) {
        config.onUploadProgress = (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100,
          );
          onProgress(progress);
        };
      }

      return axios
        .request({
          url,
          method: "POST",
          data,
          params,
          ...config,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
    /**
     * @function put To update a full data of resource
     * @returns Promise
     */
    put: async (url: string, data: any, params = {}) => {
      return axios
        .request({
          url,
          method: "PUT",
          data,
          params,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
    /**
     * @function patch To update partial data of a resource
     * @returns Promise
     */
    patch: async (url: string, data: any, params = {}) => {
      return axios
        .request({
          url,
          method: "PATCH",
          data,
          params,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
    /**
     *@function delete To delete the resource
     * @returns Promise
     */
    delete: async (url: string, params = {}, data = {}) => {
      return axios
        .request({
          url,
          method: "DELETE",
          params: params,
          data,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
  };
};

export default fetcher;
