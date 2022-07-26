import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'
import { ComposedChart, Line, XAxis, ResponsiveContainer, Tooltip, Bar } from 'recharts';
import Loading from '../../../Layouts/Loading';

type Props = {
    data:Array<any>
  }

const Rain = (props: Props) => {
    if(!props.data) return <></>
    return (
        <Card>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={props.data}>
                    <XAxis dataKey="hour" />
                    <Bar type="monotone" dataKey="rainFall" fill="#82ca9d" />
                    <Tooltip />
                </ComposedChart>
            </ResponsiveContainer>
        </Card>
    )
}

export default Rain