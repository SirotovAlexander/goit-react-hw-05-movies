import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="#">Home</NavLink>
        <NavLink to="#">Movies</NavLink>
      </nav>
    </header>
  );
};

export default Header;
