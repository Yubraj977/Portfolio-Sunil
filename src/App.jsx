import { useState } from 'react'
import Home from './Pages/Home'
import Nav from './Pages/Nav'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Nav/>}>
     <Route index element={<Home/>}/>
     

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
