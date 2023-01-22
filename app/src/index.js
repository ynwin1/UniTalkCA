import React from 'react'
import ReactDOM from 'react-dom/client'
import SignUp from './pages/Signup'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Main from './components/Main'
import Header from './components/Header'
import Login from './pages/Login'
import UserProvider from './utils/Context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Breadcrumb from "react-bootstrap/Breadcrumb";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/Header" element={<Header />} />
         <Route path="/Login" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Posts/:university/:category" element={<Posts />} />
        </Routes>
        </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)