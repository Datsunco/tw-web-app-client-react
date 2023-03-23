import React, {useCallback} from 'react';
import './SpacePhoto.css'
import Map from "../Map/Map";
import {useJsApiLoader} from "@react-google-maps/api";
import Form from "../Form/Form";
import {useState} from "react";



const SpacePhoto = () => {
    const [center,setCenter] = useState('');
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD8jQRBkxYYsQb6FWMPNjgSQW1lVIEj1EA"
    })

    const onPlaceSelect = useCallback((coordinates) => {
            setCenter(coordinates);
            console.log(coordinates);
        },[])

    return (
        <div className={'SpacePhoto'}>
            {isLoaded ? <Map className={'map'} center={center}/> : <h2>Loading</h2>}
            <Form onSelect={onPlaceSelect}/>
        </div>
    );
};

export default SpacePhoto;