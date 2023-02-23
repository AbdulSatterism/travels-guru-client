import React from 'react';

import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const Map = () => {
    // const key = `AIzaSyDmsk4nBlySbH5MpIMlILWhebNhiVlu8hs`
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDmsk4nBlySbH5MpIMlILWhebNhiVlu8hs"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >

                <></>
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;