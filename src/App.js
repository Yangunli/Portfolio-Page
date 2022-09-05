import React from "react";
import "./styles/style.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Form from "./Page/Form";
import Contact from "./Page/Contact";
import Projects from "./Page/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Page/Home";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<Form />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projectList" element={<Projects />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
