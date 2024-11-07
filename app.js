// Initialize the map using Leaflet.js
var map = L.map('map').setView([40, -74.5], 5);  // Set initial view (latitude, longitude) and zoom level

// Add OpenStreetMap tiles as the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to fetch real-time plane data from an API
function fetchPlaneData() {
    // Mock data URL, replace with your actual flight data API
    axios.get('https://api.example.com/airplanes')  // Replace with your API endpoint
        .then(response => {
            const planes = response.data.airplanes;  // Assuming the response contains an array of planes
            planes.forEach(plane => {
                // Add a marker for each plane
                L.marker([plane.latitude, plane.longitude])  // Position based on plane's latitude and longitude
                    .addTo(map)
                    .bindPopup(`
                        <h3>${plane.callsign}</h3>
                        <p>Altitude: ${plane.altitude} ft</p>
                        <p>Speed: ${plane.speed} km/h</p>
                        <p>Origin: ${plane.origin}</p>
                        <p>Destination: ${plane.destination}</p>
                    `);  // Display plane info on click
            });
        })
        .catch(error => {
            console.error('Error fetching plane data:', error);
        });
}

// Fetch plane data every 10 seconds
setInterval(fetchPlaneData, 10000);  // Update every 10 seconds

// Initially load plane data when the page loads
fetchPlaneData();
