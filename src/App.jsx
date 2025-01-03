/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Profile/:username" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
