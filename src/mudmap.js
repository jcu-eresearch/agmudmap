function resize() {
    $('#map').height($(window).height());
    //$('#map').height($(window).height() - $('#map').position().top);
}
$(window).resize(resize);
var map = L.map('map', {
    attributionControl: false,
    minZoom: 3,
    maxZoom: 6,
    crs: L.CRS.Simple,
    center: [-31.3125, 28.65625], //Manual calc
    zoom: 4});
function unproject(point) {
    return map.unproject(point, map.getMaxZoom());
}
var imageWidth = 3500,
    imageHeight = 4928,
    imageNorthEast = unproject([imageWidth, 0]),
    imageSouthWest = unproject([0, imageHeight]),
    maxNorthEast = unproject([imageWidth * 1.25, -imageHeight * 0.25]),
    maxSouthWest = unproject([-imageWidth * 0.25, imageHeight * 1.5]);
map.setMaxBounds(new L.LatLngBounds(maxSouthWest, maxNorthEast));
L.imageOverlay('map.jpg', new L.LatLngBounds(imageSouthWest, imageNorthEast)).addTo(map);

// Adding point to map
function onEachFeature(feature, layer) {
    var popupContent = "<h3>" + feature.properties.description + "</h3>" + feature.properties.content + '<a class="btn btn-primary active" role="button" href="mailto:keith.noble2@my.jcu.edu.au?subject=Mud Map: ' + feature.properties.description + '">What are your thoughts?</a>';
    layer.bindPopup(popupContent);
}
L.geoJson(geojson, {
    onEachFeature: onEachFeature,
    pointToLayer: function(feature, latlng) {
        var labelContent = "<h3>" + feature.properties.description + "</h3>";
        if (feature.properties.subtitle) {
            labelContent += "<p>" + feature.properties.subtitle + "</p>";
        }
        return L.marker(unproject([latlng.lng, latlng.lat]), {
            icon: L.divIcon({
                className: 'leaflet-label ' + feature.properties.class,
                html: labelContent,
                iconSize: L.Point(200, 0)
                })
        }).addTo(map);
    }
}).addTo(map);
