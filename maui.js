var mymap = L.map('map', {
  fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'topleft'
  }}).setView([20.8045, -156.353292], 10);

L.control.navbar().addTo(mymap);

new L.basemapsSwitcher([
    {
      layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      }).addTo(mymap), //DEFAULT MAP
      icon: 'base/em.jpg',
      name: 'Imagery'
    },
    {
      layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'    
      }),
      icon: 'base/mm.jpg',
      name: 'Topographic'
    },
    {
        layer: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }),
        icon: 'base/om.jpg',
        name: 'Street'
      },
  ], { position: 'topright' }).addTo(mymap);
  
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

var FRAMS = {
  "color": "grey",
}

L.geoJSON(FRAM, {
  style: FRAMS}
  ).addTo(mymap);

var T1PCFZ3MS = {
  "color": "yellow",
}

L.geoJSON(T1PCFZ3M, {
  style: T1PCFZ3MS}
  ).addTo(mymap);

var FHADFIRMMS = {
  "color": "purple",
}

L.geoJSON(FHADFIRMM, {
  style: FHADFIRMMS}
  ).addTo(mymap);

var ETEZMS = {
  "color": "teal",
}
  
L.geoJSON(ETEZM, {
  style: ETEZMS}
  ).addTo(mymap);

var TEZMS = {
  "color": "black",
}

L.geoJSON(TEZM, {
  style: TEZMS}
  ).addTo(mymap);

var TSKMS = {
  "color": "pink",
}

L.geoJSON(TSKM, {
  style: TSKMS}
  ).addTo(mymap);
  