import { 
    NavbarRight, 
    MobileNavbarDropdown,
    CloseIcon,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    NavbarLink,
} from '../../styles';
import { useState } from 'react';

export const MobileNavbarComponent = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
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
    )
}