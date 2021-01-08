import { toast, TypeOptions } from "react-toastify";

const options = {
  closeButton: false,
  hideProgressBar: true,
};

export const notification = (type: TypeOptions, message: string) =>
  toast(message, { ...options, type });
