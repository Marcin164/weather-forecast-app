import React from 'react'
import ReactLoading from 'react-loading'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="w-full h-[80px] flex justify-center items-center"><ReactLoading type="bubbles" color="white"/></div>
  )
}

export default Loading