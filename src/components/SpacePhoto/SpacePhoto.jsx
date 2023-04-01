import React from 'react';
import './SpacePhoto.css'
import Map from "../Map/Map";
import {useJsApiLoader} from "@react-google-maps/api";
import Form from "../Form/Form";
import {useState} from "react";

//const tg = window.Telegram.WebApp;

const SpacePhoto = () => {
    const [center,setCenter] = useState('');
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD8jQRBkxYYsQb6FWMPNjgSQW1lVIEj1EA"
    })

    const onPlaceSelect = (coordinates) => {
            setCenter(coordinates);
            console.log(coordinates);
        }
    
    /*const onSendData = useCallback( () => {
        const data = {
            center,
        }
        tg.sendData(JSON.stringify(data));
    }, [center])*/
    


    return (
        <div className={'SpacePhoto'}>
            {isLoaded ? <Map className={'map'} center={center}/> : <h2>Loading</h2>}
            <Form onSelect={onPlaceSelect}/>
        </div>
    );
};

export default SpacePhoto;