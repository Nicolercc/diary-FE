import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Index from "./Components/Index";
import NewForm from "./Components/NewForm";
import Show from "./Components/Show";
import Edit from "./Components/EditForm";
import "./app.css";
import Home from "./Pages/Home";
const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<Index />} />
          <Route path="/new" element={<NewForm />} />
          <Route path="/show/:id" element={<Show />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
