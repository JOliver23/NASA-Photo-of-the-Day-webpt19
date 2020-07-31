import React from "react";
import { PicCard, Header, StyleImg, InfoDiv, Txter }from "./StyledComp";

const NasaCard = props => {
    return (
        <PicCard>
            <Header>🌍 {props.title} 🪐</Header>
            <StyleImg src={props.imgUrl} alt={props.title} />
            <InfoDiv>
                <Txter>{props.description}</Txter>
                <Txter>{props.date}</Txter>
            </InfoDiv>
            
        </PicCard>
    )
};

export default NasaCard;