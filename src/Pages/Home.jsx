import React from 'react'
import { useEffect,useRef } from 'react';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function Home() {
const nameref=useRef(null)
const jobref=useRef(null)
const homeref=useRef(null)
const namedref=useRef(null)
const jobdref=useRef(null)
useEffect(() => {
    gsap.to(homeref.current,{
        backgroundColor:'black',
        color:"white",
        duration:3,
        ease: 'power2.inOut',
        // repeat:-1,
        yoyo:true,
        
    })
 gsap.from(nameref.current,{
  y:700,
  duration:3,
  opacity:0,
  ease: 'power2.inOut',
  
   
 })
 gsap.from(jobref.current,{
   
    y:-700,
    duration:3,
    ease: 'power2.inOut',
    opacity:0,
 })
 gsap.from(namedref.current,{
x:-500,
y:200,
duration:3,
ease: 'power2.inOut',
opacity:50,
scale:1.5,
 })
 gsap.from(jobdref.current,{
    x:450,
    y:-200,
    duration:3,
    ease: 'power2.inOut',
    opacity:50,
    scale:1.5
     })
 


}, [])


   
  return (
    <div className='flex flex-col justify-center items-center h-screen px-28 white text-black' ref={homeref} >
        {/* First part */}
      <div className='flex  justify-between'>
        <h1 className='text-[150px] font-black w-5/6 name' ref={nameref}>I AM SUNIL</h1>
        <p className='w-1/6 my-auto text-sm opacity-80' ref={namedref}>Meet Sunil Thakuree: SEO maestro and master of laughs. Get ready for top-notch rankings and endless giggles! 😄✨</p>
      </div>
            {/* Second part */}
      <div className='flex justify-between'>
        <p className='w-1/6 my-auto opacity-80 ' ref={jobdref}>He's got the tricks to skyrocket your rankings and the humor to keep you smiling through every Google algorithm update</p>
        <h1 className='w-4/6 text-[157px] font-black tracking-wide ml-10 leading-tight' ref={jobref}>SEO GOD</h1>

      </div>
      

    </div>
  )
}

export default Home
