import LazyLoad from 'react-lazyload';

import './possibility.css';
import possibility from '../../assests/images/Feature_Image.png';
import BlurImage from '../../assests/images/placeholder.jpg';

const Possibility = () => {
  return (
    <>
      <section className='possibility' id='possibility'>
        <div className='possibility__image'>
          <LazyLoad offset={300} placeholder={<img src={BlurImage} alt='placeholder' />}>
            <img src={possibility} alt='possibility' />
          </LazyLoad>
        </div>

        <div className='possibility__description'>
          <h4 className='possibility__description--early'>Request Early Access to Get Started</h4>
          <h2 className='gradient-text'>The possibilities are beyond your imagination</h2>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence
            way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
          <h4>Request Early Access to Get Started</h4>
        </div>
      </section>
    </>
  );
};

export default Possibility;
