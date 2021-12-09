import { Header, WhatIsGPT3 } from './pages';
import { Brands } from './components';

function App() {
  return (
    <div className='App bg-primary text-primary transition'>
      <section className='bg-gradient-primary'>
        <Header />
      </section>
      <Brands />
      <WhatIsGPT3 />
    </div>
  );
}

export default App;
