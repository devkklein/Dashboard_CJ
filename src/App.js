import React from "react";
import Login from './Pages/login';
import Signup from "./Pages/signup";  
import Home from "./Pages/home";
import Settings from "./Pages/settings";
import Userdata from "./Pages/userdata";
import Report from "./Pages/report";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element= {<Signup/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/settings" element={<Settings/>}></Route>
      <Route path="/userdata" element={<Userdata/>}></Route>
      <Route path="/reports" element={<Report/>}></Route>
      
    </Routes>
    </BrowserRouter>
    
  )
}

export default App;
