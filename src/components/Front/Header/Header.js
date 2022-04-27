import { Wrapper } from './Header.styles';
import Logo from 'components/Front/Logo/Logo';
import Menu from 'components/Front/Menu/Menu';

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <Menu />
    </Wrapper>
  );
};

export default Header;
