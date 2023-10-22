import './App.css';
import LowerLoading from './components/LowerLoading';
import MiddleLoading from './components/MiddleLoading';
import Loading from './components/TopLoading';

function App() {
  return (
    <div className='animate-pulse '>
      <Loading />
      <MiddleLoading/>
      <LowerLoading/>
    </div>
  );
}

export default App;
