import logo from './logo.svg';
import './App.css';
import BnBCardList from './components/BnBCardList';
import bnbData from './data/bnbs.json';

function App() {
  return (
    <div className="App">
      <BnBCardList bnbData={bnbData} />
    </div>
  );
}

export default App;
