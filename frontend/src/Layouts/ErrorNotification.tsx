import React from 'react'

type Props = {
    errorMessage?: any
}

const ErrorNotification = (props: Props) => {
  return (
    <div className="w-full h-[80px] bg-red-400 border-2 border-red-700 flex justify-center items-center"><span className="text-white font-bold text-xl">{props.errorMessage}</span></div>
  )
}

export default ErrorNotification