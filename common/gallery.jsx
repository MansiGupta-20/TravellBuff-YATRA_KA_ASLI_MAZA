import React from 'react';
import Pic from '../assets/pictures/logo.png';
const Gallery = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>School Gallery</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <img
          src={Pic}
          alt="Gallery"
          style={{ borderRadius: "10px", transition: '0.3s', transform: 'scale(1)' }}
          className="img-fluid shadow"
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
    </div>
  );
}

export default Gallery;


