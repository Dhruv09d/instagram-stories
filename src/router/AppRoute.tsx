import { ComponentType } from "react";
import { Route, RouteComponentProps, withRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

type AppRouteProps = {
  component: ComponentType;
  privateRoute?: boolean;
  path: string;
  exact?: boolean;
} & RouteComponentProps;

const AppRoute = (props: AppRouteProps) => {
  const {
    privateRoute = false,
    exact = false,
    component: Component,
    ...rest
  } = props;

  return (
    <>
      {privateRoute ? (
        <PrivateRoute exact={exact} component={Component} {...rest} />
      ) : (
        <Route exact={exact} component={Component} {...rest} />
      )}
    </>
  );
};

export default withRouter(AppRoute);
