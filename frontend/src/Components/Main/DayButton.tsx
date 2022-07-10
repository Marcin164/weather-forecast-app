import React from 'react'

type Props = {}

const DayButton = (props: Props) => {
    return (
        <button className="w-[140px]">
            <div className="font-medium text-transparent text-xl bg-clip-text bg-gradient-to-r from-orange-600 to-fuchsia-600">Today</div>
            <div className="font-thin text-primary-font">25.06</div>
        </button>
    )
}

export default DayButton