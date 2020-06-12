import React, {useEffect, useRef} from 'react';
import { loadModules } from 'esri-loader';
import './styles/Trail.css';
import './styles/Map.css';

function Map() {

  const mapRef = useRef();

    useEffect(
      () => {
        // lazy load the required ArcGIS API for JavaScript modules and CSS
        loadModules(['esri/Map', 'esri/views/MapView', 'esri/widgets/BasemapToggle'], { css: true })
        .then(([ArcGISMap, MapView, BasemapToggle]) => {

          const map = new ArcGISMap({
            basemap: 'topo-vector'
          });

          // load the map view at the ref's DOM node
          const view = new MapView({
            container: mapRef.current,
            map: map,
            center: [-1.142849, 54.127653],
            zoom: 17
          });

          var basemapToggle = new BasemapToggle({
            view: view,
            nextBasemap: "satellite"
          });

          view.ui.add(basemapToggle, "bottom-right");

          return () => {
            if (view) {
              // destroy the map view
              view.container = null;
            }
          };

        });
      }
    );

    return (
      <div className="map-wrapper">
        <div className="webmap" ref={mapRef} />
      </div>
    );

    // return (
    //   <div className="map-wrapper">
    //     <br/><br /><br />
    //     <p>This is the Map</p>
    //   </div>
    // );
}

export default Map;

