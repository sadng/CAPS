var mymap = L.map('map', {
  fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'topleft'
  }}).setView([21.485, -157.9639], 10);

  
//add minimum and maximum zoom

L.control.navbar().addTo(mymap);

new L.basemapsSwitcher([
    {
      layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      }).addTo(mymap), //Default Basemap
      icon: 'base/eo.jpg',
      name: 'Imagery'
    },
    {
      layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'    
      }),
      icon: 'base/mo.jpg',
      name: 'Topographic'
    },
    {
        layer: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }),
        icon: 'base/oo.jpg',
        name: 'Street'
      },
  ], { position: 'topright' }).addTo(mymap);


  //Adding Layer Test
  //var names are file abbreviation+island
 // var TWHO = L.geoJson(TWH, {
   // filter: function(feature, layer) {
   //     return (TWH)
    //    }
 //   }).bindPopup(function (layer) {
   //     return (layer.feature.properties.name);
//}).addTo(mymap);

// Live USGS all month Earthquake feed.
$.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",function(data){
    L.geoJson(data, {
        pointToLayer: function(feature, latlng){
          var marker = L.circleMarker(latlng, {radius: feature.properties.mag, color: 'orange', opacity: 0.5});
            marker.bindPopup("M " + feature.properties.mag + " earthquake located " + feature.properties.place );
            return marker;
        }
    }).addTo(mymap);
});

var FRAOS = {
  "color": "grey",
}

L.geoJSON(FRAO, {
  style: FRAOS}
  ).addTo(mymap);

var T1PCFZ3OS = {
  "color": "yellow",
}

L.geoJSON(T1PCFZ3O, {
  style: T1PCFZ3OS}
  ).addTo(mymap);

var FHADFIRMOS = {
  "color": "purple",
}

L.geoJSON(FHADFIRMO, {
  style: FHADFIRMOS}
  ).addTo(mymap);

var ETEZOS = {
  "color": "teal",
}
  
L.geoJSON(ETEZO, {
  style: ETEZOS}
  ).addTo(mymap);

var TEZOS = {
  "color": "black",
}

L.geoJSON(TEZO, {
  style: TEZOS}
  ).addTo(mymap);

var TSKOS = {
  "color": "pink",
}

L.geoJSON(TSKO, {
  style: TSKOS}
  ).addTo(mymap);

//on each feature popup?
