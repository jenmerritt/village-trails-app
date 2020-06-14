import React, {useEffect, useRef, useState} from 'react';
import { loadModules } from 'esri-loader';
import './styles/Trail.css';
import './styles/Map.css';

function Map({updatePageNumberFromMap}) {

  const [updateStatus, setUpdateStatus] = useState(false);

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

          // var point = {
          //   type: "point",
          //   longitude: -1.142849,
          //   latitude: 54.127653
          // };
   
          // var simpleMarkerSymbol = {
          //   type: "simple-marker",
          //   color: [226, 119, 40],  // orange
          //   outline: {
          //     color: [255, 255, 255], // white
          //     width: 1
          //   }
          // };
   
          // var pointGraphic = new Graphic({
          //   geometry: point,
          //   symbol: simpleMarkerSymbol
          // });
   
          // graphicsLayer.add(pointGraphic);

          ////////////// testing popups

          var setPageAction = {
            title: "Set Page",
            id: "set-page"
          }
          
          var popupCrayke = {
            "title": "{TITLE}",
            "content": "Leave the churchyard by the side steps on your left and walk up to the gates of Crayke Castle (19). First built in the twelfth century, probably in timber, it is said to have played host to five Plantagenet kings. The large imposing building, ‘The Great Chamber’ dates from the mid fifteenth century. Ruins of another late fifteenth century construction can still be seen. Possibly having been besieged in the Civil War, the castle was slighted and fell into ruin, but was restored soon after. The Great Chamber had electric lights installed in 1887. Such was the excitement in the village, that the village children were invited up to see them.",
            "actions": [setPageAction]
          }

    
          var trailheads = new FeatureLayer({
            url: "https://services.arcgis.com/bMgojlbrTl9MfMgx/arcgis/rest/services/crayke_history_trail/FeatureServer",
            outFields: ["TRL_NAME","CITY_JUR","X_STREET","PARKING","ELEV_FT"],
            popupTemplate: popupCrayke
          });
    
          map.add(trailheads);

          view.popup.on("trigger-action", function(event){
            if(event.action.id === "set-page"){
              updatePageNumberFromMap(3);
            }
          })

          return () => {
            if (view) {
              // destroy the map view
              view.container = null;
            }
          };

        })
      }, [updateStatus]
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

