import React, {useState} from 'react';
import Story from './Story';
import Map from './Map';
import MobileLayout from './MobileLayout';
import './styles/Trail.css';

function Trail() {

    const [showStory, setShowStory] = useState(true);
    const [reloadMap, setReloadMap] = useState(false);

    return (
      <>
        <div className="mobile-only">
          <MobileLayout />
        </div>
          <div className="large-only">
            <div className="trail-wrapper">
              { showStory ? 
                <>
                  <p onClick={() => setShowStory(false)}>Hide Story</p>
                  <Story />
                </>
                :
                <p onClick={() => setShowStory(true)}>Show Story</p> }
              <Map reloadMap={reloadMap} />
            </div>
          </div>
      </>
    );
}

export default Trail;
