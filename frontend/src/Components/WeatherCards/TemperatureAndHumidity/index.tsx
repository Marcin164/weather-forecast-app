import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import Loading from '../../../Layouts/Loading';

type Props = {
    data:Array<any>
  }

const TemperatureAndHumidity = (props: Props) => {
    if(!props.data) return <></>
    return (
        <Card>
            <ResponsiveContainer width="100%" height="100%">
            <LineChart data={props.data}>
                <XAxis dataKey="hour" />
                <Tooltip />
                <Line type="monotone" dataKey="temperature" stroke="#fc4103" />
                <Line type="monotone" dataKey="humidity" stroke="#0b5685" />
            </LineChart>
            </ResponsiveContainer>
        </Card>
    )
}

export default TemperatureAndHumidity