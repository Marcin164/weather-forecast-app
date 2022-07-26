import React from 'react'
import { useDispatch } from 'react-redux'
import { setCity } from '../../Redux/actions/city'

type Props = {
    city: string,
    weather: string
    temperature: number,
    humidity: number,
    windStrength: number
}

const NavbarTile = (props: Props) => {
    const dispatch = useDispatch()

    const setCityInLocalStorage = (city:any) => {
        dispatch(setCity(city))
        localStorage.removeItem('city')
        localStorage.setItem('city', city)
    }

    return (
        <button className="p-2 flex" onClick={() => setCityInLocalStorage(props.city)}>
            <div className="w-[50px] h-[50px]"><img src={`/images/${props.weather}.svg`} className="w-fit h-fit" /></div>
            <div className="ml-2">
                <div className="w-fit font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-orange-600 to-fuchsia-600">
                    {props.city}
                </div>
                <div className="text-primary-font">{props.temperature}° | {props.humidity}% | {props.windStrength}m/s</div>
            </div>
        </button>
    )
}

export default NavbarTile