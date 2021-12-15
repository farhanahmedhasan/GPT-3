import { Header, WhatIsGPT3, Features, Possibility, Blog } from './pages';
import { Brands, CTA } from './components';

function App() {
  return (
    <div className='App bg-primary text-primary transition'>
      <section className='bg-gradient-primary' id='home'>
        <Header />
      </section>
      <Brands />
      <WhatIsGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
    </div>
  );
}

export default App;
