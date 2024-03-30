import { toast } from "react-toastify";

export function toastSuccess(title){
    return toast.success(`${title}`,{
        pauseOnHover: false,
        autoClose: 3000
    });
}

export function toastError(title){
    return toast.error(`${title}`,{
        pauseOnHover: false,
        autoClose: 3000
    });
}