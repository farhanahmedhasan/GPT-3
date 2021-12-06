import { useState } from 'react';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { GiNightSleep } from 'react-icons/gi';

import './navbar.css';
import logo from '../../assests/images/logo.svg';
import useDarkMode from '../../hooks/useDarkMode';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [enabled, setIsEnabled] = useDarkMode();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <ul className='navbar__links'>
        <div className='navbar__logo'>
          <img src={logo} alt='GPT-3' />
        </div>
        <NavLinks />
      </ul>

      <div className='navbar__buttons flex items-center'>
        <button className='navbar__buttons__bar' onClick={() => setIsEnabled(!enabled)}>
          {enabled ? <HiOutlineLightBulb size={28} /> : <GiNightSleep size={28} />}
        </button>
        <button className='sign'>Sign in</button>
        <button className='sign bg-secondary py-2 px-4 rounded'>Sign up</button>
      </div>

      {/* For Mobile Version */}

      <div className='navbar__menu'>
        {toggleMenu ? (
          <RiCloseLine className='active cursor-pointer' size={28} onClick={() => setToggleMenu(!toggleMenu)} />
        ) : (
          <RiMenu3Line className='active cursor-pointer' size={28} onClick={() => setToggleMenu(!toggleMenu)} />
        )}

        {/* Mobile Menu */}
        {toggleMenu && (
          <>
            <div className='navbar__menu__links scale-up-center'>
              <ul className='space-y-4'>
                <NavLinks className={`${toggleMenu ? 'active' : ''}`} />
              </ul>
              <div className='navbar__menu__buttons mt-6'>
                <button>Sign in</button>
                <button className='bg-secondary py-2 px-4 rounded'>Sign up</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
