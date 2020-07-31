import React from 'react';
import { ContNav, LinkCont, Linker, Header} from "./StyledComp";

const NasaNav = () => {
    return (
        <ContNav>
            <Header>APOD</Header>
            <LinkCont>
                <Linker href="#">Home</Linker>
                <Linker href="#">Space</Linker>
                <Linker href="#">About</Linker>
                <Linker href="#">NASA</Linker>
            </LinkCont>
            
        </ContNav>
    )
}

export default NasaNav;