import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import Icon from '../Components/Common/Icon'
import Logo from '../Components/Common/Logo'

type Props = {
    onClick?: () => any
}

const Topbar = (props: Props) => {
    const city = useSelector((state:any) => state.city)
    const date = useSelector((state:any) => state.date)

    const [fullDate, setFullDate] = useState("")

    const createDataString = () => {
        let day = new Date(date).getDate()
        let month = new Date(date).getMonth()+1
        setFullDate(`${day}.${month>=1 && month<10 ? "0" : null}${month}`)
    }

    useEffect(() => {
      createDataString()
    }, [date])
    
    
    return (
        <div className="w-full">
            <Logo className="xl:hidden"/>
            <div className="w-full flex justify-around xl:justify-evenly mt-2 py-2">
                <Icon icon={`/images/cities.svg`} className="w-[40px] h-[40px] xl:hidden" onClick={props.onClick}/>
                <div className="text-primary-font text-xl font-medium flex flex-col justify-center items-center xl:block"><div className="xl:inline-block xl:mr-4">{city || localStorage.getItem('city')}</div><div className="xl:inline-block">{fullDate || localStorage.getItem('date')}</div></div>
                <Icon icon={`/images/settings.svg`} className="w-[40px] h-[40px]"/>
            </div>
        </div>
    )
}

export default Topbar