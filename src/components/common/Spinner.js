import React from 'react';
import spinner from './spinner.webp';

export default function Spinner() {
    return (
        <div>
            <img 
              src={spinner} 
              style={{width: '50px', margin: 'auto', 'marginTop': '2rem', display: 'block' }}
              alt="Loading..."     
              />
        </div>
    )
}
