import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import NavbarTile from '../Components/Navbar/NavbarTile'
import CloseButton from '../Components/Navbar/CloseButton'
import SearchInput from '../Components/Navbar/SearchInput'
import Overlay from '../Components/Navbar/Overlay'
import Logo from '../Components/Common/Logo'

type Props = {
    className?: string
    onClick?: () => any
}

const Navbar = (props: Props) => {
    const [searchValue, setSearchValue] = useState("");

    const cities = useSelector((state: any) => state.cities.data)

    const getFilterValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.currentTarget.value;
        setSearchValue(value);
    };

    const filterCities = (city: any): Boolean => {
        return city.city.toLowerCase().includes(searchValue.toLowerCase());
    };

    const sortCities = (a: any, b: any) => {
        return a.city.localeCompare(b.city)
    }

    return (
        <>
            <div className={`xl:box-border xl:static xl:block xl:float-left absolute w-[250px] h-screen overflow-scroll bg-primary-background top-0 z-10 ${props.className}`}>
                <Logo className='hidden xl:flex'/>
                <CloseButton onClick={props.onClick} />
                <SearchInput onChange={getFilterValue} />
                {cities && cities.sort(sortCities).filter(filterCities).map((city: any) => (<NavbarTile key={city.city} city={city.city} weather={city.weather} temperature={city.temperature} humidity={city.humidity} windStrength={city.windStrength} />))}
            </div>
            <Overlay className={`xl:hidden ${props.className}`} />
        </>
    )
}

export default Navbar
