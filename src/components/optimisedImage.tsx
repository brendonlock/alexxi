import { useState } from "react";
import { Blurhash } from "react-blurhash";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import styled from "styled-components";

const ImageWrapper = styled.div`

  position: relative;
`;

const StyledBlurhash = styled(Blurhash)`

  position: absolute !important;
  top: 0;
  left: 0;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  mix-blend-mode: difference;

  @media and screen (max-width: 768px) {
    justify-content: center;
  }
`

interface IOptimizedImageProps {
  image: { name: string; blurhash: string; title: String };
}

export const OptimizedImage = (props: IOptimizedImageProps) => {
  const { image } = props;

  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleLoadStarted = () => {
    console.log("Started: ");
    setLoadStarted(true);
  };

  const url = `http://192.168.0.125:9000/${image.name}`;

  return (
    <ImageWrapper>
      <LazyLoadImage
        key={image.name}
        src={url}
        height={250}
        width={250}
        onLoad={handleLoad}
        beforeLoad={handleLoadStarted}
      />
      {!isLoaded && isLoadStarted && (
        // <LazyLoadComponent>
        <StyledBlurhash
          hash={image.blurhash}
          width={250}
          height={250}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
        // </LazyLoadComponent>
      )}
      <Text>{image.title}</Text>
    </ImageWrapper>

  );

  // return; // <LazyLoadImage
  //   key={image.name}
  //   src={`http://localhost:9000/${image.name}`}
  //   effect="blur"
  //   height={500}
  //   width={333}
  //   placeholderSrc={`http://localhost:9000/${image.name}`}
  // />
  // <Blurhash
  //   hash={image.blurhash}
  //   width={333}
  //   height={500}
  //   resolutionX={32}
  //   resolutionY={32}
  //   punch={1}
  // />;
}

// export { OptimizedImage };