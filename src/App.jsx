import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <nav>
        <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li> <NavLink to="/service">Service</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/project">Project</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li> <NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
import './css/style.css';
