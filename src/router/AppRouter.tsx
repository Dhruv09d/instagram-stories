import routesData from "constants/routes";
import { AuthLayout, DefaultLayout } from "layout";
import { Route, Switch } from "react-router-dom";
import AppRoute from "./AppRoute";

const AppRouter = () => {
  const { defaultRoutes, authRoutes } = routesData;

  return (
    <Switch>
      <Route path={authRoutes.map((item) => item.path)}>
        <AuthLayout>
          <Switch>
            {authRoutes.map((item) => (
              <AppRoute
                key={item.path}
                path={item.path}
                component={item.component}
              />
            ))}
          </Switch>
        </AuthLayout>
      </Route>
      <Route exact path={defaultRoutes.map((item) => item.path)}>
        <DefaultLayout>
          <Switch>
            {defaultRoutes.map((item) => (
              <AppRoute
                path={item.path}
                component={item.component}
                key={item.path}
                privateRoute
              />
            ))}
          </Switch>
        </DefaultLayout>
      </Route>
    </Switch>
  );
};

export default AppRouter;
