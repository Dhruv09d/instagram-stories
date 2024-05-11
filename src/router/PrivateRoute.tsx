import { Redirect, RouteComponentProps, Route } from "react-router-dom";
import { RootState } from "redux/reducers";
import { route } from "constants/routes";
import { ComponentType } from "react";
import { useAppSelector } from "redux/store";

type PrivateRouteProps = {
  component: ComponentType;
  path: string;
  exact?: boolean;
} & RouteComponentProps;

const PrivateRoute = (props: PrivateRouteProps) => {
  const { isLoggedIn } = useAppSelector((state: RootState) => state.user);
  
  return isLoggedIn  ? (
    <Route {...props} />
  ) : (
    <Redirect to={route.signIn.path} />
  );
};

export default PrivateRoute;
