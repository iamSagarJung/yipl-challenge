import React,{Fragment} from 'react'
import './App.scss'
import {Apps, Contact, Home,Navbar, Services, Testimonials,Footer, About} from './components'


const App = () => {
  return <Fragment>
    <Navbar/>
    <div style={{maxWidth:"90%",margin:"auto"}}>
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

