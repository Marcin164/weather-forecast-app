import React from 'react'

type Props = {
  icon: string
  className: string
}

const Icon = (props: Props) => {
  return (
    <button className={props.className}><img src={props.icon} className="w-fit h-fit"/></button>
  )
}

export default Icon