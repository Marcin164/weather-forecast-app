import React from 'react'
import Card from '../Card'
import { useSelector } from 'react-redux'
import AirQuailtyTile from './AirQuailtyTile'
import AirStatus from './AirStatus'
import Loading from '../../../Layouts/Loading';

type Props = {
  airQuality:any
  airQualityStatus:Object
}

const AirQuality = (props: Props) => {
  if(!props.airQuality) return <></>
  return (
    <Card>
      <AirStatus airQualityStatus={props.airQualityStatus}/>
      <div className="overflow-x-auto whitespace-nowrap h-[175px] w-full">
        {props.airQuality.map((weather:any) => (<AirQuailtyTile key={weather.tag} tag={weather.tag} value={weather.value} />))}
      </div>
    </Card>
  )
}

export default AirQuality