import React from 'react'
import NavbarTile from '../Components/Navbar/NavbarTile'
import CloseButton from '../Components/Navbar/CloseButton'
import SearchInput from '../Components/Navbar/SearchInput'
import Overlay from '../Components/Navbar/Overlay'

type Props = {
    className?: string
    onClick?: () => any
}

const Navbar = (props: Props) => {
    return (
        <>
            <div className={`absolute w-[250px] min-h-screen bg-primary-background top-0 z-10 ${props.className}`}>
                    <CloseButton onClick={props.onClick}/>
                    <SearchInput/>
                    <NavbarTile city="Amsterdam" temperature={24} humidity={49} windStrength={5}/>
                    <NavbarTile city="Berlin" temperature={25} humidity={80} windStrength={3.4}/>
                    <NavbarTile city="Dublin" temperature={24} humidity={89} windStrength={3.5}/>
                    <NavbarTile city="Kyoto" temperature={22} humidity={56} windStrength={4.2}/>
                    <NavbarTile city="Lyon" temperature={28} humidity={21} windStrength={3.8}/>
            </div>
            <Overlay className={`${props.className}`}/>
        </>
    )
}

export default Navbar