import React from 'react'

type Props = {
    children?: any
    className?: string
}

const Card = (props: Props) => {
  return (
    <div className={`w-screen h-[300px] bg-white/[.08] rounded mt-4 ${props.className}`}>{props.children}</div>
  )
}

export default Card