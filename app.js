// Mapbox Access Token
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';  // Replace with your Mapbox token

// Initialize the map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // Map style
    center: [-74.5, 40], // Initial map center (Longitude, Latitude)
    zoom: 5 // Initial zoom level
});

// Function to fetch real-time plane data from OpenSky API or another API
function fetchPlaneData() {
    // Mock data, replace with actual API for real-time flight data
    axios.get('https://api.example.com/airplanes')  // Replace with real API endpoint
        .then(response => {
            const planes = response.data.airplanes;  // Assuming the response contains an array of planes
            planes.forEach(plane => {
                // Create a marker for each plane on the map
                new mapboxgl.Marker()
                    .setLngLat([plane.longitude, plane.latitude])  // Set longitude and latitude of the plane
                    .setPopup(new mapboxgl.Popup().setHTML(`
                        <h3>${plane.callsign}</h3>
                        <p>Altitude: ${plane.altitude} ft</p>
                        <p>Speed: ${plane.speed} km/h</p>
                        <p>Origin: ${plane.origin}</p>
                        <p>Destination: ${plane.destination}</p>
                    `)) // Add popup with plane details
                    .addTo(map);  // Add the marker to the map
            });
        })
        .catch(error => {
            console.error('Error fetching plane data:', error);
        });
}

// Fetch plane data every 10 seconds
setInterval(fetchPlaneData, 10000);  // 10 seconds interval

// Initially load plane data when the page loads
fetchPlaneData();
