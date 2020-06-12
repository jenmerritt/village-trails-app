import React, {useState} from 'react';
import Story from './Story';
import Map from './Map';
import './styles/MobileLayout.css';

function MobileLayout({pageNumber, nextPage, previousPage}) {

    const [activeTab, setActiveTab] = useState(1);

    return (
      <div className="mobile-wrapper">
        <div className="story-map-wrapper">
          <div onClick={() => setActiveTab(1)} className="story-map-tab">
            <h1>Story</h1>
          </div>
          <div onClick={() => setActiveTab(2)} className="story-map-tab">
            <h1>Map</h1>
          </div>
        </div>
        { activeTab === 1 ? 
        <Story pageNumber={pageNumber} nextPage={nextPage} previousPage={previousPage} />
        : null }
        { activeTab === 2 ?
        <Map pageNumber={pageNumber} />
        : null }
      </div>
    );
  }

export default MobileLayout;
