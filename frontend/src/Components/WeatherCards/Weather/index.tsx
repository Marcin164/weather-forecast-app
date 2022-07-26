import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../../../Layouts/Loading'
import Card from '../Card'
import WeatherTile from './WeatherTile'

type Props = {
  data:Array<any>
}

const Weather = (props: Props) => {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth()+1
  const year = date.getFullYear()

  const getWeatherByCityAndDay = (weather:any) => {
    return weather.date === `${day}.${month}.${year}`.toString() && weather.city === 'Amsterdam'
  }

  if(!props.data) return <></>
  return (
    <Card className="overflow-x-auto whitespace-nowrap">
      {props.data.map((weather:any) => (<WeatherTile key={weather.hour} hour={weather.hour} weather={weather.weather} windDirection={weather.windDirection} pressure={weather.pressure} windStrength={weather.windStrength}/>))}
    </Card>
  )
}

export default Weather