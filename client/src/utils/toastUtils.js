import { toast } from "react-toastify"

const sharedCustomOptions = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    bodyClassName: "toast-body", // currently not used, if we want we can look into custom styling.
  }

export const defaultToast = (toastText) =>{
    toast(toastText, sharedCustomOptions);
}

export const infoToast = (toastText) =>{
    toast.info(toastText, sharedCustomOptions);
}

export const successToast = (toastText) =>{
    toast.success(toastText, sharedCustomOptions);
}

export const warningToast = (toastText) =>{
    toast.warn(toastText, sharedCustomOptions);
}

export const errorToast = (toastText) =>{
    toast.error(toastText, sharedCustomOptions);
}