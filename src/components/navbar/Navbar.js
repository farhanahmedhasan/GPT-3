import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';

import logo from '../../assests/images/logo.svg';

import useDarkMode from '../../hooks/useDarkMode';

const Navbar = () => {
  const [enabled, setIsEnabled] = useDarkMode();
  return (
    <div className='flex justify-between items-center py-8 px-16'>
      <div>
        <img className='h-4 w-16' src={logo} alt='GPT-3' />
      </div>
    </div>
  );
};

export default Navbar;
