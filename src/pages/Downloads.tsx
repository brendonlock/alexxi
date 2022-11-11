import { NavbarComponent, FooterComponent, DownloadsComponent } from '../components';

export const Downloads = () => {

    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    if (darkThemeMq.matches) {
    // Theme set to dark.
    } else {
    // Theme set to light.
    }

    return (
        <>
        <NavbarComponent />
        <DownloadsComponent />
        <FooterComponent />
        </>
    )
}