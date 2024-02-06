import React from 'react'

import { NavLink,Outlet } from 'react-router-dom'
function Nav() {
  return (
    <div className='h-screen text-white '>
        <nav className='absolute'>
            <NavLink>H</NavLink>
        </nav>
      <Outlet/>
    </div>
  )
}

export default Nav
