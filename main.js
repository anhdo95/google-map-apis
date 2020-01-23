import './scripts.js'

document.onreadystatechange = function() {
  const hanoiCoords = { lat: 21.0289882, lng: 105.8474674 }

  const map = new google.maps.Map(document.getElementById('map'), {
    center: hanoiCoords,
    zoom: 18,
    backgroundColor: 'rgba(0,0,0,.5)',
    controlSize: 25,
  })

  const marker = new google.maps.Marker({
    position: hanoiCoords,
    map
  })
}