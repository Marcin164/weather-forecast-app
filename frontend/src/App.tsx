import React from 'react'
import Topbar from './Layouts/Topbar';
import Main from './Layouts/Main';
import Navbar from './Layouts/Navbar';

function App() {
  return (
    <div className="bg-primary-background min-h-screen">
      <Topbar/>
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;