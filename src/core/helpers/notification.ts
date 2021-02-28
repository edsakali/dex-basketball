import { toast, TypeOptions } from "react-toastify";
import { ToastOptions } from "react-toastify/dist/types";

const defaultOptions = {
  closeButton: false,
  hideProgressBar: true,
};

export const notification = (
  type: TypeOptions,
  message: string,
  options?: ToastOptions
) => toast(message, { ...defaultOptions, ...options, type });
