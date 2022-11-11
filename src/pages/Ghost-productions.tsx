import { NavbarComponent, FooterComponent } from '../components';

export const GhostProductions = () => {

    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    if (darkThemeMq.matches) {
    // Theme set to dark.
    } else {
    // Theme set to light.
    }

    return (
        <>
        <NavbarComponent />
        <FooterComponent />
        </>
    )
}