import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Applications from './pages/Applications'
import Applyjob from './pages/Applyjob'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apply-job/:id' element={<Applyjob/>}/>
        <Route path='/applications' element={<Applications/>}/>
      </Routes>  
       {/* <Home/>  */}
    </div>
  )
}
export default App
