import React,{Fragment} from 'react'
import './App.scss'
import {Apps, Contact, Home,Navbar, Services, Testimonials,Footer, About} from './components'


const App = () => {
  return <Fragment>
    <Navbar/>
    <div className='container'>
    <Home/>
    <Services/>
    <Apps/>
    </div>
    <Testimonials/>
    <About/>
    <Contact/>
    <Footer/>
  </Fragment>
}

export default App

