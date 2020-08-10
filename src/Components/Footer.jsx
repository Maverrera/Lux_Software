import React from 'react';
import styled from '@emotion/styled';

const ContFoot = styled.div`
    max-width: 100%;
    background-color: black;

    padding-top: 5%;
    padding-bottom: 5%;
        p {
            color:#fff;
            text-align: center;
        }
    
`;

const Footer = () => {
    return (
        <ContFoot>
            <p>Contactanos</p>
        </ContFoot>
    );
} 

export default Footer;