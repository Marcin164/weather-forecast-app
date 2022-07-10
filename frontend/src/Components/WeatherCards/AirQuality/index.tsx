import React from 'react'
import Card from '../Card'
import AirQuailtyTile from './AirQuailtyTile'
import AirStatus from './AirStatus'

type Props = {}

const index = (props: Props) => {
  return (
    <Card>
      <AirStatus/>
      <div className="whitespace-nowrap overflow-y-auto h-[175px]">
        <AirQuailtyTile/>
      </div>
    </Card>
  )
}

export default index