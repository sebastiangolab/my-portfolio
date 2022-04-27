import { useState } from 'react';
import {
  Wrapper,
  MenuLink,
  MobileMenuButton,
  MobileMenuCloseButton,
} from './Menu.styles';

const Menu = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMobileOpen = () => setIsMobileOpen(true);
  const handleMobileClose = () => setIsMobileOpen(false);

  return (
    <>
      <MobileMenuButton onClick={handleMobileOpen}>Menu</MobileMenuButton>
      <Wrapper isVisible={isMobileOpen}>
        <MobileMenuCloseButton onClick={handleMobileClose}>
          X
        </MobileMenuCloseButton>

        <MenuLink to="projects" spy={true} smooth={true} duration={500}>
          Projects
        </MenuLink>

        <MenuLink to="about" spy={true} smooth={true} duration={500}>
          About me
        </MenuLink>

        <MenuLink to="contact" smooth={true} duration={500}>
          Contact
        </MenuLink>
      </Wrapper>
    </>
  );
};

export default Menu;
