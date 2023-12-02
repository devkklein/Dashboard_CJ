import React, { useEffect } from "react";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import Home from "./Pages/home";
import Settings from "./Pages/settings";
import Userdata from "./Pages/userdata";
import Report from "./Pages/report";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const loggedIN = window.sessionStorage.getItem("isLoggedIn");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={loggedIN ? <Home /> : <Login />}></Route>
        <Route path="/home" element={loggedIN ? <Home /> : <Login />}></Route>
        <Route
          path="/settings"
          element={loggedIN ? <Settings /> : <Login />}
        ></Route>
        <Route
          path="/userdata"
          element={loggedIN ? <Userdata /> : <Login />}
        ></Route>
        <Route
          path="/reports"
          element={loggedIN ? <Report /> : <Login />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
