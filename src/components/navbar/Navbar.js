import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';

import logo from '../../assests/images/logo.svg';

import useDarkMode from '../../hooks/useDarkMode';

const Navbar = () => {
  const [enabled, setIsEnabled] = useDarkMode();
  return (
    <div>
      <div>
        <img className=' h-16' src={logo} alt='GPT-3' />
      </div>
    </div>
  );
};

export default Navbar;
