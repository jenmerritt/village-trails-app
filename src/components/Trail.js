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
        <div className="show-hide-story">
        {showStory ? 
              <div className="show-hide-story-button" onClick={() => setShowStory(false)}><h3>Hide Story</h3></div>
            :     
              <div className="show-hide-story-button" onClick={() => setShowStory(true)}><h3>Show Story</h3></div>
        }
        </div>
          <div className="large-only">
            <div className="trail-wrapper">
              { showStory ? 
                <>
                  <Story />
                </>
                :
                null }
              <Map reloadMap={reloadMap} />
            </div>
          </div>
      </>
    );
}

export default Trail;
