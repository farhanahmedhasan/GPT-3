import './cta.css';

const CTA = () => {
  return (
    <section className='cta'>
      <div className='cta__wrapper'>
        <div className='cta__content'>
          <p>Request Early Access to Get Started</p>
          <h3>Register today & start exploring the endless possiblities.</h3>
        </div>

        <div className='cta__button'>
          <button className='btn btn--rounded btn--quinary'>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
