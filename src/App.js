import { Header } from './pages';
import Brands from './components/brands/Brands';

function App() {
  return (
    <div className='App bg-primary text-primary transition'>
      <section className='bg-gradient-primary'>
        <Header />
      </section>
      <Brands />
    </div>
  );
}

export default App;
