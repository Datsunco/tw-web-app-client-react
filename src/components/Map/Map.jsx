import React from 'react';
import './Map.css';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
    width: '200px',
    height: '200px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD8jQRBkxYYsQb6FWMPNjgSQW1lVIEj1EA"
    })



    return isLoaded ?(
        <div>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}

        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
        </div>
    ) : <></>
};

export default Map;