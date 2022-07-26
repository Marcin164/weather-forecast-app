import React from 'react'
import Icon from '../../Common/Icon'

type Props = {
    hour: number
    weather: string
    windDirection: string
    pressure: number
    windStrength: number
}

const WeatherTile = (props: Props) => {
    return (
        <div className="w-[120px] h-[280px] m-[10px] bg-gradient-to-t from-yellow-300 to-cyan-600 rounded-xl inline-block">
            <div className="text-center text-primary-font text-3xl font-bold py-2">{props.hour}:00</div>
            <div className="w-full flex justify-center"><img src={`/images/${props.weather}.svg`} className="w-[45px] h-[45px]"/></div>
            <div className="text-primary-font text-xl text-center">{props.weather}</div>
            <div className="text-dark-font p-2 text-center">{props.pressure}hPa</div>
            <div className="text-dark-font flex pt-2">
                <div className="w-1/2 flex justify-center"><img src="" className="w-fit h-fit" /></div>
                <div className="w-1/2 text-right pr-4">76%</div>
            </div>
            <div className="text-dark-font flex pt-2">
                <div className="w-1/2 flex justify-center"><img src="" className="w-fit h-fit" /></div>
                <div className="w-1/2 text-right pr-4">{props.windDirection}</div>
            </div>
            <div className="text-dark-font flex pt-2">
                <div className="w-1/2 flex justify-center"><img src="" className="w-fit h-fit" /></div>
                <div className="w-1/2 text-right pr-4">{props.windStrength}m/s</div>
            </div>
        </div>
    )
}

export default WeatherTile