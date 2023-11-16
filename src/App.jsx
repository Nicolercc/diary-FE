import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Diary/NavBar";
import Index from "./Components/Diary/Index";
import NewForm from "./Components/Diary/NewForm";
import Show from "./Components/Diary/Show";
import Edit from "./Components/Diary/EditForm";
import "./app.css";
const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/new" element={<NewForm />} />
          <Route path="/show/:id" element={<Show />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
