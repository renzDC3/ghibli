import React, { useState } from 'react';
import musicData from './music.json';
import './music.css';



function Music({searchTerm = ""}) {
  const [currentTrack, setCurrentTrack] = useState(null);
  
  const filteredMusic = musicData.filter(track=>
    track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.movie.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="music-body">
      <h1 className='caption'>Ghibli Soundtracks</h1>

      {currentTrack && (
        <div className="player-container">
          <div className="player-info">
            <p>Now Playing: <strong>{currentTrack.title}</strong></p>
            <button class="button-close"onClick={() => setCurrentTrack(null)}>Close</button>
          <iframe className='embed-vid'
            src={`https://www.youtube.com/embed/${currentTrack.youtubeId}?autoplay=1&origin=${window.location.origin}`}
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen
          ></iframe>
          </div>
        </div>
      )}

      <div className="music-grid">

        {filteredMusic.map(track => (
          <div key={track.id} className="track-card" onClick={() => setCurrentTrack(track)}>
             <div 
            className='play' 
            style={{ backgroundImage: `url(${track.cover})` }}>
            <i className="bi bi-play-circle-fill"></i>
            </div>
          
            <div className="track-details">
              <h3>{track.title} - <span> {track.composer}</span></h3>
              <p>{track.movie} 
               </p>
            
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Music;