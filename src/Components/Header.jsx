import React from 'react';
import styled from '@emotion/styled';

const ContD = styled.div`
    margin-top: 5%;
    margin-bottom: 5%;
    max-width: 100%;
    margin-right: 30%;
    margin-left: 30%;
    background-color: white;
    padding: 3%;
    p {
        text-align:center;
        font-size: 30px;
        color: black;
    }
`;

const Header = ({nombre}) => {
    if(!nombre) return null;
    return (
        <ContD>
            <p>Agregar tu información {nombre}</p>
        </ContD>
    );
} 

export default Header;