import React from 'react'
import { useRef ,useEffect} from 'react';
import fly from '/fly.svg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { NavLink,Outlet } from 'react-router-dom'
console.log(fly);
function Nav() {
 const navref=useRef(null)
 console.log(navref);
 useEffect(() => {
   gsap.from(navref.current,{
    y:-200,
    delay:3,
    duration:3,
    ease: 'power2.inOut',
    stagger:1,
    yoyo:true,
   })

   gsap.set(".ball", { xPercent: -50, yPercent: -50 })
   let targets = gsap.utils.toArray(".ball");
   window.addEventListener("mousemove", (e) => {
     gsap.to(targets, {
       duration: 0.5,
       x: e.clientX,
       y: e.clientY,
      //  ease: "power1.out",
       overwrite: "auto",
       stagger: 0.3,
      
       
     });
     
   });
 
   
 }, [])
 
  return (
    <div className='h-screen text-white ' >
        <nav className='absolute  left-1/2 transform -translate-x-1/2 '>
            <div className='flex gap-6 font-bold 'ref={navref}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/offers'>offers</NavLink>
            
            </div>
        </nav>
      <Outlet/>

      <div className="absolute z-0">
      
     
 
      {/* <div className="ball bg-white w-4 h-4 fixed top-0 left-0 rounded-full pointer-events-none"></div>
      <div className="ball bg-white w-4 h-4 fixed top-0 left-0 rounded-full pointer-events-none"></div>
      <div className="ball bg-white w-4 h-4 fixed top-0 left-0 rounded-full pointer-events-none"></div>
      <div className="ball bg-white w-4 h-4 fixed top-0 left-0 rounded-full pointer-events-none"></div>
      <div className="ball bg-white w-4 h-4 fixed top-0 left-0 rounded-full pointer-events-none"></div>
      <div className="ball bg-white w-4 h-4 fixed top-0 left-0 rounded-full pointer-events-none"></div>
      <div className="ball bg-white w-4 h-4 fixed top-0 left-0 rounded-full pointer-events-none"></div>
      <div className="ball bg-white w-4 h-4 fixed top-0 left-0 rounded-full pointer-events-none"></div>
      <div className="ball bg-white w-4 h-4 fixed top-0 left-0 rounded-full pointer-events-none"></div> */}
      
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none z-0"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none"><img src={fly} alt="" className=' h-8 w-8'/></div>
      <div className="ball fixed top-0 left-0 rounded-full pointer-events-none z-0"><img src={fly} alt="" className=' h-8 w-8'/></div>

    </div>


    </div>
  )
}

export default Nav
