import React from 'react'

type Props = {
  tag:string
  value:number
}

const AirQuailtyTile = (props: Props) => {
  return (
    <div className="w-[100px] h-[160px] bg-gradient-to-b from-yellow-300 to-cyan-600 rounded ml-2 mt-[7px]">
        <div className="h-[95px] flex justify-center items-center"><span className="font-bold text-[42px] text-primary-font">{props.value}</span></div>
        <div className="h-[65px] flex justify-center items-center"><span className="text-[24px] text-primary-font">{props.tag}</span></div>
    </div>
  )
}

export default AirQuailtyTile