import React, { useEffect, useState } from 'react'
import { TestimonialsData } from "../../Data"
import "./Testimonials.scss"
import {ImQuotesLeft,ImQuotesRight} from "react-icons/im";
import {BsArrowLeft,BsArrowRight} from "react-icons/bs";

const Testimonials = () => {
    const [index,setIndex]=useState(0)

    useEffect(()=>{
            if(index<0){
                setIndex(TestimonialsData.length-1)
            }else if(index>TestimonialsData.length-1){
                setIndex(0)
            }
      
    },[index])

    useEffect(()=>{
        let slider=setTimeout(()=>{
            setIndex(index+1)
        },5000)
        return ()=>clearInterval(slider)
    },[index])
   
    

  return <>
   <div className='testimonials-container'  id="testimonials">
    <header>
        <h2>What our customer are saying</h2>
        <div className="title-border"/>
    </header>
        {
            TestimonialsData.map(({id,image,title,position,name,description},personIndex)=>{
                let classes="nextSlide";
                if(personIndex===index){
                    classes="activeSlide"
                }
                if(personIndex===index-1){
                    classes="lastSlide"
                }
                return <article className={classes} key={id}>
                    <section className='left-content'>
                        <figure>
                        <img src={image} alt={title}/>
                <figcaption>
                    <h2>{name}</h2>
                    <p className='primary-text'>{position}</p>
                </figcaption>
                        </figure>
                    </section>
                    <section className='right-content'>
                       <p className='primary-text'>
                       <ImQuotesLeft className='icon'/> {description} <ImQuotesRight className='icon' />
                        </p>
                    </section>
                </article>
            })
        }
  </div>
  <div className='slider-icons'>
    <div>
    <BsArrowLeft  style={{color:"#5b9af385"}} onClick={()=>setIndex(index-1)}/>
    </div>
    <div className='navigation-btns'>
            {/* <button className={index===0?"active":""} onClick={()=>setIndex(0)}/>
            <button className={index===1?"active":""} onClick={()=>setIndex(1)}/>
            <button className={index===2?"active":""} onClick={()=>setIndex(2)}/>
            <button className={index===3?"active":""} onClick={()=>setIndex(3)}/> */}
            {
                TestimonialsData.map((_,i)=>{
                    return <button key={i} className={index===i?"active":" "} onClick={()=>setIndex(i)}/>
                })
            }
            </div>
            <div>
            <BsArrowRight  onClick={()=>setIndex(index+1)}/>
            </div>
        </div>
  </>
}

export default Testimonials;