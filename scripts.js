import googleAPIKey from './api-key.js'

const script = document.createElement('script')
script.src = `https://maps.googleapis.com/maps/api/js?key=${googleAPIKey}`
script.async = true
script.defer = true

document.head.append(script)