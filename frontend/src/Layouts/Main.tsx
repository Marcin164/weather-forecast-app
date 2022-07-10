import React from 'react'
import DayButton from '../Components/Main/DayButton'
import TemperatureAndHumidity from '../Components/WeatherCards/TemperatureAndHumidity'
import Weather from '../Components/WeatherCards/Weather'
import Rain from '../Components/WeatherCards/Rain'
import AirQuality from '../Components/WeatherCards/AirQuality'
import SpecialEvents from '../Components/WeatherCards/SpecialEvents'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <div className="h-[80] overflow-x-auto whitespace-nowrap box-border">
                <DayButton />
                <DayButton />
                <DayButton />
                <DayButton />
                <DayButton />
                <DayButton />
                <DayButton />
                <DayButton />
            </div>
            <TemperatureAndHumidity/> {/* temperatura, wilgotność i insolacja */}
            <Weather/>
            <Rain/> {/* opady i szansa na opady */}
            <AirQuality/>
            <SpecialEvents/>
        </>
    )
}

export default Main