import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${props => props.$scrolled ? props.theme.colors.white : 'transparent'};
  box-shadow: ${props => props.$scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'};
  transition: all ${props => props.theme.transitions.default};
  padding: ${props => props.theme.spacing.md} 0;
  height: 60px;
  display: flex;
  align-items: center;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.colors.white};
    padding: ${props => props.theme.spacing.xl};
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  &.active {
    color: ${props => props.theme.colors.primary};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <NavContainer $scrolled={isScrolled}>
      <NavContent>
        <Link to="home" smooth duration={500}>
          <Logo src="/logo.png" alt="Lucas Falcão" />
        </Link>
        <MenuButton onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </MenuButton>
        <NavLinks $isOpen={isMenuOpen}>
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              spy
              activeClass="active"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;