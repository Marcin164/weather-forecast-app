import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import Icon from '../Components/Common/Icon'

type Props = {
    onClick?: () => any
}

const Topbar = (props: Props) => {
    const city = useSelector((state:any) => state.city)
    const date = useSelector((state:any) => state.date)

    const [fullDate, setFullDate] = useState("")

    const createDataString = () => {
        let day = new Date(date).getDate()
        let month = new Date(date).getMonth()+1
        setFullDate(`${day}.${month>=1 && month<10 ? "0" : null}${month}`)
    }

    useEffect(() => {
      createDataString()
    }, [date])
    
    
    return (
        <div className="w-screen">
            <div className="w-screen py-2 flex justify-center">
                <div className="w-fit font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-yellow-300 to-cyan-600">
                    WeatherApp
                </div>
            </div>
            <div className="w-screen flex justify-around mt-2 py-2">
                <Icon icon={`/images/cities.svg`} className="w-[40px] h-[40px]" onClick={props.onClick}/>
                <div className="text-primary-font text-xl font-medium flex flex-col justify-center items-center"><div>{city || localStorage.getItem('city')}</div><div>{fullDate || localStorage.getItem('date')}</div></div>
                <Icon icon={`/images/settings.svg`} className="w-[40px] h-[40px]"/>
            </div>
        </div>
    )
}

export default Topbar