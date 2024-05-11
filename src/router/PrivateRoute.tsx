import { useSelector } from "react-redux";
import { Redirect, RouteComponentProps, Route } from "react-router-dom";
import { RootState } from "redux/reducers";
import { route } from "constants/routes";
import { ComponentType } from "react";

type PrivateRouteProps = {
  component: ComponentType;
  path: string;
  exact?: boolean;
} & RouteComponentProps;

const PrivateRoute = (props: PrivateRouteProps) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  return isLoggedIn ? (
    <Route {...props} />
  ) : (
    <Redirect to={route.signIn.path} />
  );
};

export default PrivateRoute;
