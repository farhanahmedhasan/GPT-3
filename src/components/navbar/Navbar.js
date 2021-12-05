import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { GiNightSleep } from 'react-icons/gi';

import './navbar.css';
import logo from '../../assests/images/logo.svg';
import useDarkMode from '../../hooks/useDarkMode';
import { navData } from '../../data/navData';

const Navbar = () => {
  const [enabled, setIsEnabled] = useDarkMode();
  return (
    <div className='navbar'>
      <ul className='navbar__links'>
        <div className='navbar__logo'>
          <img src={logo} alt='GPT-3' />
        </div>

        {navData.map((link) => {
          const { id, name, url } = link;
          return (
            <li key={id}>
              <a className='navbar__links__link ' href={url}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className='navbar__buttons flex items-center'>
        <button className='mr-16' onClick={() => setIsEnabled(!enabled)}>
          {enabled ? <HiOutlineLightBulb size={28} /> : <GiNightSleep size={28} />}
        </button>
        <button>Sign in</button>
        <button className='bg-secondary py-2 px-4 rounded'>Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
