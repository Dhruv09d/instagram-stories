import { SignIn, Home } from "pages";

type Route = {
  [key: string]: {
    path: string;
    component: () => JSX.Element;
    isPublic?: boolean;
  };
};

export const route: Route = {
  signIn: {
    path: "/sign-in",
    component: SignIn,
  },
  home: {
    path: "/",
    component: Home,
  },
};

const routesData = {
  defaultRoutes: [route.home],
  authRoutes: [route.signIn],
};

export default routesData;
