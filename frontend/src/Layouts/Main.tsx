import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import DayButton from '../Components/Main/DayButton'
import TemperatureAndHumidity from '../Components/WeatherCards/TemperatureAndHumidity'
import Weather from '../Components/WeatherCards/Weather'
import Rain from '../Components/WeatherCards/Rain'
import AirQuality from '../Components/WeatherCards/AirQuality'
import SpecialEvents from '../Components/WeatherCards/SpecialEvents'
import Loading from './Loading'
import { useDispatch } from 'react-redux'
import { setDate } from '../Redux/actions/date'
import { setCity } from '../Redux/actions/city'

type Props = {}

const Main = (props: Props) => {
    const [dates, setDates] = useState<Array<any>>([])

    const dispatch = useDispatch()
    const date = useSelector((state: any) => state.date) || dispatch(setDate(new Date().setHours(0,0,0,0)))
    const city = useSelector((state: any) => state.city) || localStorage.getItem('city') || dispatch(setCity("Amsterdam"))
    const weathers = useSelector((state: any) => state.weather.data.filter(filterByCityAndDate)[0])

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


    if (!weathers) return <Loading />
    return (
        <div className="border-box xl:w-full h-full box-border pb-2 sm:px-4 md:px-4">
            <div className="h-[80] overflow-x-auto whitespace-nowrap box-border">
                {dates.map((date, index) => <DayButton key={date} index={index} date={date} />)}
            </div>
            <TemperatureAndHumidity data={weathers.data} />
            <Weather data={weathers.data} />
            <Rain data={weathers.data} />
            <div className="md:flex md:justify-between">
                <AirQuality airQuality={weathers.airQuality} airQualityStatus={weathers.airQualityStatus} />
                <SpecialEvents events={weathers.events} />
            </div>
        </div>
    )
}

export default Main