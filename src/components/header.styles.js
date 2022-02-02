import styled from 'styled-components';

export const StyledBanner = styled.header`
    border-bottom: 1px solid #e2e8f0;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    background-color: #37003c;
    height: 4.5rem;
`;

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
`;

export const Logo = styled.img`
    font-size: 1.5rem;
    font-weight: 500;
`;

export const MenuButton = styled.button`
    display: none;
    padding: 0.5rem;
    border: 1px solid #fff;
    border-radius: 5px;
    font-size: 1rem;
    background: transparent;
    cursor: pointer;
    color: #fff;
    @media only screen and (max-width: 768px) {
        display: block;
    } ;
`;

export const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 768px) {
        display: none;
        position: fixed;
        left: 0;
        top: 4.5rem;
        border-top: 1px solid coral;
        flex-direction: column;
        background-color: #fff;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        background-color: #37003c;
    }
`;

export const NavItem = styled.li`
    margin-left: 5rem;
    @media only screen and (max-width: 768px) {
        margin: 0.75rem 0;
    }
`;

export const Link = styled.a`
    font-size: 1.5rem;
    font-weight: 400;
    color: white;
    &:hover {
        color: #482ff7;
    }
`;
