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
    const date = useSelector((state: any) => state.date) || localStorage.getItem('date') || dispatch(setDate(new Date().setHours(0,0,0,0)))
    const city = useSelector((state: any) => state.city) || localStorage.getItem('city') || dispatch(setCity("Amsterdam"))

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

    const weathers = useSelector((state: any) => state.weather.filter(filterByCityAndDate)[0])
    if (!weathers) return <Loading />
    return (
        <>
            <div className="h-[80] overflow-x-auto whitespace-nowrap box-border">
                {dates.map((date, index) => <DayButton key={date} index={index} date={date} />)}
            </div>
            <TemperatureAndHumidity data={weathers.data} /> {/* temperatura, wilgotność i insolacja */}
            <Weather data={weathers.data} />
            <Rain data={weathers.data} /> {/* opady i szansa na opady */}
            <AirQuality airQuality={weathers.airQuality} airQualityStatus={weathers.airQualityStatus} />
            <SpecialEvents events={weathers.events} />
        </>
    )
}

export default Main

// Elbow plank
// Leg raises
// Hollow body