import React from 'react';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

import { createBrowserRouter,createRoutesFromElements ,Route, RouterProvider} from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      
      

    </Route>
    
    <Route path='*' element={<Error />} />
    </>
  )
)

export default function App() {
  return <RouterProvider router={router} />;
}