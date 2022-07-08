import React from 'react'

type Props = {
    city: string,
    temperature: number,
    humidity: number,
    windStrength: number
}

const NavbarTile = (props: Props) => {
    return (
        <div className="p-2 flex">
            <div className="w-[50px] h-[50px]"><img src={``} className="w-fit h-fit" /></div>
            <div className="ml-2">
                <div className="w-fit font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-orange-600 to-fuchsia-600">
                    {props.city}
                </div>
                <div className="text-primary-font">{props.temperature}° | {props.humidity}% | {props.windStrength}m/s</div>
            </div>
        </div>
    )
}

export default NavbarTile