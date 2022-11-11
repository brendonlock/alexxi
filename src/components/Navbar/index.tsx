import { 
    Navbar, 
    NavbarLeft, 
    NavbarRight, 
    MobileNavbarIcon,
    NavbarText,
    MobileNavbarDropdown,
    CloseIcon,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    NavbarLink,
} from '../../styles';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export const NavbarComponent = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
        <Navbar>
        <NavbarLeft>
            <NavbarText>
                <NavbarLink href="/">HOME</NavbarLink>
            </NavbarText>
        </NavbarLeft>  
        <NavbarRight>
            <NavbarText>
                <NavbarLink href='/downloads'>DOWNLOADS</NavbarLink>
            </NavbarText>
            <NavbarText>
                <NavbarLink href='/ghost-productions'>GHOST PRODUCTIONS</NavbarLink>
            </NavbarText>
            <NavbarText>
                <NavbarLink href='/mixing-mastering'>
                    MIXING & MASTERING
                </NavbarLink>
            </NavbarText>
            <MobileNavbarIcon onClick={toggle} >
                <IconContext.Provider value={{ size: '2em' }}>
                    <AiOutlineMenu />
                </IconContext.Provider>
            </MobileNavbarIcon>
        </NavbarRight>
        </Navbar>
            <MobileNavbarDropdown isOpen={isOpen} onClick={toggle}>
            <NavbarRight>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
            </NavbarRight>
            <SidebarWrapper>
                <SidebarMenu>
                    <NavbarLink href='/' onClick={toggle}>HOME</NavbarLink>
                    <NavbarLink href='/downloads' onClick={toggle}>DOWNLOADS</NavbarLink>
                    <NavbarLink href='/mixing-mastering' onClick={toggle}>MIXING & MASTERING</NavbarLink>
                    <NavbarLink href='/ghost-productions' onClick={toggle}>GHOST PRODUCTIONS</NavbarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </MobileNavbarDropdown>
        </>
    )
}