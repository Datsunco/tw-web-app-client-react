import React from 'react';
import './Map.css';
import { GoogleMap } from '@react-google-maps/api';
import {defaultTheme} from "./Theme";


const containerStyle = {
    width: '300px',
    height: '300px'
};

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    styles: defaultTheme,

}

const Map = ({center}) => {

    const mapRef = React.useRef(undefined)


    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])


    return (
        <div>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            options={defaultOptions}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
        </div>
    );
};

export default Map;