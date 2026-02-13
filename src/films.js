
import './films.css';
import { db } from './firebase'; 
import { doc, updateDoc, increment } from "firebase/firestore"; // Import DB tools
import { useState, useEffect } from 'react';


function Films({ searchTerm }) {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [films, setFilms] = useState([]);
    useEffect(() => {
      fetch("https://ghibliapi.vercel.app/films")
        .then(response => response.json())
        .then(data => setFilms(data));
    }, []);
    const filteredFilms = films.filter(film => 
      film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
  return (
    <div className="film-page">
      <br></br>
      {selectedFilm && (
        <div className="modal-overlay" onClick={() => setSelectedFilm(null)}>
          <div className="description-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedFilm(null)}>X</button>
            <img src={selectedFilm.movie_banner} alt="banner" className='film-image1'/>
            <h2>{selectedFilm.title}</h2>
            <p className='pp'>{selectedFilm.description}</p>
            <div className="meta">
              <span className='info'>🍅 {selectedFilm.rt_score}%</span>
              <span className='info'>🎬 {selectedFilm.director}</span>
            </div>
          </div>
        </div>
      )}
      {/* 2. THE GRID OF MOVIES */}
      <div className="film-container">
        {filteredFilms.map(film => (
          <div key={film.id} className="film-item" onClick={() => setSelectedFilm(film)}>
            <img className="film-image" src={film.image} alt={film.title} />
            <h3 className="title">{film.title}</h3>
            <div className='display-info'>
              <p className='detail'>Release: {film.release_date}</p>
              <p className='detail'>Director: {film.director}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        );
        };
export default Films;