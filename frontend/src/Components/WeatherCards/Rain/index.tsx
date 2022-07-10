import React from 'react'
import Card from '../Card'
import { ComposedChart, Line, XAxis, ResponsiveContainer, Tooltip, Bar } from 'recharts';

type Props = {}

const index = (props: Props) => {
    return (
        <Card>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={[{}]}>
                    <XAxis dataKey="name" />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Bar type="monotone" dataKey="pv" fill="#82ca9d" />
                    <Tooltip />
                </ComposedChart>
            </ResponsiveContainer>
        </Card>
    )
}

export default index