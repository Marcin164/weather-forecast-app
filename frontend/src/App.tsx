import React, { useState, useEffect } from 'react'
import Topbar from './Layouts/Topbar';
import Main from './Layouts/Main';
import Navbar from './Layouts/Navbar';
import { useDispatch } from 'react-redux';
import { fetchedCities } from './Redux/actions/cities';
import { fetchedWeather } from './Redux/actions/weather';

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    fetchAll()

    return () => {}
  }, [])

  const fetchAll = () => {
    dispatch(fetchedWeather())
    dispatch(fetchedCities())
  }

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen)
  }

  return (
    <>
      <Navbar className={isNavbarOpen ? "block" : "hidden"} onClick={toggleNavbar} />
      <div className="xl:box-border xl:float-right xl:w-[calc(100%-250px)] bg-primary-background h-screen overflow-scroll">
        <Topbar onClick={toggleNavbar} />
        <Main />
      </div>
    </>
  );
}

export default App