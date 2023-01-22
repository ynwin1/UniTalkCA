import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Main from './components/Main'
import Header from './components/Header'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Breadcrumb from "react-bootstrap/Breadcrumb";
import 'bootstrap/dist/css/bootstrap.min.css';




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href=""> </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
    <BrowserRouter>
      
        
       
      
        <Routes>
          <Route path="/" element={<Home />} />
          
            <Route path="/Posts" element={<Posts />} />
           
          
          
        </Routes>
       
       
     
    </BrowserRouter>
  </React.StrictMode>
)
