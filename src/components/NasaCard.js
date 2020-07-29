import React from "react";

const NasaCard = props => {
    return (
        <div>
            <h1>🌍 {props.title} 🪐</h1>
            <img src={props.imgUrl} alt={props.title} />
            <p>{props.description}</p>
            <p>{props.date}</p>
        </div>
    )
};

export default NasaCard;