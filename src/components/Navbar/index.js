import React from 'react';
import { FaTerminal, FaCode, FaCubes, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks } from './NavbarElements';

import { ReactComponent as LogoIcon } from '../../images/logo.svg';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/home"><LogoIcon width="40px" height="30px" /></NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/home"><FaTerminal color="#ffaa00" size="25px" /></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/projects"><FaCode color="#ffaa00" size="25px" /></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/skills"><FaCubes color="#ffaa00" size="25px" /></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact"><FaEnvelope color="#ffaa00" size="25px" /></NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavMenu className="navmenu-bottom">
                        <NavItem>
                            <a href="https://github.com/tacopeland"><FaGithub color="#ffaa00" size="25px" /></a>
                        </NavItem>
                        <NavItem>
                            <a href="https://www.linkedin.com/in/timothy-copeland-50a60015b/"><FaLinkedin color="#ffaa00" size="25px" /></a>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

// Possible icons: FaBookOpen, FaBoxOpen, FaBrain, FaBriefcase, FaChartBar, FaCheck, FaClipboardList, FaCrown, FaCubes
// Shortlist: FaCrown, FaClipboardList, FaCubes, 

export default Navbar;
