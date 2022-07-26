import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../../../Layouts/Loading'
import Card from '../Card'
import Event from './Event'

type Props = {
  events:Array<any>
}

const SpecialEvents = (props: Props) => {
  if(!props.events) return <></>
  return (
    <Card>
        <div className="py-4 px-2 grid grid-cols-6 gap-y-4 place-items-center whitespace-nowrap">
            {props.events.map((event:any) => (<Event key={event} event={event}/>))}
        </div>
    </Card>
  )
}

export default SpecialEvents