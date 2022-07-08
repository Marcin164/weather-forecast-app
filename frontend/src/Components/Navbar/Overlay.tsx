import React from 'react'

type Props = {
    className?: string
}

const Overlay = (props: Props) => {
  return (
    <div className={`absolute bg-overlay/50 w-screen h-screen top-0 ${props.className}`} />
  )
}

export default Overlay