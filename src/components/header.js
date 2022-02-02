import React from 'react';
import {
    StyledBanner,
    Navbar,
    Logo,
    MenuButton,
    NavList,
    NavItem,
    Link,
} from './header.styles';

const toggleMenu = (e) => {
    let attribute = 'aria-expanded';
    let expanded = e.target.getAttribute(attribute);
    let menuList = document.getElementById('menu-list');
    expanded === 'false'
        ? e.target.setAttribute(attribute, 'true')
        : e.target.setAttribute(attribute, 'false');
    expanded === 'false'
        ? (menuList.style.display = 'flex')
        : (menuList.style.display = 'none');
};

export const Header = () => {
    return (
        <StyledBanner>
            <Navbar>
                <Link href="#" aria-label="FPL Cards Home Page on logo link">
                    <Logo alt="FPL Cards logo" />
                </Link>
                <MenuButton
                    id="menu-button"
                    aria-expanded="false"
                    onClick={toggleMenu}
                >
                    Menu
                </MenuButton>
                <NavList id="menu-list" role="menu">
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
