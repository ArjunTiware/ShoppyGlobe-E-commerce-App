import './App.css';
import { Header, Navbar, Hero, Card, Contact, Footer } from './components';

const App = () => {
  return (
    <div className='w-full overflow-hidden scroll-smooth'>
      <Header />
      <Navbar />
      <Hero />
      <Card />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;