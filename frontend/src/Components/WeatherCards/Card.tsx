import React from 'react'

type Props = {
    children?: any
    className?: string
}

const Card = (props: Props) => {
  return (
    <div className={`box-border px-2 w-full h-[300px] bg-white/[.08] rounded mt-4 ${props.className}`}>{props.children}</div>
  )
}

export default Card