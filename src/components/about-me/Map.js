import React from 'react';

// Import leaflet components
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const API_KEY = '651fb2fadc414211aebeac8a17a62aeb';

const markerIcon = new L.Icon({
    iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%2364ffda&icon=code&iconType=awesome&noWhiteCircle&apiKey=${API_KEY}`,
    iconSize: [31, 46], // size of the icon
    iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

const Map = () => {
    const locationData = {
        'sevilla': {
            'lat': 37.3826,
            'lng': -5.99629
        },
        'amsterdam': {
            'lat': 52.3738,
            'lng': 4.89093
        },
        'lyon': {
            'lat': 45.74846,
            'lng': 4.84671
        }
    }

    return (
        <div id="about-me-map">
            <MapContainer center={[locationData.lyon.lat, locationData.lyon.lng]} zoom={4} scrollWheelZoom={true} id="mapContainer">
                <TileLayer
                    attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
                    url="https://api.mapbox.com/styles/v1/pmedina25/ckl9bhy8w02g417nuu9b776in/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicG1lZGluYTI1IiwiYSI6ImNrbDlidG9qcjM5M2oycnFvMDQ3OXRkeGMifQ._TGzF-JdZZEApOP-n3V8sQ"
                />
                <Marker position={[locationData.sevilla.lat, locationData.sevilla.lng]} icon={markerIcon}>
                    <Popup>
                        <strong style={{'color': '#0a192f'}}>Education: Universidad de Sevilla</strong> <br /> Computer Engineering Degree
                        <br />
                        <br />
                        <strong style={{'color': '#0a192f'}}>Education: Universidad Pablo de Olavide</strong> <br /> Master in Computer Engineering
                        <br />
                        <br />
                        <strong style={{'color': '#0a192f'}}>Experience: TTI Norte</strong> <br /> Internet of Things Developer
                    </Popup>
                </Marker>
                <Marker position={[locationData.amsterdam.lat, locationData.amsterdam.lng]} icon={markerIcon}>
                    <Popup style={{'backgroundColor': 'red'}}>
                        <strong style={{'color': '#0a192f'}}>Education: Hogeschool van Amsterdam</strong> <br /> Mobile Development Minor
                        <br />
                        <br />
                        <strong style={{'color': '#0a192f'}}>Experience: TamTam (part of dept)</strong> <br /> iOS App Developer
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;
