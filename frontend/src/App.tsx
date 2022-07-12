import React, { useState } from 'react'
import Topbar from './Layouts/Topbar';
import Main from './Layouts/Main';
import Navbar from './Layouts/Navbar';

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

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

export default App;