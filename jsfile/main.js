$(function () {
    // - initialize map 
    initMap();

    // - load map markers
    getPlacesData('geojson/breast-center.geojson').then(function(data){
        displayMarkers(data)
    });

    document.querySelector('#btnmap').addEventListener('click', function () {
        let allPages = document.querySelectorAll('.page');
        for (let page of allPages) {
            page.classList.add('hidden');
            page.classList.remove('show');
        }

        let page2 = document.querySelector('#page-2');
        page2.classList.add('show');
        page2.classList.remove('hidden');
    })

    document.querySelector('#btnhome').addEventListener('click', function () {
        let allPages = document.querySelectorAll('.page');
        for (let page of allPages) {
            page.classList.add('hidden');
            page.classList.remove('show');
        }

        let page1 = document.querySelector('#page-1');
        page1.classList.add('show');
        page1.classList.remove('hidedn');
    })

    document.querySelector('#btnQuitCenter').addEventListener('click', function () {
        getPlacesData('geojson/quit-center.geojson').then(function(data){
            displayMarkers(data)
        });
    })

    document.querySelector('#btnPharmaStore').addEventListener('click', function () {
        getPlacesData('geojson/pharma-store.geojson').then(function(data){
            displayMarkers(data)
        });
    })

    document.querySelector('#btnBreastCenter').addEventListener('click', function () {
        getPlacesData('geojson/breast-center.geojson').then(function(data){
            displayMarkers(data)
        });
    })

    document.querySelector('#btnCervicalCenter').addEventListener('click', function () {
        getPlacesData('geojson/cervical-center.geojson').then(function(data){
            displayMarkers(data)
        });
    })

    document.getElementById("searchForm").addEventListener("submit", function(e) {
        let query = document.getElementById('inputQuery').value;
        findPlaces(query).then(function(data) { 
            displayMarkers(data)
          }
        );
    })

})

