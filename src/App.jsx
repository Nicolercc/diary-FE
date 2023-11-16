import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Diary/NavBar";
import Index from "./Components/Diary/Index";
import NewForm from "./Components/Diary/NewForm";
import Show from "./Components/Diary/Show";
import Edit from "./Components/Diary/EditForm";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact component={Index} />
          <Route path="/new" component={NewForm} />
          <Route path="/show/:id" component={Show} />
          <Route path="/edit/:id" component={Edit} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
