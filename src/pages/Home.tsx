import { NavbarComponent, FooterComponent, MobileNavbarComponent, AllReleaseComponent, AboutSectionComponent, LatestReleaseComponent } from '../components';
import BarLoader from "react-spinners/BarLoader";
import React, { useState, CSSProperties, useEffect } from "react";
import { LoadingContainer } from './styles';
import axios, { ResponseType, AxiosRequestConfig } from 'axios';
import styled from 'styled-components';
import theme from 'styled-theming';

export const Home = () => {

    const [color, setColor] = useState("#fffffd");

    const override: CSSProperties = {
        display: "flex",
    };

    const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  
    //@ts-ignore
    const mqListener = (e => {
        setIsDarkTheme(e.matches);
    });
    
    useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addListener(mqListener);
      return () => darkThemeMq.removeListener(mqListener);
    }, []);
    return isDarkTheme;

    }

    const textColor = theme('mode', {
        light: 'black',
        dark: '#fffffd'
    });

    const Wrapper = styled.div`
    color: ${textColor}
    `;

    const isDarkTheme = useThemeDetector()

    const [isLoading, setLoading] = useState(false);
    const [images, setImages] = useState<{ name: string; blurhash: string; title: String; }[]>(
        []
    );

    const fetchImages = async () => {
        const images = await fetch("http://192.168.0.125:9000/images")

        setImages((await images.json()).images)
        // console.log("Images: ", await images.json());

    };

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <Wrapper>
            <NavbarComponent />
            <MobileNavbarComponent />
            <LatestReleaseComponent />
            {images?.map((image) => (
                <AboutSectionComponent key={image.name} image={image} />
            ))}
            <AllReleaseComponent  />     
            <FooterComponent />
        </Wrapper>
    )
}