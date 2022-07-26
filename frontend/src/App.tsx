import React, { useState, useEffect } from 'react'
import Topbar from './Layouts/Topbar';
import Main from './Layouts/Main';
import Navbar from './Layouts/Navbar';
import { useDispatch } from 'react-redux';
import { fetchedCities } from './Redux/actions/cities';
import { fetchedWeather } from './Redux/actions/weather';
import { toggleError } from './Redux/actions/errors';
import { toggleLoading } from './Redux/actions/loading';
import { useSelector } from 'react-redux';

function App(props:any) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    fetchAll()
  }, []) 

  const weather = useSelector((state:any) => state.weather)
  
  const fetchAll = () => {
        dispatch(toggleLoading(true))
        dispatch(fetchedCities()) 
        dispatch(fetchedWeather())
        if(weather === undefined){
          dispatch(toggleError(true))
        } else {
          dispatch(toggleError(false))
        }
        dispatch(toggleLoading(false))
  }

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen)
  }

  return (
    <div className="bg-primary-background min-h-screen">
      <Topbar onClick={toggleNavbar}/>
      <Navbar className={isNavbarOpen ? "block" : "hidden"} onClick={toggleNavbar}/>
      <Main/>
    </div>
  );
}

export default App