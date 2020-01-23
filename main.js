import './scripts.js'

document.onreadystatechange = function() {
  const hanoiCoords = { lat: 20.9825469, lng: 105.7944277 }

  const map = new google.maps.Map(document.getElementById('map'), {
    center: hanoiCoords,
    zoom: 14,
    backgroundColor: 'rgba(0,0,0,.5)',
    controlSize: 25,
  })

  const locations = [
    { lat: 20.9941104, lng: 105.8049496 },
    { lat: 20.9960312, lng: 105.8028946 },
    { lat: 20.981876, lng: 105.7893306 },
    { lat: 20.9915358, lng: 105.789563 },
  ]

  const markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      map,
      position: location,
      label: (i + 1).toString()
    })
  })
}