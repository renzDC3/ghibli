import React from 'react';
import highlightData from './highlights.json';
import './highlights.css';

function Highlights() {
  
  return (
    
    <div className="about-page">
      <style>{`

    .search-input { display: none !important; }
    `}
      </style>
      <div className="about-header">
        <h1 className='highlight'>Highlights</h1>
 
      </div><br></br>



      <div className="highlights-container">
        {highlightData.map((item) => (
          <div key={item.id} className="highlight-card">
           
            <div className="highlight-content">
                <div>
              <h3 className='context'>{item.title} -<span className="date-badge"> {item.date}</span></h3>
              <h4 className="movie-name">{item.movie}</h4>
              <p className='context'>{item.description}</p>
              
              </div>
              <img className="img_H" src={item.image} alt="Ghibli movie highlight"/>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;