import { useState, useEffect } from 'react';

import './header.css';
import { Navbar } from '../../components';
import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, ai } from './import';
import useDarkMode from '../../hooks/useDarkMode';

const Header = () => {
  const [enabled] = useDarkMode();
  const [alert, setAlert] = useState(enabled);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(true);
    }, 3500);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className='container'>
        <div className='hero py-8 grid grid-cols-12 items-center'>
          {/* Left Side */}
          <div className='col-span-12 lg:col-span-7 mb-12 lg:mb-0'>
            <div className='hero__textBox mb-12'>
              <h1 className='hero__heading gradient-text mb-12'>Let's Build Something amazing with GPT-3 OpenAI</h1>
              <p className='hero__para paragraph'>
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
                Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked
                of.
              </p>
            </div>

            <div className='hero__contact mb-12 flex'>
              <input
                className='formControl flex-1 xl:flex-none xl:w-3/4'
                type='email'
                placeholder='Your Email Address'
              />
              <button className='btn'>Get Started</button>
            </div>

            <div className='hero__users flex flex-col md:flex-row items-center'>
              <div className='hero__images flex'>
                <img src={avatar1} alt='avatar1' />
                <img src={avatar2} alt='avatar2' />
                <img src={avatar3} alt='avatar3' />
                <img src={avatar4} alt='avatar4' />
                <img src={avatar5} alt='avatar5' />
                <img src={avatar6} alt='avatar6' />
                <div>
                  <p>1.6k+</p>
                </div>
              </div>
              <p className='ml-4 mt-4 md:mt-0'>1,600 people requested access a visit in last 24 hours</p>
            </div>
          </div>

          {/* Right Side */}
          <div className='col-span-12 lg:col-span-5 place-self-center'>
            <div className='hero__ai'>
              <img src={ai} alt='ai' />
            </div>
          </div>
        </div>
      </div>

      {!alert && <div className='alert'>Please Enable dark mode for better User Experience</div>}
    </>
  );
};

export default Header;
