import React, {useEffect, useRef, useState} from 'react';
import { loadModules } from 'esri-loader';
import './styles/Trail.css';
import './styles/Map.css';

function Map() {

  const mapRef = useRef();

    useEffect(
      () => {
        // lazy load the required ArcGIS API for JavaScript modules and CSS
        loadModules(['esri/Map', 'esri/views/MapView', 'esri/widgets/BasemapToggle', 'esri/layers/GraphicsLayer', 'esri/Graphic', 'esri/layers/FeatureLayer'], { css: true })
        .then(([ArcGISMap, MapView, BasemapToggle, GraphicsLayer, Graphic, FeatureLayer]) => {

          const map = new ArcGISMap({
            basemap: 'osm'
            // basemap: 'streets-navigation-vector'
          });

          // load the map view at the ref's DOM node
          const view = new MapView({
            container: mapRef.current,
            map: map,
            center: [-1.142849, 54.127653],
            zoom: 17
          });

          const basemapToggle = new BasemapToggle({
            view: view,
            nextBasemap: "satellite"
            // nextBasemap: "topo-vector"
          });

          view.ui.add(basemapToggle, "bottom-right");

          var graphicsLayer = new GraphicsLayer();
          map.add(graphicsLayer);

          // var setPageAction = {
          //   title: "Set Page",
          //   id: "set-page"
          // }
          
          var popupTemp = {
            "title": "{TITLE}",
            "content": "{CONTENT}"
            // "actions": [setPageAction]
          }

    
          var pointsOfInterest = new FeatureLayer({
            url: "https://services.arcgis.com/bMgojlbrTl9MfMgx/arcgis/rest/services/crayke_history_trail/FeatureServer",
            outFields: ["TITLE", "CONTENT", "NUMBER"],
            popupTemplate: popupTemp
          });
    
          map.add(pointsOfInterest);

          // view.popup.on("trigger-action", function(event){
          //   if(event.action.id === "set-page"){
          //     updatePageNumberFromMap(3);
          //   }
          // })

          return () => {
            if (view) {
              // destroy the map view
              view.container = null;
            }
          };

        })
      }
    );

    return (
      <div className="map-wrapper">
        <div className="webmap" ref={mapRef} />
      </div>
    );

}

export default Map;

