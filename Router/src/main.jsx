import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../Component/Layout/Layout.jsx'
import Home from '../Component/Home/Home.jsx'
import About from '../Component/About/About.jsx'
import Contanct from '../Component/Contanct/Contanct.jsx'
import Github,{githubInfoLoader} from '../Component/Github/Github.jsx'
import User from '../Component/User/User.jsx'

// const router = createBrowserRouter ([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contanct/>
//       },
//       {
//         path:"github",
//         element:<Github/>
//       }
//     ]
//   }
// ])

import { useLoaderData } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='Home' element={<Home/>}/>
        <Route path='contact' element={<Contanct/>}/>
        <Route path='about' element={<About/>}/>
        <Route 
        loader={githubInfoLoader}
        path='github'
        element={<Github/>}/>
        <Route path='user/:userid' element={<User/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
