import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: #111;
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    left: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60px;
    z-index: 1;
    height: 100vh;
    padding: 24px 0;
`;

export const NavLogo = styled(Link)`
    justify-self: flex-start;
    justify-content: center;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`;

export const NavMenu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    text-align: center;
`;

export const NavItem = styled.li`
    height: 40px;
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;
