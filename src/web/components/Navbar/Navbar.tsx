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

import { expandTarget } from '../../helpers/display';

const Navbar = (): JSX.Element => (
    <StyledBanner>
        <StyledNav>
            <StyledLink to="/" aria-label="FPL Cards Home Page on logo link">
                <Logo alt="FPL Cards logo" />
            </StyledLink>
            <MenuButton
                id="menu-button"
                aria-expanded="false"
                aria-controls="menu-list"
                onClick={(e) => expandTarget(e, 'menu-list', 'flex')}
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

export default Navbar;
