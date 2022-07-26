import React from 'react'

type Props = {
  icon: string
  className?: string
  onClick?: () => any
}

const Icon = (props: Props) => {
  return (<>
    <button className={props.className} onClick={props.onClick}><img src={props.icon} className="w-fit h-fit"/></button>
    </>
  )
}

export default Icon