import './header.css';
import { Navbar } from '../../components';

import avatar1 from '../../assests/images/avatar1.png';
import avatar2 from '../../assests/images/avatar2.png';
import avatar3 from '../../assests/images/avatar3.png';
import avatar4 from '../../assests/images/avatar4.png';
import avatar5 from '../../assests/images/avatar5.png';
import avatar6 from '../../assests/images/avatar6.png';
import avatar7 from '../../assests/images/avatar7.png';
import ai from '../../assests/images/ai_hero.png';

const Header = () => {
  return (
    <>
      <section className={`bg-gradient-primary`}>
        <Navbar />

        {/* Hero Section */}
        <div className='container'>
          <div className='hero py-8 grid grid-cols-12 items-center'>
            {/* Left Side */}
            <div className='col-span-7'>
              <div className='hero__textBox mb-12'>
                <h1 className='hero__heading gradient-text mb-12'>Let's Build Something amazing with GPT-3 OpenAI</h1>
                <p className='hero__para paragraph'>
                  Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
                  Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow
                  asked of.
                </p>
              </div>

              <div className='hero__contact mb-12'>
                <input className='formControl w-3/4' type='email' placeholder='Your Email Address' />
                <button className='btn'>Get Started</button>
              </div>

              <div className='hero__users flex items-center'>
                <div className='hero__images flex'>
                  <img src={avatar1} alt='avatar1' />
                  <img src={avatar2} alt='avatar2' />
                  <img src={avatar3} alt='avatar3' />
                  <img src={avatar4} alt='avatar4' />
                  <img src={avatar5} alt='avatar5' />
                  <img src={avatar6} alt='avatar6' />
                  <div>
                    <img src={avatar7} alt='avatar6' />
                    <span>1.6k+</span>
                  </div>
                </div>
                <p className='ml-4'>1,600 people requested access a visit in last 24 hours</p>
              </div>
            </div>

            {/* Right Side */}
            <div className='col-span-5'>
              <div className='hero__ai'>
                <img src={ai} alt='ai' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
