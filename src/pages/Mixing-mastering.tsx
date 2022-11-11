import { NavbarComponent, FooterComponent, MixInfoSectionComponent, MixingPaymentComponent } from '../components';

export const MixingMastering = () => {

    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    if (darkThemeMq.matches) {
    // Theme set to dark.
    } else {
    // Theme set to light.
    }

    return (
        <>
        <NavbarComponent />
        <MixInfoSectionComponent />
        <MixingPaymentComponent />
        <FooterComponent />
        </>
    )
}