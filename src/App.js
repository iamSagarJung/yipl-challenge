import React,{Fragment} from 'react'
import './App.scss'
import {Apps, Home,Navbar, Services} from './components'


const App = () => {
  return <Fragment>
    <Navbar/>
    <div className='container'>
    <Home/>
    <Services/>
    <Apps/>
    </div>
  </Fragment>
}

export default App