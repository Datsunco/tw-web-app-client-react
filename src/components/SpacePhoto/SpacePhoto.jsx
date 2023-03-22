import React from 'react';
import './SpacePhoto.css'
import Map from "../Map/Map";
import {useJsApiLoader} from "@react-google-maps/api";

const center = {
    lat: -3.745,
    lng: -38.523
};

const SpacePhoto = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD8jQRBkxYYsQb6FWMPNjgSQW1lVIEj1EA"
    })
    return (
        <div className={'SpacePhoto'}>
            {isLoaded ? <Map center={center}/> : <></>}
        </div>
    );
};

export default SpacePhoto;