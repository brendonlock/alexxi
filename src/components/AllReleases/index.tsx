import { 
    AllReleases,
    AllReleasesImages,
    AllReleasesText,
    AllReleasesImgText,
    Releases,
    Releases2,
    Test   
} from '../../styles';
import "./styles.css";

import React, { useRef, useEffect, useState } from 'react';
import { 
    motion,
    useScroll,
}from 'framer-motion';
import { wrap } from "@motionone/utils";
import { useNavigate } from "react-router-dom";
import { VelocityTextComponent } from '../VelocityTextComponent/index';

import { Blurhash } from "react-blurhash";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";

import styled from 'styled-components';
import { OptimizedImage } from "../optimisedImage";

// import { importImagesUrls } from "../../utils/images";
// const images = importImagesUrls();

const ReleaseImage = styled.div`
    
`

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 10px;
  max-width: 100vw;
  content-visibility: visible;
  justify-content: center;

  @media and screen (max-width: 768px) {
    justify-content: center;
  }
`;

export const AllReleaseComponent = () => { 

    // const [visibleElement, setVisibleElement] = useState<boolean>()

    // const myRef = useRef<HTMLElement>();

    // useEffect(() => {

    //     const observer = new IntersectionObserver((entries) => {
    //         const entry = entries[0];
    //         setVisibleElement(entry.isIntersecting)
    //     });
    //     //@ts-ignore
    //     observer.observe(myRef.current);
    // }, []);
      
    const [isLoading, setLoading] = useState(false);
    const [images, setImages] = useState<{ name: string; blurhash: string; title: String; }[]>(
        []
    );

    const fetchImages = async () => {
        const images = await fetch("http://192.168.0.125:9000/releases")

        setImages((await images.json()).images)
        // console.log("Images: ", await images.json());

    };

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <AllReleases>

                <Releases>ALL RELEASES</Releases>
                <ImagesContainer>
                {images?.map((image) => (
                    <OptimizedImage key={image.name} image={image} />
                ))}
                </ImagesContainer>
                {/* <VelocityTextComponent /> */}
                <AllReleasesImages>
                    
                </AllReleasesImages>
        </AllReleases>
    )
}