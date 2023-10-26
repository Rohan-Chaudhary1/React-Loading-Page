import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainLoading from './loadingPage/MainLoading';

function App() {
  return (
    <>
    <Navbar/>
    <MainLoading/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
