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

    const waitPhoto = () =>{
        const promise = fetch('https://measure.codes/cosmos/sentinel/?lat=37.262186&lon=56.636344&suid=TRANSPARENT&telegram=1',{mode: 'no-cors',});
        promise
        .then(function(response){
            console.log(response);
            console.log(response.json);
            return response.json;
        })
        .then(function(data) {
            console.log('Request successful', data);
            return data;
          })
          .catch(function(error) {
            console.log('Request failed', error)
          });
    }
    return (
        <div className={'SpacePhoto'}>
            {isLoaded ? <Map className={'map'} center={center}/> : <h2>Loading</h2>}
            <Form onSelect={onPlaceSelect}/>
            <button className={'butt'} onClick={waitPhoto}>lol</button>
        </div>
    );
};

export default SpacePhoto;