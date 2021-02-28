import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { styledTheme } from "./assets/styles/styledTheming";
import { useAppDispatch } from "./redux/store";
import { getUser } from "./modules/auth/authSlice";
import { AppRouter } from "./routers/Router";

export const App = () => {
  const dispatch = useAppDispatch();
  // const { loading } = useSelector(authSelector);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  // return loading === LoadState.idle ? (
  return (
    <ThemeProvider theme={styledTheme}>
      <ToastContainer />
      <AppRouter />
    </ThemeProvider>
  );
  // ) : (
  //   <Spinner />
  // );
};
