import React, {useState} from 'react';
import Story from './Story';
import Map from './Map';
import './styles/MobileLayout.css';

function MobileLayout() {

    const [activeTab, setActiveTab] = useState(2);

    return (
      <div className="mobile-wrapper">
        <div className="story-map-wrapper">
          <div onClick={() => setActiveTab(1)} className="story-map-tab">
            <h2>Story</h2>
          </div>
          <div onClick={() => setActiveTab(2)} className="story-map-tab">
            <h2>Map</h2>
          </div>
        </div>
        { activeTab === 1 ? 
        <Story />
        : null }
        { activeTab === 2 ?
        <Map />
        : null }
      </div>
    );
}

export default MobileLayout;
