import React, {useState} from 'react';
import Story from './Story';
import Map from './Map';
import MobileLayout from './MobileLayout';
import HowTo from './HowTo';
import './styles/Trail.css';

function Trail() {

    const [showStory, setShowStory] = useState(true);
    const [reloadMap, setReloadMap] = useState(false);
    const [displayHelp, setDisplayHelp] = useState(false);

    return (
      <>
        <div className="mobile-only">
          <MobileLayout />
        </div>
        
        <div className="large-only">
          <div className="show-hide-story">
          {showStory ? 
          <>
                <div className="show-hide-story-button" onClick={() => setShowStory(false)}><p>Hide Text</p></div>
                <div className="show-hide-story-button" onClick={() => setDisplayHelp(!displayHelp)}><p>Need help?</p></div>
          </>
              :     
          <>
                <div className="show-hide-story-button" onClick={() => setShowStory(true)}><p>Show Text</p></div>
                <div className="show-hide-story-button" onClick={() => setDisplayHelp(!displayHelp)}><p>Need help?</p></div>
          </>
          }
          </div>
          { displayHelp ? 
            <div>
              <HowTo setDisplayHelp={setDisplayHelp}/>
            </div>
            :
            null
          }
            <div className="trail-wrapper">
                { showStory ? 
                  <Story />
                  :
                  null }
                <Map reloadMap={reloadMap} />
              </div>
          </div>
      </>
    );
}

export default Trail;
