//App.jsx
import React from 'react';
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from '../src/Components/Navbar/Navbar';
import ErrorPage from './pages/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login-Page/LoginPage';
import RegisterPage from './pages/Register-Page/RegisterPage';
import Welcome from './pages/Welcome';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes></>
  );
}

export default App;