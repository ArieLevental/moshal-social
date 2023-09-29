import "./CustomToast.css";
import { ToastContainer } from "react-toastify";

const CustomToast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2600}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default CustomToast;
