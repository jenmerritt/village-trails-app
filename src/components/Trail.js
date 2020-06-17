import React, {useState} from 'react';
import Story from './Story';
import Map from './Map';
import MobileLayout from './MobileLayout';
import './styles/Trail.css';

function Trail() {

    // const [pageNumber, setPageNumber] = useState(1);

    // function nextPage(){
    //   setPageNumber(pageNumber + 1)
    // }

    // function previousPage(){
    //   setPageNumber(pageNumber - 1)
    // }

    // function updatePageNumberFromMap(number){
    //   setPageNumber(number);
    // }

    return (
      <>
        <div className="mobile-only">
          <MobileLayout />
        </div>
        <div className="large-only">
          <div className="trail-wrapper">
            <Story />
            <Map />
          </div>
        </div>
      </>
    );
}

export default Trail;
