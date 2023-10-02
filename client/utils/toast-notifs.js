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
    bodyClassName: 'text-purple500 text-lg',
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
    bodyClassName: 'text-[#ff1212] text-lg',
  })
}
