import React from 'react';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Optional: create a CSS file for global styling

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          {/* Define other routes for projects and contact */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
