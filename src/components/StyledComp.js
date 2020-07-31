import React from "react";
import styled from "styled-components";

export const PicCard = styled.div`
    width: 90vw;
    heigth: 80vh;
    margin: 1rem 5vw;
    background: radial-gradient(rgb(81, 18, 105),rgb(23, 136, 136), rgb(114, 31, 107) );
`;

export const Header = styled.h1`
    color: lavenderblush;
    background: linear-gradient(225deg, rgb(81, 18, 105),rgb(23, 136, 136));
`;

export const StyleImg = styled.img`
    width: 60vw;
    max-height: 60vh;
    border: 1rem double #4f4f4f;
    border-radius: 5%;
    background-color: thistle;
    margin: 2rem;
`;

export const InfoDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: flex-start;
    background: lavender;
    border: .3rem dashed thistle;
    border-radius: 2%;
`;

export const Txter = styled.p`
    font-family: 'Baloo Bhaina 2', cursive;

    ${props => props.type ==="body" ? 'color: papayawhip; background: black; border: .1rem dotted white' : null}
    ${props => props.type === "date" ? 'border: .2rem double slategrey; background: linear-gradient(silver, white); font-size: large;' : null}
`;

export const ContNav = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   height: 10%;
`;

export const LinkCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const Linker = styled.a`
    text-decoration: none;
    font-family: 'Baloo Bhaina 2', cursive;

    ${props => props.type ==="link" ? 'color: papayawhip; border: .2rem solid silver; border-radius: 23%;' : null}
`;