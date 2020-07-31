import React from "react";
import { PicCard, Header, StyleImg, InfoDiv, Txter }from "./StyledComp";

const NasaCard = props => {
    return (
        <PicCard>
            <Header>🌍 {props.title} 🪐</Header>
            <StyleImg src={props.imgUrl} alt={props.title} />
            <InfoDiv>
                <Txter type="body">{props.description}</Txter>
                <Txter type="date">{props.date}</Txter>
            </InfoDiv>
            
        </PicCard>
    )
};

export default NasaCard;