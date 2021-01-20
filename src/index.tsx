import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  // <StrictMode>
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  // </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
