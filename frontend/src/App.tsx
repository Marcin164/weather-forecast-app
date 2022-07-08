import React from 'react'
import Topbar from './Components/Topbar';
import Navbar from './Layouts/Navbar';

function App() {
  return (
    <div className="bg-primary-background">
      <Topbar/>
      <Navbar/>
    </div>
  );
}

export default App;