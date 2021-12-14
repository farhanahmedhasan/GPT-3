import { Header, WhatIsGPT3, Features, Possibility } from './pages';
import { Brands } from './components';

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
    </div>
  );
}

export default App;
