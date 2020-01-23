import './scripts.js'

document.onreadystatechange = function() {
  new google.maps.Map(document.getElementById('map'), {
    center: { lat: 21.0287602, lng: 105.8493465 },
    zoom: 16
  });
}