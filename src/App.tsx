import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { styledTheme } from "./assets/styles/styledTheming";
import { useAppDispatch } from "./redux/store";
import { getUser } from "./modules/auth/authSlice";
import { AppRouter } from "./routers/AppRouter";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={styledTheme}>
      <ToastContainer />
      <AppRouter />
    </ThemeProvider>
  );
};
