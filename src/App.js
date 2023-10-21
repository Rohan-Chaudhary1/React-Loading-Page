import './App.css';
import LowerLoading from './components/LowerLoading';
import MiddleLoading from './components/MiddleLoading';
import Loading from './components/TopLoading';

function App() {
  return (
    <>
    <Loading/>
   <MiddleLoading/>
   <LowerLoading/>
    </>
  );
}

export default App;
