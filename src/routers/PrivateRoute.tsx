import { Route, Redirect } from "react-router-dom";
import { pathList } from "./pathList";
import { useSelector } from "react-redux";
import { authSelector } from "../modules/auth/authSlice";
import { RouteProps } from "react-router";

export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const { user } = useSelector(authSelector);

  return !!user ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect to={pathList.auth.login} />
  );
};
