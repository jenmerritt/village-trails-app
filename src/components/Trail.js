import React, {useState} from 'react';
import Story from './Story';
import Map from './Map';
import MobileLayout from './MobileLayout';
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
      <>
        <div className="mobile-only">
          <MobileLayout pageNumber={pageNumber} nextPage={nextPage} previousPage={previousPage} />
        </div>
        <div className="large-only">
          <div className="trail-wrapper">
            <Story pageNumber={pageNumber} nextPage={nextPage} previousPage={previousPage} />
            <Map pageNumber={pageNumber} />
          </div>
        </div>
      </>
    );
  }

export default Trail;