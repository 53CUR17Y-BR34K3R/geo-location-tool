document.getElementById('getLocationBtn').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById('locationDisplay').innerHTML = "Geolocation is not supported by this browser.";
    }
});

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.getElementById('locationDisplay').innerHTML = 
        "Latitude: " + latitude + "<br>Longitude: " + longitude;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('locationDisplay').innerHTML = "User  denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('locationDisplay').innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById('locationDisplay').innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('locationDisplay').innerHTML = "An unknown error occurred.";
            break;
    }
}
