
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Dashboard from './Dashboard'
import Signup from './SignupPage'
import Login from './LoginPage'
import './App.css'
import PrivateRoute from "./PrivateRoute";

function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
