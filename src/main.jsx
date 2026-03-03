import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,} from 'react-router'
import { RouterProvider } from 'react-router'
import RootLayout from './RootLayout/RootLayout.jsx'
import Home from './Pages/Home.jsx'
import Main from './Structure/Hero.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Users from './Pages/Users.jsx'
import UserDetails from './Pages/UserDetails.jsx'
import Posts from './Pages/Posts.jsx'
import PostDetails from './Pages/PostDetails.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    Component: RootLayout,
    children:[
      {
        index:true,
        Component: Home
      },
      {path:'home', Component:Home},
      {path:'about', Component:About},
      {path:'contact', Component:Contact},
      {path:'users',
      loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
      Component:Users}, 
      {
      path:'users/:userId',
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      Component:UserDetails
     },
      {
  path:'posts/:userId',
  loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
  Component:PostDetails,
 },
     {
      path:'posts',
      loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
      Component:Posts
     }
    ]
  },


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
