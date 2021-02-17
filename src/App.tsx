import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { theme } from "./assets/styles/styledTheming";
import { useAppDispatch } from "./redux/store";
import { authSelector, getUser } from "./modules/auth/authSlice";
import { AppRouter } from "./routers/Router";
import { LoadState } from "./redux/loadState";
import { Spinner } from "./components/Spiner";

export const App = () => {
  const dispatch = useAppDispatch();
  const { loading } = useSelector(authSelector);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return loading === LoadState.idle ? (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <AppRouter />
    </ThemeProvider>
  ) : (
    <Spinner />
  );
};
