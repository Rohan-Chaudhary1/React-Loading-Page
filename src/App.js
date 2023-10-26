import './App.css';
import Navbar from './components/Navbar';
import MainLoading from './loadingPage/MainLoading';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter'
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <MainLoading/>
    <Contact/>
    <Newsletter/>
    <Footer/>
    </>
  );
}

export default App;
