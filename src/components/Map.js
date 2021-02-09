import React, {useEffect, useRef} from 'react';
import { loadModules } from 'esri-loader';
import './styles/Trail.css';
import './styles/Map.css';

function Map({reloadMap}) {

  const mapRef = useRef();

    useEffect(
      () => {
        loadModules(['esri/Map', 'esri/WebMap', 'esri/views/MapView', 'esri/widgets/BasemapToggle', 'esri/layers/GraphicsLayer', 'esri/Graphic', 'esri/layers/FeatureLayer'], { css: true })
        .then(([ArcGISMap, WebMap, MapView, BasemapToggle, GraphicsLayer, Graphic, FeatureLayer]) => {

          // const map = new ArcGISMap({
          //   basemap: 'osm'
          // });

          var map = new WebMap({
            portalItem: {
              id: "dad90383f4c34a42a8b1c70db54b1472"
            }
          });

          const view = new MapView({
            container: mapRef.current,
            map: map,
            center: [-1.142849, 54.127653],
            zoom: 16
          });

          const basemapToggle = new BasemapToggle({
            view: view,
            nextBasemap: "satellite"
          });

          view.ui.add(basemapToggle, "bottom-right");

          var graphicsLayer = new GraphicsLayer();
          map.add(graphicsLayer);

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
              
          // var pointsOfInterest = new FeatureLayer({
          //   url: "https://services.arcgis.com/bMgojlbrTl9MfMgx/arcgis/rest/services/crayke_history_trail/FeatureServer",
          //   outFields: ["OBJECTID", "TITLE", "CONTENT", "NUMBER", "IMAGE"],
          //   popupTemplate: {
          //     title: "{NUMBER} : {TITLE}",
          //     content: `{CONTENT} <p></p><a href="{IMAGE}" target="_blank" rel="noopener noreferrer" ><img src="{IMAGE}" /></a><p>Click image to view full size (opens in new tab)</p>`,
          //     overwriteActions: true,
          //     actions: [zoomInAction, zoomOutAction]
          //   }
          // });
    
          // map.add(pointsOfInterest);  
          
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
