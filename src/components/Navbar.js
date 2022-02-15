import React, { useEffect } from 'react';
import {
    StyledBanner,
    StyledNav,
    Logo,
    MenuButton,
    NavList,
    NavItem,
    StyledLink,
} from './Navbar.styles';

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

export const Navbar = () => {
    return (
        <StyledBanner>
            <StyledNav>
                <StyledLink
                    to="#"
                    aria-label="FPL Cards Home Page on logo link"
                >
                    <Logo alt="FPL Cards logo" />
                </StyledLink>
                <MenuButton
                    id="menu-button"
                    aria-expanded="false"
                    onClick={toggleMenu}
                >
                    Menu
                </MenuButton>
                <NavList id="menu-list" role="menu">
                    <NavItem>
                        <StyledLink to="#">Home</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to="play">Play</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to="#">Disclaimer</StyledLink>
                    </NavItem>
                </NavList>
            </StyledNav>
        </StyledBanner>
    );
};
