// Mapbox token

// //YOUR TURN: add your Mapbox token
// mapboxgl.accessToken = mapbox_token
// // mapboxgl.accessToken = 'pk.eyJ1Ijoibm92dXMxMDIwIiwiYSI6ImNrcGltcnp0MzBmNzUybnFlbjlzb2R6cXEifQ.GjmiO9cPjoIozKaG7nJ4qA'; var map = new mapboxgl.Map({ container: 'map', // container id style: 'mapbox://styles/mapbox/streets-v11', center: [-96, 37.8], // starting position zoom: 3 // starting zoom }); // Add geolocate control to the map. map.addControl( new mapboxgl.GeolocateControl({ positionOptions: { enableHighAccuracy: true }, trackUserLocation: true }) );

// var map = new mapboxgl.Map({
//     container: 'map', // container id
//     style: 'mapbox://styles/mapbox/streets-v11', // YOUR TURN: choose a style: https://docs.mapbox.com/api/maps/#styles
//     center: [-101.67517342866886,39.148784399009294], // starting position [lng, lat]
//     // attributionControl: false
// });


// // geocoder/searchbar
// var geocoder = new MapboxGeocoder({ // Initialize the geocoder
//     accessToken: mapbox_token, // Set the access token
//     mapboxgl: mapboxgl, // Set the mapbox-gl instance
// });
// // Add the geocoder to the map
// map.addControl(geocoder);
// map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');


// let a = $.ajax({
//     type: "GET",
//     url: `https://api.mapbox.com/datasets/v1/novus1020/ckpmr3oan039k27ng6lp616xj/features?access_token=${mapbox_token}`,
//     dataType: "json",
//     success: function (data) {
//         console.log('ok', data)
//     }
// }).done(geojson => {

//     let UseBbox = (geo, pad) => {
//         let bbox = turf.bbox(geo);
//         map.fitBounds(bbox, {
//             padding: pad,
//         })
//     }

//     map.on('load', () => {


//     });
// })
