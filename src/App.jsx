import './App.css';
import { Navbar } from './components';

const App = () => {
  return (
    <div className='w-full overflow-hidden scroll-smooth'>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;