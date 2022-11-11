import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

interface isOpenType {
    isOpen: boolean;
}
interface imgStartType {
    imgStart: boolean;
}

export const Navbar = styled.nav`
    position: fixed;
    font-size: 15px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    padding: 20px;   
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    mix-blend-mode: difference;
`

export const NavbarLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1240px;
    padding: 5px 40px;
    width: 100%

    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const NavbarRight = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`

export const NavbarText = styled.div`
    padding: 0px 15px 0px 15px;
    &:hover {
        cursor: pointer
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavbarLink = styled.a`
    text-decoration: none;
    color: inherit;
`

export const MobileNavbar = styled.div`
    font-size: 15px;
    font weight: 200;
    box-sizing: border-box;
    verticle-align: baseline;

    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const MobileNavbarIcon = styled.div`
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const MobileNavbarDropdown = styled.aside<isOpenType>`
    mix-blend-mode: difference;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    color: black;

    &:hover {
        color: #01bf71;
        transition: all 0.2s ease-in-out;
    }
`

export const SidebarWrapper = styled.div`
    color: #black;    
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);   
    }
`
export const SidebarLink = styled(Link)`
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const MobileNavbarPositioning = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1240px;
    margin: 0px auto;
    padding: 24px 40px;
    width: 100%
`
export const SpotifyRecentDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 580px;

    @media screen and (max-width: 768px) {
        padding-top: 100px;
    }
`

export const NavbarLogo = styled.img`
    width: 120px;
    height: 40px;
`

export const AboutSection = styled.div<imgStartType>`
    display: grid;
    font-size: 15px;
    fonst weight: 200;
    padding-left: 200px;
    padding-right: 200px;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    

    @media screen and (max-width: 1000px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1' 'col1' 'col2' 'col2'`)};
        padding-left: 0px;
        padding-right: 0px;
    }
`

export const AboutLeft = styled.div`
    
    padding: 50px;

    @media screen and (max-width: 1000px) {
        display: flex;
        align-items: center;   
    }
`

export const AboutRight = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;

`

export const AboutImage = styled.img`   
    width: 300px;
    height: 450px;
`

export const AboutParagraph = styled.div`
    margin-left: 1em;
    padding-left: 20px;
    padding-right: 20px;

    @media screen and (max-width: 1000px) {
        padding: 15px;
    }
`

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

export const ArrowDownIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
`

export const AllReleases = styled.div`
    overflow: hidden;
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
    
    vertical-align: top;
    display: flex;
    justify-content: center;
    text-align: center;
    flex: 1 0 21%;
`

export const AllReleasesImgText = styled.div`
    padding: 50px;
`

const afterOpen = 'after-open';

export const Test = styled(Releases).attrs({
  afterOpenClassName: afterOpen,
})`
  .${afterOpen} {
    color: red;
  }
`

export const ReleaseImage = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 5px;
    box-shadow: 5px 5px 5px black;

    transition: opacity 250ms ease-in;

    @media screen and (max-width: 768px) {
        width: 100px;
        height: 100px;
    }
`

export const AllReleasesText = styled.div`
    width: 100%
    display: block;
`

export const SocialFooter = styled.footer`
    background-color: #232b2b;
    box-sizing: border-box;
    height: 27vh;
    width: 100%;
    padding-top: 40px;
`

export const FooterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`

export const FooterLogo = styled.img`
    padding-bottom: 20px;
    width: 20%;
    height: 20%;
`

export const FooterSocials = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const FooterSocialLi = styled.div`
    
`

export const FooterSocial = styled.a`
    text-decoration: none;

`

export const FooterSocialLogo = styled.i`
    text-decoration: none;
    color: white;
    padding-left: 20px;
    padding-right: 20px;

    &:hover {
        color: black;
        transition: ease-in;
    }
`

export const FooterSocialImg = styled.img`
    height: 20px;
    width: 20px;
    padding-top: 50px;
    padding-left: 10px;
    padding-left: 10px;
`

export const FooterBottom = styled.div`
    width: 100%;
    padding-top: 20px;
    text-align: center;
`

export const FooterBottomP = styled.p`
    word-spacing: 2px;
`