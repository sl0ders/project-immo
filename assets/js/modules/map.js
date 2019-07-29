import L from 'leaflet'

import 'leaflet/dist/leaflet.css'
export default class Map {

    static init() {
        let map = document.querySelector('#map');
        if (map === null) {
            return
        }
        let icon = L.icon({
            iconUrl: '/images/marker-icon.png',
            iconSize: [30, 40]
            });
        let center = [map.dataset.lat, map.dataset.lng];
        map = L.map('map').setView(center, 13);
        let token = 'pk.eyJ1Ijoic2wwZGVycyIsImEiOiJjanlvOXJzZXYwejZsM2NubzRtNGd3b2MzIn0.a3hy2DaHO0pgxOgkcWlZOQ';
        L.tileLayer(`https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${token}`,{
            maxZoom:18,
            minZoom: 12,
            attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        L.marker(center,{icon: icon}).addTo(map)
    }
}