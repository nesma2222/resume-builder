import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ResumeEditor from "./pages/ResumeEditor";
import Preview from "./pages/Preview";
import PrivateRoute from "./routes/PrivateRoute";


function App() {
  return (
      
      <Routes>
        <Route path="/" element={<Login />} />    
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={ <PrivateRoute>
      <Dashboard />
    </PrivateRoute>} />
        <Route path="/editor" element={<ResumeEditor />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    
  );
}

export default App;
