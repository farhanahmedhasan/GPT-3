import './brands.css';
import { google, atlassian, dropbox, slack, shopify } from './import';

const Brands = () => {
  return (
    <section className='brands'>
      <div>
        <img src={google} alt='google' />
      </div>
      <div>
        <img src={atlassian} alt='atlassian' />
      </div>
      <div>
        <img src={dropbox} alt='dropbox' />
      </div>
      <div>
        <img src={slack} alt='slack' />
      </div>
      <div>
        <img src={shopify} alt='shopify' />
      </div>
    </section>
  );
};

export default Brands;
