import './footer.css';
import Logo from '../../assests/images/logo.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__content'>
          <h1 className='gradient-text'>Do you want to step in to the future before others</h1>
          <button>Request Early Access</button>
        </div>

        <div className='footer__row'>
          <div className='footer__row--first'>
            <img src={Logo} alt='footer logo' width='120' />
            <p className='widthText'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>

          <div className='footer__row--second'>
            <h3>Links</h3>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>

          <div className='footer__row--third'>
            <h3>Company</h3>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>

          <div className='footer__row--fourth'>
            <h3>Get in touch</h3>
            <p className='widthText'>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>

        <div>
          <p className='text-center'>© 2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
