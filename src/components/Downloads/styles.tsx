import styled, { keyframes } from 'styled-components';

export const ReleasesSection = styled.div`
    background: url('/Alexxi-Presskit/Photo-Jul-16-10-39-06-PM.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 1000px;

    @media screen and (max-width: 768px) {
        height: 600px;
    }
`

export const ReleasesSectionImage = styled.img`
    width: 100%;
    height: 1000px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`
export const ReleasesSectionButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding-top: 0px;

    @media screen and (max-width: 768px) {
        padding-top: 0px;
    }
`

export const ReleasesSectionButton = styled.button`
    background-color: #fff;
    border-radius: 4px;
    border-style: none;
    box-sizing: border-box;
    color: #000;
    cursor: pointer;
    display: inline-block;
    font-family: "Farfetch Basis","Helvetica Neue",Arial,sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    margin: 0;
    max-width: none;
    min-height: 44px;
    min-width: 10px;
    outline: none;
    overflow: hidden;
    padding: 9px 20px 8px;
    position: relative;
    text-align: center;
    text-transform: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 200px;

    :&hover {
        opacity: .75;
    }
`

export const AllReleases = styled.div`

    padding-top: 8px;
    
`

const scrolling = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(-100%);
  }
`;

const scrolling2 = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
`;

export const Releases = styled.span`
    display: flex;
    justify-content: center;
    align-text: center;
    font-size: 50px;
    color: #0e1111;
    -webkit-text-stroke: 1px white;
    /* transform: translateX(100%); */
    /* animation: ${scrolling} 10s linear infinite; */
`

export const Releases2 = styled.span`
    display: flex;
    justify-content: center;
    align-text: center;
    font-size: 50px;
    color: #fff;
    /* transform: translateX(-100%); */
    /* animation: ${scrolling2} 30s linear infinite; */
`

export const AllReleasesImages = styled.div`
    width: 100%;
    vertical-align: top;
    display: flex;
    justify-content: center;
    text-align: center;
`

export const AllReleasesImgText = styled.div`
    padding: 50px;

    @media and screen (max-width: 768px) {
        padding: 14px;
    }
`

export const ReleaseImage = styled.img`
    width: 250px;
    height: 250px;

    @media screen and (max-width: 768px) {
        width: 100px;
        height: 100px;
    }
`

export const AllReleasesText = styled.div`
    width: 100%
    display: block;
`