import React, { FC, useEffect } from "react";
import { GlobalStyle } from "./assets/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/styledTheming";
import { ToastContainer } from "react-toastify";
import { useAppDispatch } from "./redux/store";
import { getUser } from "./modules/auth/authSlice";
import { AppRouter } from "./routers/Router";
import { fetchTeams } from "./modules/teams/teamsAsyncActions";

export const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
};
