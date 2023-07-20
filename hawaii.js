var mymap = L.map('map', {
  fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'topleft'
  }}).setView([19.641953, -155.45], 9);

L.control.navbar().addTo(mymap);

new L.basemapsSwitcher([
    {
      layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      }).addTo(mymap), //DEFAULT MAP
      icon: 'base/eh.jpg',
      name: 'Imagery'
    },
    {
      layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'    
      }),
      icon: 'base/mh.jpg',
      name: 'Topographic'
    },
    {
        layer: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }),
        icon: 'base/oh.jpg',
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

var FRAHS = {
  "color": "grey",
}

L.geoJSON(FRAH, {
  style: FRAHS}
  ).addTo(mymap);

var T1PCFZ3HS = {
  "color": "yellow",
}

L.geoJSON(T1PCFZ3H, {
  style: T1PCFZ3HS}
  ).addTo(mymap);

var FHADFIRMHS = {
  "color": "purple",
}

L.geoJSON(FHADFIRMH, {
  style: FHADFIRMHS}
  ).addTo(mymap);

var TEZHS = {
  "color": "black",
}

L.geoJSON(TEZH, {
  style: TEZHS}
  ).addTo(mymap);
