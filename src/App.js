import { Header, WhatIsGPT3, Features, Possibility, Blog, Footer } from './pages';
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
      <Footer />
    </div>
  );
}

export default App;
