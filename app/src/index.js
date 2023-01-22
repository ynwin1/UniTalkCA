import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Main from './components/Main'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:university/:category" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
