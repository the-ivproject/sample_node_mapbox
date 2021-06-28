

// fetch the initial list of dreams
fetch("/map-api")
    .then(response => response.json()) // parse the JSON from the server
    .then(auth => {
        //YOUR TURN: add your Mapbox token
        const mapbox_token = auth.mapbox_token

        mapboxgl.accessToken = mapbox_token

        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v11', // YOUR TURN: choose a style: https://docs.mapbox.com/api/maps/#styles
            center: [-101.67517342866886, 39.148784399009294], // starting position [lng, lat]
            // attributionControl: false
        });

        // geocoder/searchbar
        var geocoder = new MapboxGeocoder({ // Initialize the geocoder
            accessToken: mapbox_token, // Set the access token
            mapboxgl: mapboxgl, // Set the mapbox-gl instance
        });
        // Add the geocoder to the map
        map.addControl(geocoder);
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

        $.ajax({
            type: "GET",
            url: `https://api.mapbox.com/datasets/v1/${auth.mapbox_username}/${auth.mapbox_dataset_id}/features?access_token=${mapbox_token}`,
            dataType: "json",
            success: function (data) {
                console.log('ok', data)
            }
        }).done(geojson => {
            map.on('load', () => {
                let UseBbox = (geo, pad) => {
                    let bbox = turf.bbox(geo);
                    map.fitBounds(bbox, {
                        padding: pad,
                    })
                }
                let infoList = geojson.features.map(feature => {

                    let data = `
                    <li class="sidebar-dropdown">
                        <a>
                            <img class="img-list" src="/assets/img/${feature.properties.img_link}/jpg"></img>
                            <p class="query-res"><span class="small-date">${feature.properties.path}</span>
                            <br>
                            <span style="font-weight:400;color:#0000008a;font-size:14px">${feature.properties.length_km}</span>
                            <br>
                            <span style="font-weight:normal;color:blue;"> ${feature.properties.difficulty}</span>
                            <br>
                            </p>
                        </a>
                    </li>
                    `
                    return data
                })
console.log(infoList)
                UseBbox(geojson,80)

                map.addLayer({
                    id: 'hiking-track',
                    type: 'line',
                    source: {
                        type: 'geojson',
                        data: geojson
                    },
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round'
                        },
                    paint: {
                    'line-color': 'red',
                    'line-width': 2
                    }
                });
            })
        })
    });
