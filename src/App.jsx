import { useState } from 'react'
import Home from './Pages/Home'
import Nav from './Pages/Nav'
import About from './Pages/About'
import Services from './Pages/Services'
import Offers from './Pages/Offers'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Nav/>}>
     <Route index element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/services' element={<Services/>}/>
     <Route path='/offers' element={<Offers/>}/>
     

    </Route>
  )
)
function App() {
  const [count, setCount] = useState(0)

  return (
      <div className=' '>
        
        <RouterProvider router={router} />
      </div>
  )
}

export default App
