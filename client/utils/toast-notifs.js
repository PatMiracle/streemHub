import { toast } from 'react-toastify'

export const notifySuccess = (message, position = 'top-center') => {
  toast(message, {
    position: position,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    icon: false,
    progressClassName: 'bg-purple500',
  })
}
export const notifyFailed = (message, position = 'top-center') => {
  toast(message, {
    position: position,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    icon: false,
    progressClassName: 'bg-[#ff1212]',
  })
}
