import { 
    SocialFooter, 
    FooterContent,
    FooterLogo,
    FooterSocials,
    FooterSocialLi,
    FooterSocial,
    FooterSocialLogo,
    FooterBottom,
    FooterBottomP,
} from '../../styles';
import {  
    AiOutlineInstagram,
    AiOutlineTwitter,
} from 'react-icons/ai';
import { FaSoundcloud } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

export const FooterComponent = () => {

    return (
        <SocialFooter>
                <FooterContent>
                    <FooterLogo src='/Alexxi-Presskit/Logo/Alexxi-White-Cropped.png' alt='Alexxi Logo White'/>
                    <FooterSocials>
                        <FooterSocialLi>

                            <FooterSocial href='https://www.instagram.com/alexximusic' target="_blank">
                                <FooterSocialLogo>
                                    <AiOutlineInstagram />
                                </FooterSocialLogo>
                            </FooterSocial>
                            <FooterSocial href='https://www.twitter.com/alexximusic_' target="_blank">
                                <FooterSocialLogo>
                                    <AiOutlineTwitter />
                                </FooterSocialLogo>
                            </FooterSocial>
                            <FooterSocial href='https://www.facebook.com/alexximusicc' target="_blank">
                                <FooterSocialLogo>
                                    <BsFacebook />
                                </FooterSocialLogo>
                            </FooterSocial>
                            <FooterSocial href='https://www.soundcloud.com/alexximusic' target="_blank">
                                <FooterSocialLogo>
                                    <FaSoundcloud />
                                </FooterSocialLogo>
                            </FooterSocial>

                        </FooterSocialLi>
                    </FooterSocials>
                </FooterContent>
                <FooterBottom>
                    <FooterBottomP>2022 COPYRIGHT </FooterBottomP>
                </FooterBottom>
        </SocialFooter>
    )
}