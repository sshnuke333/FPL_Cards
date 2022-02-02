import React from 'react';
import {
    StyledBanner,
    Navbar,
    Logo,
    Menu,
    NavList,
    NavItem,
    Link,
} from './header.styles';

export const Header = () => {
    return (
        <StyledBanner>
            <Navbar>
                <Link href="#" aria-label="FPL Cards Home Page on logo link">
                    <Logo alt="FPL Cards logo" />
                </Link>
                <Menu aria-expanded="false">Menu</Menu>
                <NavList role="menu">
                    <NavItem>
                        <Link href="#">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#">Play</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#">Disclaimer</Link>
                    </NavItem>
                </NavList>
            </Navbar>
        </StyledBanner>
    );
};
