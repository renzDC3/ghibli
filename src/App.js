
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React,{useState} from 'react';
import './App.css';
import * as Images from './images';
import Home from './home';
import Films from './films';
import About from './about';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  const search = () => {console.log("Searching...");};
  const [searchTerm, setSearchTerm] = useState(""); 
  
  const [isdotOpen, setIsDotOpen] = useState(false);
  const closeMenu = () => setIsDotOpen(false);

  return (
    <Router>
      <div className="App">
        {isdotOpen && (
  <div 
    className="menu-backdrop" 
    onClick={() => setIsDotOpen(false)}
  ></div>
)}
    <nav>
      <div> 
      <Link to="/home"><p>Ghibli</p>
      <span>Watch</span></Link>
      <img className="nav-logo" src={Images.navlogo} alt="nav logo" />
      </div>

    <div className="search-container">
            <input 
              className="search-input" 
              type="search" 
              placeholder="Search movies..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // 2. Update state on every keystroke
            />
            <i className="bi bi-search"></i>
          </div>

      <div className="hamburger"onClick={() => setIsDotOpen(!isdotOpen)}>
        <i className={isdotOpen ? "bi bi-x": "bi bi-list"}></i>
      </div>  
      
      <ul className={isdotOpen ? "nav-links open" : "nav-links"}onClick={closeMenu}>
        <div className='link-container'>
          
          <li><Link className="nav-link" to="/films">Films</Link></li>
          <li><Link className="nav-link" to="/music">Music</Link></li>
          <li><Link className="nav-link" to="/about" >About</Link></li>
        </div>
      </ul>
    </nav>


        <main className="page-content"> 
      <Routes>
        <Route path="/films" element={<Films searchTerm={searchTerm} />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/films" element={<Films />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>
    </div>
    </Router>
    
   
  );
}

export default App;
