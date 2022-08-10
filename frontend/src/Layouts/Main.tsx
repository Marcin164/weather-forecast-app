import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import DayButton from '../Components/Main/DayButton'
import TemperatureAndHumidity from '../Components/WeatherCards/TemperatureAndHumidity'
import Weather from '../Components/WeatherCards/Weather'
import Rain from '../Components/WeatherCards/Rain'
import AirQuality from '../Components/WeatherCards/AirQuality'
import SpecialEvents from '../Components/WeatherCards/SpecialEvents'
import { useDispatch } from 'react-redux'
import { setDate } from '../Redux/actions/date'
import { setCity } from '../Redux/actions/city'
import Loading from './Loading'
import ErrorNotification from './ErrorNotification'

type Props = {}

const Main = (props: Props) => {
    const dispatch = useDispatch()
    const date = useSelector((state: any) => state.date) || dispatch(setDate(new Date().setHours(0,0,0,0)))
    const city = useSelector((state: any) => state.city) || localStorage.getItem('city') || dispatch(setCity("Amsterdam"))
    const weathers = useSelector((state: any) => state.weather) 
    const [dates, setDates] = useState<Array<any>>([])

    const createDays = () => {
        let array: Array<Number> = []

        for (let i: number = 0; i < 7; i++) {
            array.push(new Date().setHours(0,0,0,0)+86_400_000*i)
        }
        setDates(array)
    }

    useEffect(() => {
        createDays()
    }, [])

    const filterByCityAndDate = (value: any) => {
        return value.date === date && value.city === city
    }

    if (weathers.length < 1) return <Loading/>
    if (weathers.code === "ERR_NETWORK") return <ErrorNotification errorMessage="Cannot connect to API"/>
    return (
        <div className="border-box xl:w-full h-full box-border pb-2 sm:px-4 md:px-4">
            <div className="h-[80] overflow-x-auto whitespace-nowrap box-border">
                {dates.map((date, index) => <DayButton key={date} index={index} date={date} />)}
            </div>
            <TemperatureAndHumidity data={weathers.filter(filterByCityAndDate)[0].data} />
            <Weather data={weathers.filter(filterByCityAndDate)[0].data} />
            <Rain data={weathers.filter(filterByCityAndDate)[0].data} />
            <div className="md:flex md:justify-between">
                <AirQuality airQuality={weathers.filter(filterByCityAndDate)[0].airQuality} airQualityStatus={weathers.filter(filterByCityAndDate)[0].airQualityStatus} />
                <SpecialEvents events={weathers.filter(filterByCityAndDate)[0].events} />
            </div>
        </div>
    )
}

export default Main