import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NasaCard from "./NasaCard";
import NasaNav from './NasaNav';

function CardGrid() {
    return (
        <div>
            <NasaNav />
            <NasaCard />
        </div>
        
    )
};

export default CardGrid;