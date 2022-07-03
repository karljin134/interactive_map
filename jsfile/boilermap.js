// - initialize default center point and zoom level of the map
let centerPoint = [1.3521, 103.8198]
let zoomLevel = 11
let query = ''
let map = ''
let markerLayer = ''

function initMap() {
    map = L.map('map').setView(centerPoint, zoomLevel);

    // set up the tile layers
    let tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
    })

    tileLayer.addTo(map);

    return map;
}

function displayMarkers(geodata) {
    // - if has existing layer 
    if (typeof markerLayer.clearLayers != 'undefined') {
        // - clear layer before adding new one 
        markerLayer.clearLayers();
    }
    
    // - marker cluster
    markerLayer = L.markerClusterGroup();
    
    // - loop through markers data list
    for (let place of geodata) {

        // - custom marker variable
        let customMarker = new L.icon({
            iconUrl: 'images/leaf-green.png',
            shadowUrl: 'images/leaf-shadow.png',
            iconSize:     [38, 95], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        // - init marker 
        let marker = L.marker([
            place.latitude, 
            place.longitude,
            { icon: customMarker }
        ])
        .bindPopup('<i class="fas fa-seedling pr-2"></i> ' + place.name);
        markerLayer.addLayer(marker); 

        // $(marker).click(function(){
        //     map.flyTo([n.geometry.coordinates[1], n.geometry.coordinates[0]],16)
        // })
    }
    
    // - add markers to map
    markerLayer.addTo(map)
    // map.setView(centerPoint,12)
}


function displayMarkerFromFoursquare(argument) {
    // body...
}

