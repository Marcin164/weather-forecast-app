import React from 'react'
import ReactLoading from 'react-loading'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="w-full h-screen bg-primary-background flex justify-center items-center"><ReactLoading type="bubbles" color="pink"/></div>
  )
}

export default Loading