import React from 'react';
import './Map.css';
import { GoogleMap } from '@react-google-maps/api';


const containerStyle = {
    width: '30%',
    height: '30%'
};

const defaultOptions ={

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
            zoom={10}
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