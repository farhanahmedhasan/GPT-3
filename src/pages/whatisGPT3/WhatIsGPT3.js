import './whatisGPT3.css';
import Feature from '../../components/feature/Feature';

const WhatIsGPT3 = () => {
  return (
    <section className='gpt3'>
      <div className='gpt3__whatGpt3'>
        <Feature
          classTitileBox='gpt3__whatGpt3__title'
          classDescBox='gpt3__whatGpt3__desc'
          title='What is GPT-3'
          details='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
        />
      </div>

      <div className='gpt3__imagination'>
        <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>

      <div className='gpt3__features'>
        <div>
          <Feature
            title='Chatbots'
            details='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
          />
        </div>

        <div>
          <Feature
            title='Knowledgebase'
            details='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
          />
        </div>
        <div>
          <Feature
            title='Education'
            details='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsGPT3;
