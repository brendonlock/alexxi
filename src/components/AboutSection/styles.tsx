import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const Container = styled.div`
    padding: 40px;
    overflow: hidden;

    @media screen and (max-width: 768px ) {

        padding: 20px;
    }
`

export const AboutSection = styled.div`
    padding: 20px;
    /* width: 100vw; */
    height: 100vh;
    display: grid;
    grid-template-columns: 5% 35% 60%;
    column-gap: 20px;
    grid-template-rows: 25% 65%;

    @media screen and (max-width: 768px ) {

        grid-template-columns: 100% ;
        grid-template-rows: 500px 500px 500px;
        column-gap: 0px;
        overflow: hidden;
        height: 100%;
        padding: 0px;
    }
`;

export const TestSection = styled.div`
    background: steelblue;
    color: #fff;    
    font-size: 20px;
    padding: 20px;
    border: skyblue 1px solid;  
`

export const SideTitleSection = styled.div`
    grid-column: 3 / 4;

    @media screen and (max-width: 768px ) {
        
        overflow: hidden;
    }

`;

export const ImageLeftSection = styled.div`
    grid-column-start: 2;
    grid-row-start: 2;
    align-self: end;
    padding-bottom: 10px;

    @media screen and (max-width: 768px ) {
        
        grid-row-start: 2;
        grid-column-start: 1;
        justify-self: center;
        
        align-self: baseline;
    }

`;

export const Image1 = styled.img`
    justify-content: center;
    width: 500px;
    height: 800px;

    @media screen and (max-width: 768px ) {
        
        max-width: 400px;
        height: 650px;
    }
`;


export const TextSection = styled.div`
    grid-column: 3;
    grid-row: 1;
    padding-top: 39px;
    padding-left: 50px;
    text-transform: uppercase;

    @media screen and (max-width: 768px ) {
        
        grid-row-start: 1;
        grid-column-start: 1;
        padding-top: 0px;
        padding-left: 0px;
    }
`;

export const TitleText = styled.div`
    color: black;
    font-size: 40px;
    font-wight: 800;

    @media screen and (max-width: 768px ) {
        
        display: flex;
        justify-content: center;
        align-self: baseline;

    }
`;

export const Right =styled.div`

`

export const ParagraphText = styled.p`
    color: black;
    font-size: 15px;
    font-wight: 200;

    @media screen and (max-width: 768px ) {
        
        display: flex;
        justify-content: center;
        align-self: baseline;

    }
`;

export const ImageSection = styled.div`
    grid-column-start: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    padding-left: 50px;
    align-self: end;
    padding-bottom: 10px;

    @media screen and (max-width: 768px) {

        grid-row: 3;
        overflow: hidden;
    }
`;

export const Image2 = styled.img`
    width: 995px;
    height: 600px;
`