import React from 'react'
import Card from '../Card'
import AirQuailtyTile from './AirQuailtyTile'
import AirStatus from './AirStatus'

type Props = {
  airQuality:any
  airQualityStatus:Object
}

const AirQuality = (props: Props) => {
  if(!props.airQuality) return <></>
  return (
    <Card className="md:mr-2">
      <AirStatus airQualityStatus={props.airQualityStatus}/>
      <div className="overflow-x-auto h-[175px] whitespace-nowrap">
        {props.airQuality.map((weather:any) => (<AirQuailtyTile key={weather.tag} tag={weather.tag} value={weather.value} />))}
      </div>
    </Card>
  )
}

export default AirQuality