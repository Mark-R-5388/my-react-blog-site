import React from "react";
import "../src/index.css";
import { Routes, Route } from "react-router-dom";
// import NavBar from "./Components/NavBar";
import HomePage from "../src/Pages/HomePage";
import ProgrammingBlogs from "../src/Pages/ProgrammingBlogs";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Programmingblogs" element={<ProgrammingBlogs />} />
      </Routes>
    </div>
  );
}
export default App;
