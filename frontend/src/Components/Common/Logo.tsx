import React from 'react'

type Props = {
    className?: string
}

const Logo = (props: Props) => {
    return (
        <div className={`w-full flex py-2 justify-center ${props.className}`}>
            <div className="w-fit font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-yellow-300 to-cyan-600">
                WeatherApp
            </div>
        </div>
    )
}

export default Logo