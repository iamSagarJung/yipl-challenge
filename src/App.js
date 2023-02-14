import React,{Fragment} from 'react'
import './App.scss'
import Navbar from './components/header/Navbar'
import Home from './components/pages/Home'
import Services from './components/pages/Services'


const App = () => {
  return <Fragment>
    <Navbar/>
    {/* <Home/> */}
  </Fragment>
}

export default App