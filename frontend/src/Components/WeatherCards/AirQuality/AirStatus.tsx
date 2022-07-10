import React from 'react'

type Props = {}

const AirStatus = (props: Props) => {
    return (
        <div className="h-[125px] flex">
            <div className="h-full w-[125px] flex justify-center items-center"><img src="" alt="" className="w-[100px] h-[100px]"/></div>
            <div className="h-full">
                <div className="h-1/2 flex items-center"><span className="font-bold text-green-600 text-2xl">Good air condition</span></div>
                <div className="h-1/2"><span className="text-primary-font">You can go outside</span></div>
            </div>
        </div>
    )
}

export default AirStatus