import React from 'react'
import Card from '../Card'
import WeatherTile from './WeatherTile'

type Props = {}

const Weather = (props: Props) => {
  return (
    <Card className="overflow-x-auto whitespace-nowrap">
        <WeatherTile/>
    </Card>
  )
}

export default Weather