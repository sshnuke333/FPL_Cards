import React from 'react';
import {
    StyledBanner,
    StyledNav,
    Logo,
    MenuButton,
    NavList,
    NavItem,
    StyledLink,
} from './Navbar.styles';

import { toggleDisplay } from '../helpers/display';

export const Navbar = () => {
    return (
        <StyledBanner>
            <StyledNav>
                <StyledLink
                    to="/"
                    aria-label="FPL Cards Home Page on logo link"
                >
                    <Logo alt="FPL Cards logo" />
                </StyledLink>
                <MenuButton
                    id="menu-button"
                    aria-expanded="false"
                    onClick={(e) => toggleDisplay(e, 'menu-list', 'flex')}
                >
                    Menu
                </MenuButton>
                <NavList id="menu-list" role="menu">
                    <NavItem>
                        <StyledLink to="/">Home</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to="play">Play</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to="disclaimer">Disclaimer</StyledLink>
                    </NavItem>
                </NavList>
            </StyledNav>
        </StyledBanner>
    );
};
