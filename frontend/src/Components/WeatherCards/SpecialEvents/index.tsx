import React from 'react'
import Card from '../Card'
import Event from './Event'

type Props = {}

const index = (props: Props) => {
  return (
    <Card>
        <div className="py-4 px-2 grid grid-cols-6 gap-y-4 place-items-center whitespace-nowrap">
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
        </div>
    </Card>
  )
}

export default index