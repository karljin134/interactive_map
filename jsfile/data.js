const BASE_API_URL = "https://api.foursquare.com/v3";
const API_KEY = "fsq3d8HsaUFx6m1QmbJGDLHwSmEK4DMnknQuUWYfjP/8CdI=";
const DEFAULT_CENTER_COORDINATE = "1.3649170000000002,103.82287200000002"
const headers = {
    "Accept": 'application/json',
    "Authorization": API_KEY
}

// - reference : https://developer.foursquare.com/reference/place-search
async function findPlaces(query) {
    let places = [];
    let response = await axios.get(BASE_API_URL + "/places/search", {
        "headers": headers,
        "params": {
            'll': DEFAULT_CENTER_COORDINATE,
            'query': query, // - search text
            'limit': 50, // - set result limit to 50 places (max)
            'categories': 15000 // - Health and Medicine Category
        }
    })

    for (let place of response.data.results) {
        let place_data = {
            name: place.name,
            latitude: place.geocodes.main.latitude,
            longitude: place.geocodes.main.longitude
        }

        places.push(place_data);
    }

    return places
}



async function getPlacesData(apiUrl){
    let places = [];
    let response = await axios.get(apiUrl)

    for (let place of response.data.features) {

        let descWrapper = document.createElement('div');
        descWrapper.innerHTML = place.properties.Description;
        let trTags = descWrapper.getElementsByTagName("tr");
        let placeName = '';
        for (var i = 0; i < trTags.length; i++) {
            console.log(trTags[i].getElementsByTagName('th')[0].innerHTML);
            if (
                trTags[i].getElementsByTagName('th')[0].innerHTML == 'NAME'
                || trTags[i].getElementsByTagName('th')[0].innerHTML == 'PHARMACY_NAME'
            ) {
                placeName = trTags[i].getElementsByTagName('td')[0].innerHTML
            }
        }

        if (placeName.length <= 0) {
            placeName = 'test1232'
        }

        console.log(placeName);

        let place_data = {
            name: placeName,
            latitude: place.geometry.coordinates[1],
            longitude: place.geometry.coordinates[0]
        }

        places.push(place_data);

    }

    return places
}