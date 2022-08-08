import React from 'react'
import Card from '../Card'
import WeatherTile from './WeatherTile'

type Props = {
  data:Array<any>
}

const Weather = (props: Props) => {
  if(!props.data) return <></>
  return (
    <Card className="overflow-x-auto whitespace-nowrap">
      {props.data && props.data.map((weather:any) => (<WeatherTile key={weather.hour} hour={weather.hour} weather={weather.weather} windDirection={weather.windDirection} pressure={weather.pressure} windStrength={weather.windStrength}/>))}
    </Card>
  )
}

export default Weather