import React from 'react';
import './styles/HowTo.css';

function HowTo({setDisplayHelp}) {
    return (
      <div className="how-to-wrapper">
        <p>This is the How To Box</p>
        <p>In here I will give some tips about how to use the app and maybe a video too.</p>
        <p onClick={() => setDisplayHelp(false)}>Close</p>
      </div>
    );
  }

export default HowTo;
