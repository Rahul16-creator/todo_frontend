import { toast } from "react-toastify";
const AUTO_CLOSE_THRESHOLD = 2000;

export const NotificationHandler = (type, message) => {
  if (type === "error") {
    return toast.error(message, { autoClose: AUTO_CLOSE_THRESHOLD });
  } else if (type === "success") {
    return toast.success(message, { autoClose: AUTO_CLOSE_THRESHOLD });
  } else if (type === "warning") {
    return toast.warning(message, { autoClose: AUTO_CLOSE_THRESHOLD });
  }
};
