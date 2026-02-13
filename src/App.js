import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import * as Images from './images';
import Films from './films';
import Music from './music';
import Highlights from './highlights';
import 'bootstrap-icons/font/bootstrap-icons.css';



function AppContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isdotOpen, setIsDotOpen] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    setSearchTerm("");   
    setIsDotOpen(false); 
  }, [location]);

  return (
    <div className="App">
      
      <nav>
        <div> 
          <Link to="/highlights">
            <p>Ghibli</p>
            <span>Re</span>
          </Link>
          <img className="nav-logo" src={Images.navlogo} alt="nav logo" />
        </div>

        <input 
          className="search-input" 
          type="search" 
          placeholder="Search" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="hamburger" onClick={() => setIsDotOpen(!isdotOpen)}>
          <i className={isdotOpen ? "bi bi-x" : "bi bi-list"}></i>
        </div>  

        <ul className={isdotOpen ? "nav-links open" : "nav-links"}>
          <div className='link-container'>
            <li><Link className="nav-link"to="/films">Films</Link></li>
            <li><Link className="nav-link"to="/music">Music</Link></li>
            <li><Link  className="nav-link"to="/highlights">Highlight</Link></li>
          </div>
          
        </ul>
      </nav>

      <main className="page-content"> 
        <Routes>
          <Route path="/films" element={<Films searchTerm={searchTerm} />} />
          <Route path="/music" element={<Music searchTerm={searchTerm} />} />
          <Route path="/highlights" element={<Highlights />} />
        </Routes>
      </main>

    </div>
  );
}


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;