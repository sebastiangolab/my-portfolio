import { useState } from 'react';
import {
  Wrapper,
  MenuLink,
  MobileMenuButton,
  MobileMenuCloseButton,
} from './Menu.styles';
import LanguagesSwitch from 'components/Front/LanguagesSwitch/LanguagesSwitch';

const Menu = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMobileOpen = () => setIsMobileOpen(true);
  const handleMobileClose = () => setIsMobileOpen(false);

  return (
    <>
      <MobileMenuButton onClick={handleMobileOpen}>
        Menu
      </MobileMenuButton>
      <Wrapper isVisible={isMobileOpen}>
        <MobileMenuCloseButton onClick={handleMobileClose}>X</MobileMenuCloseButton>
        <MenuLink href="#">Start</MenuLink>
        <MenuLink href="#">Projects</MenuLink>
        <MenuLink href="#">About me</MenuLink>
        <MenuLink href="#">Contact</MenuLink>
        {/* <LanguagesSwitch /> */}
      </Wrapper>
    </>
  );
};

export default Menu;
