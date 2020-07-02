import React from 'react';
import './styles/HowTo.css';

function HowTo({setDisplayHelp}) {
    return (
      <div className="how-to-wrapper">
        <h2>How to use this app...</h2>
        <p>The app is designed to guide you around the Crayke Village Trail.</p>
        <p>The map shows points of interest along the trail, numbered from 1-19 in a suggested order - but feel free to explore your own route!</p>
        <p>Click on a marker to read more about each point of interest.</p>
        <p>You can read through the route on the left hand side, or you can hide this text and make the map full screen (just click the "Hide Text" button above this box).</p>
        <p>The app has also been designed to be easy to use on your mobile phone - so you can walk around the village and take the route with you. You will require an internet connection (e.g. 4G) to use it.</p>
        <p>Find out more about Crayke at <a href="http://www.craykehistory.uk" target="_blank" rel="noopener noreferrer">www.craykehistory.uk</a>.</p>
        <h4 onClick={() => setDisplayHelp(false)}>Close</h4>
      </div>
    );
  }

export default HowTo;
