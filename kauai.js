var mymap = L.map('map', {
  fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'topleft'
  }}).setView([22.056169, -159.525451], 10);

L.control.navbar().addTo(mymap);

new L.basemapsSwitcher([
    {
      layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      }).addTo(mymap), //DEFAULT MAP
      icon: 'base/ek.jpg',
      name: 'Imagery'
    },
    {
      layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'    
      }),
      icon: 'base/mk.jpg',
      name: 'Topographic'
    },
    {
        layer: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }),
        icon: 'base/ok.jpg',
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

var FRAKS = {
  "color": "grey",
}

L.geoJSON(FRAK, {
  style: FRAKS}
  ).addTo(mymap);

var T1PCFZ3KS = {
  "color": "yellow",
}

L.geoJSON(T1PCFZ3K, {
  style: T1PCFZ3KS}
  ).addTo(mymap);

var FHADFIRMKS = {
  "color": "purple",
}

L.geoJSON(FHADFIRMK, {
  style: FHADFIRMKS}
  ).addTo(mymap);

var ETEZKS = {
  "color": "teal",
}
  
L.geoJSON(ETEZK, {
  style: ETEZKS}
  ).addTo(mymap);

var TEZKS = {
  "color": "black",
}

L.geoJSON(TEZK, {
  style: TEZKS}
  ).addTo(mymap);

var TSKKS = {
  "color": "pink",
}

L.geoJSON(TSKK, {
  style: TSKKS}
  ).addTo(mymap);
  
