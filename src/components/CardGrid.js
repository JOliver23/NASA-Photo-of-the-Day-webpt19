import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NasaCard from "./NasaCard";
import NasaNav from './NasaNav';

function CardGrid() {
    const [nasaData, setNasaData]= useState([])
    
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=FA13q6ocmVkPeWFcFgUdRTaAHaPA0VoZxyFrvPzf')
        .then(response => console.log("response: ", response))
        .catch(err => console.log(err))
    })
    return (
        <div>
            <NasaNav />
            <NasaCard title={nasaData.title} imgUrl={nasaData.hdurl} description={nasaData.explanation} date={nasaData.date}/>
        </div>
        
    )
};

export default CardGrid;