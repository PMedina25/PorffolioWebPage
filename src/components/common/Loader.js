import React from 'react';
import './styles/loader.css';

const Loader = ({ section }) => {
    return (
      <div className="spinner-container">
        <div className="triple-spinner"></div>
        <div className="loading-info">
            <span>Loading {section}...</span>
        </div>
      </div>
    )
}

export default Loader;
