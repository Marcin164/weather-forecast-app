import React from 'react'

type Props = {
  errorMessage?: any
}

const ErrorNotification = (props: Props) => {
  return (
    <div className="w-screen h-screen bg-primary-background flex justify-center items-center">
      <div className="text-center">
        <div className="text-5xl font-bold text-white mb-4">Error occured</div>
        <div className="text-2xl font-bold text-red-600 mt-4">{props.errorMessage}</div>
      </div>
    </div>
  )
}

export default ErrorNotification