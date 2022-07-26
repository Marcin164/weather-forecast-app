import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setDayName } from '../../Helpers/SetDayName'
import { setDate } from '../../Redux/actions/date'

type Props = {
    date:number
    index:number
}

const DayButton = (props: Props) => {
    const [fullDate, setFullDate] = useState("")
    const [dayOfWeek, setDayOfWeek] = useState("")
    const dispatch = useDispatch()

    const setDateInLocalStorage = (date:any) => {
        dispatch(setDate(date))
        localStorage.removeItem('date')
        localStorage.setItem('date', date)
    }

    const createDataString = () => {
        let day = new Date(props.date).getDate()
        let month = new Date(props.date).getMonth()+1
        setFullDate(`${day}.${month>=1 && month<10 ? "0" : null}${month}`)
        setDayOfWeek(props.index !== 0 ? setDayName(new Date(props.date).getDay()) : "Today")
    }

    useEffect(() => {
      createDataString()
    }, [])
    

    return (
        <button className="w-[140px]" onClick={() => setDateInLocalStorage(props.date)}>
            <div className="font-medium text-transparent text-xl bg-clip-text bg-gradient-to-r from-orange-600 to-fuchsia-600">{dayOfWeek}</div>
            <div className="font-thin text-primary-font">{fullDate}</div>
        </button>
    )
}

export default DayButton