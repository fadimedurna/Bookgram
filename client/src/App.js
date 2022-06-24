import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  //create routes
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/profile/:username' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
