import { 
    SpotifyRecentDiv,  
    ReleasesSection, 
    ReleasesSectionButton,
    ReleasesSectionButtonDiv,
    ArrowDownIcon,
} from '../../styles';
import { FaArrowDown } from 'react-icons/fa';

export const LatestReleaseComponent = () => {

    return (
        <ReleasesSection>
            <SpotifyRecentDiv>
            <iframe 
                title='latest'
                style={{
                    borderRadius: "12px"
                }} 
                src="https://open.spotify.com/embed/track/4TyaBP79E9cVI9QT2qM4kY?utm_source=generator&theme=0" 
                width={400}
                height="200" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture;">
                
            </iframe>
            </SpotifyRecentDiv>
            <ReleasesSectionButtonDiv>
            <ReleasesSectionButton>LISTEN NOW</ReleasesSectionButton>
            </ReleasesSectionButtonDiv>
            <ArrowDownIcon>
                <FaArrowDown />
            </ArrowDownIcon>
        </ReleasesSection>
    )
}

