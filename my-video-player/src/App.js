import React from 'react';
import './App.css';
import Home from "./components/Home";
import CourseStructure from "./components/CourseStructure";
import {BrowserRouter as Router,Route,Routes, Link } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      

      <Router>
            <Routes>

                <Route exact path = "/"  element={<Home />} />
                <Route  path = "/:courseName"  element={<CourseStructure />} />

            </Routes>

      </Router>

    </div>
  );
}

export default App;
