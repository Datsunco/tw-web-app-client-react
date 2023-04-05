import React, {useCallback,useEffect} from 'react';
import './SpacePhoto.css'
import Map from "../Map/Map";
import {useJsApiLoader} from "@react-google-maps/api";
import Form from "../Form/Form";
import {useState} from "react";

const tg = window.Telegram.WebApp;

const SpacePhoto = () => {
    const [center,setCenter] = useState('');
    const [lat,setLat] = useState(0.0);
    const [lon,setLon] = useState(0.0);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD8jQRBkxYYsQb6FWMPNjgSQW1lVIEj1EA"
    })

    const onPlaceSelect = useCallback( (coordinates) => {
            setCenter(coordinates);
            setLat(coordinates.lat);

            setLon(coordinates.lon);
            console.log(center)
            console.log(lat)
            console.log(lon);
        }, [lat,lon,center])
    
    const onSendData = useCallback( () => {
        const data = {
            lat: lat,
            lon: lon,
        }
        console.log(data)
        tg.sendData(JSON.stringify(center));
    }, [lat,lon,center])
    
    useEffect(()=>{
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    },[onSendData])

    return (
        <div className={'SpacePhoto'}>
            {isLoaded ? <Map className={'map'} center={center}/> : <h2>Loading</h2>}
            <Form onSelect={onPlaceSelect}/>
        </div>
    );
};

export default SpacePhoto;