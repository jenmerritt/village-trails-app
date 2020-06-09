import React, {useState} from 'react';
import Story from './Story';
import Map from './Map';
import './styles/Trail.css';

function Trail() {

    const [pageNumber, setpageNumber] = useState(1);

    function nextPage(){
      setpageNumber(pageNumber + 1)
    }

    function previousPage(){
      setpageNumber(pageNumber - 1)
    }

    return (
      <div className="trail-wrapper">
        <Story pageNumber={pageNumber} nextPage={nextPage} previousPage={previousPage} />
        <Map pageNumber={pageNumber} />
      </div>
    );
  }

export default Trail;
