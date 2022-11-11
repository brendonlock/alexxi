import { 
    Container,
    AboutSection, 
    SideTitleSection,
    ImageLeftSection,
    Image1,
    TextSection,
    ImageSection,
    Image2,
    TitleText,
    ParagraphText,
    Right
} from './styles';
import { useState, useEffect } from 'react';
import { Blurhash } from "react-blurhash";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import styled from 'styled-components';

const StyledBlurhash = styled(Blurhash)`

  position: absolute !important;
  top: 0;
  left: 0;
`;

// src="/Alexxi-Presskit/Photo_Jun_17_3_15_07_PM.jpg"

interface IOptimizedImageProps {
    image: { name: string; blurhash: string; title: String };
}

export const AboutSectionComponent = (props: IOptimizedImageProps) => {

    const { image } = props

    const [isLoaded, setLoaded] = useState(false);
    const [isLoadStarted, setLoadStarted] = useState(false);
    const [images, setImages] = useState<{ name: string; blurhash: string }[]>(
        []
    );

    const handleLoad = () => {
        setLoaded(true);
    };

    const handleLoadStarted = () => {
        console.log("Started: ");
        setLoadStarted(true);
    };

    console.log(image.name)

    const url = `http://192.168.0.125:9000/${image.name}`;

    console.log(TextSection.styledComponentId)    

    return (
        <Container>
            <AboutSection>
                
                <SideTitleSection>
                    test
                </SideTitleSection>
                
                <ImageLeftSection>
                <LazyLoadImage
                    key={`http://192.168.0.125:9000/front-profile`}
                    src={url}
                    height="100vh"
                    width="100vw"
                    onLoad={handleLoad}
                    beforeLoad={handleLoadStarted}
                />
                {!isLoaded && isLoadStarted && (
                    // <LazyLoadComponent>
                    <StyledBlurhash
                    hash={image.blurhash}
                    width="100vw"
                    height="100vh"
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                    />
                    // </LazyLoadComponent>
                )}
                    {/* <Image1 src="/Alexxi-Presskit/Photo_Jun_17_3_15_07_PM.jpg" alt="Image 1"/> */}
                </ImageLeftSection>

                <TextSection>
                    <TitleText>ABOUT ME</TitleText>
                    <ParagraphText>
                        Alexxi is the name of San Diego, California native Aaron Valdez's musical brainchild. He is known for mixing musical elements from melodic, deep and progressive house into one. In Fall 2021, Alexxi released his first song and rapidly earned a notoriety in the electronic music scene with huge support from artists and labels. There's no stopping him yet, as it is only the beginning.
                    </ParagraphText>
                </TextSection>

                {/* <ImageSection>
                    <Image2 src="/Alexxi-Presskit/Photo_Jul_6,_10_43_18_PM.jpg" alt="Image 1"/>
                </ImageSection> */}

            </AboutSection>
        </Container>
    )
}