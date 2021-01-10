import { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { pathList } from "../core/router/pathList";
import { useSelector } from "react-redux";
import { authSelector } from "../modules/auth/authSlice";

interface PrivateRouteProps {
  component: any;
  path: string;
  exact: boolean;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  path,
  exact,
}) => {
  const { user } = useSelector(authSelector);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) =>
        !!user ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to={pathList.auth.login} />
        )
      }
    />
  );
};
