 require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "esri/widgets/Search",
      "esri/widgets/Legend",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home, Search, Legend) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"fbbbaa2fbfda41b8b3f96427c3ac5c79" 
        }
      });
      
      var camera = new Camera({
        position: [
          -90.1994, // lon
          38.6270, // lat
          5000000// elevation in meters
        ],
        tilt:0,
        heading: 0
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-right");
    
    [bei, los, syd, rom, nyc, stl].forEach(function(button) {
      button.style.display = '.esri-button';
      view.ui.add(button, 'bottom-right');
    });
    
    bei.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 116.4074,
          y: 39.9042,
          z: 5000000
        },
        tilt: 0,
        heading: 0
      });
    });
      
     los.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: -118.4074,
          y: 34.9042,
          z: 5000000
        },
        tilt: 0,
        heading: 0
      });
    });
   

    
     syd.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 151.4074,
          y: -33.9042,
          z: 5000000
        },
        tilt: 0,
        heading: 0
      });
    });
      
           rom.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 9.4074,
          y: 40.9042,
          z: 5000000
        },
        tilt: 0,
        heading: 0
      });
    });
   
              nyc.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: -74,
          y: 40.9042,
          z: 5000000
        },
        tilt: 0,
        heading: 0
      });
    });
   stl.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });
	  
   var searchWidget = new Search({
        view: view
      });

      // Add the search widget to the top right corner of the view
      view.ui.add(searchWidget, {
        position: "top-right"
      });
  view.when(function(){
    
    var featureLayer = scene.layers.getItemAt(0); 
    var legend = new Legend({
      view: view,
      layerInfos: [{
        layer: featureLayer,
        title: "world pop"
      }]
    })
    
    view.ui.add(legend, "bottom-left");
  }); 

    });
