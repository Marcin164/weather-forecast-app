import React from 'react'
import Icon from './Icon'

type Props = {}

const Topbar = (props: Props) => {
    return (
        <div className="w-screen">
            <div className="w-screen py-2 flex justify-center">
                <div className="w-fit font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-yellow-300 to-cyan-600">
                    WeatherApp
                </div>
            </div>
            <div className="w-screen flex justify-around mt-2 py-2">
                <Icon icon={`/images/cities.svg`} className="w-[40px] h-[40px]"/>
                <div className="text-primary-font text-xl font-medium"><div>Amsterdam</div><div>Wednesday</div></div>
                <Icon icon={`/images/settings.svg`} className="w-[40px] h-[40px]"/>
            </div>
        </div>
    )
}

export default Topbar