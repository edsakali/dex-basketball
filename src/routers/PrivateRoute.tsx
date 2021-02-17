import { Route, useHistory } from "react-router-dom";
import { pathList } from "./pathList";
import { useSelector } from "react-redux";
import { authSelector } from "../modules/auth/authSlice";
import { RouteProps } from "react-router";

export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const { push } = useHistory();
  const { user } = useSelector(authSelector);

  if (!user) {
    push(pathList.auth.login);
  }

  return <Route {...rest}>{children}</Route>;
};
