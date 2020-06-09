import React, {useState} from 'react';
import Story from './Story';
import Map from './Map';
import './styles/Trail.css';

function Trail() {

    const [pageNumber, setPageNumber] = useState(1);
    const [storyActive, setStoryActive] = useState(false);

    function nextPage(){
      setPageNumber(pageNumber + 1)
    }

    function previousPage(){
      setPageNumber(pageNumber - 1)
    }

    return (
      <div className="trail-wrapper">
        <div className="story-map-wrapper">
          <div className="story-map-tab">
            <h1>Story</h1>
          </div>
          <div className="story-map-tab">
            <h1>Map</h1>
          </div>
        </div>
        <Story pageNumber={pageNumber} nextPage={nextPage} previousPage={previousPage} />
        <Map pageNumber={pageNumber} />
      </div>
    );
  }

export default Trail;
