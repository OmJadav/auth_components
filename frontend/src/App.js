import logo from './logo.svg';
import './App.css';
import { Loginpage } from './components/Loginpage';
import { Registerpage } from './components/Registerpage';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Loginpage />
      <Registerpage />
      <Footer />
    </>
  );
}

export default App;
