import React from 'react'
import Card from '../Card'
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {}

const TemperatureAndHumidity = (props: Props) => {
    return (
        <Card>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={[{}]}>
                    <XAxis dataKey="name" />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    )
}

export default TemperatureAndHumidity