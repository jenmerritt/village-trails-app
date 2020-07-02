import React, {useEffect, useRef, useState} from 'react';
import { loadModules } from 'esri-loader';
import './styles/Trail.css';
import './styles/Map.css';

function Map({reloadMap}) {

  const mapRef = useRef();

    useEffect(
      () => {
        loadModules(['esri/Map', 'esri/views/MapView', 'esri/widgets/BasemapToggle', 'esri/layers/GraphicsLayer', 'esri/Graphic', 'esri/layers/FeatureLayer'], { css: true })
        .then(([ArcGISMap, MapView, BasemapToggle, GraphicsLayer, Graphic, FeatureLayer]) => {

          const map = new ArcGISMap({
            basemap: 'osm'
          });

          const view = new MapView({
            container: mapRef.current,
            map: map,
            center: [-1.142849, 54.127653],
            zoom: 17
          });

          const basemapToggle = new BasemapToggle({
            view: view,
            nextBasemap: "satellite"
          });

          view.ui.add(basemapToggle, "bottom-right");

          var graphicsLayer = new GraphicsLayer();
          map.add(graphicsLayer);

          /////////////
////////////// Attempting to write next/previous action for PopupTemplate:
          /////////////

          // var goToNextAction = {
          //   title: "Next",
          //   id: "next",
          //   // action: view.popup.next,
          //   className: "esri-icon-next"
          // };

          // view.popup.on("trigger-action", function(event){
          //   if(event.action.id === "next"){
          //     console.log(view.popup.selectedFeature)
          //     console.log(view.popup.selectedFeatureIndex)
          //     console.log(view.popup.next)
          //     console.log(view.popup.selectedFeature.attributes.ObjectId)
          //     view.popup.next()
          //   }
          // }); 


////////// Zoom out action

            var zoomOutAction = {
            title: " ",
            id: "zoom-out",
            className: "esri-icon-zoom-out-magnifying-glass"
          };

          var zoomInAction = {
            title: "Zoom to",
            id: "zoom-in",
            className: "esri-icon-zoom-in-magnifying-glass"
          };

          view.popup.on("trigger-action", function(event){
            if(event.action.id === "zoom-out"){
              view.goTo({
                center: view.popup.selectedFeature,
                zoom: view.zoom - 2
              });
            } if(event.action.id === "zoom-in"){
              view.goTo({
                center: view.popup.selectedFeature,
                zoom: view.zoom + 5
              });
            }
          });
              
          var pointsOfInterest = new FeatureLayer({
            url: "https://services.arcgis.com/bMgojlbrTl9MfMgx/arcgis/rest/services/crayke_history_trail/FeatureServer",
            outFields: ["OBJECTID", "TITLE", "CONTENT", "NUMBER"],
            popupTemplate: {
              title: "{NUMBER} : {TITLE}",
              content: "{CONTENT}",
              overwriteActions: true,
              actions: [zoomInAction, zoomOutAction]
            }
          });
    
          map.add(pointsOfInterest);  
          
           return () => {
            if (view) {
              // destroy the map view
              view.container = null;
            }
          };

        })
      }, [reloadMap]
    );

    return (
      <div className="map-wrapper">
        <div className="webmap" ref={mapRef} />
      </div>
    );

}

export default Map;
