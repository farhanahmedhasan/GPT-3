import './features.css';
import Feature from '../../components/feature/Feature';
import { featuresData } from '../../data/featuresData';

const Features = () => {
  return (
    <section className='features' id='features'>
      <div className='features__textBox'>
        <h2 className='gradient-text features__title'>
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h2>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className='features__featureItems'>
        {featuresData.map((feature) => {
          return (
            <div key={feature.id} className='features__featureItem'>
              <Feature title={feature.title} details={feature.details} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
