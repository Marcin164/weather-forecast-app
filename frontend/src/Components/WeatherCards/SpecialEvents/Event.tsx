import React from 'react'

type Props = {
  event:string
}

const Event = (props: Props) => {
  return (
    <div className="w-[40px] h-[40px] rounded bg-gray-600"><img src={`/images/${props.event}.svg`} className="w-full h-full"/></div>
  )
}

export default Event