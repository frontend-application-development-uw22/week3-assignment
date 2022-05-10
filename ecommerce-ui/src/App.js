import './App.css';
import BnBCardList from './components/BnBCardList';
import Nav from './components/Nav'
import bnbData from './data/bnbs.json';

function App() {
  return (
    <div className="App">
      <Nav />
      <BnBCardList bnbData={bnbData} />
    </div>
  );
}

export default App;
