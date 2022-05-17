import bnbs from './bnbs.json';
import VacationRental from './VacationRental';
import './App.css';

function App() {
  const bnb = bnbs.map((data) => {
    return <VacationRental data={data}></VacationRental>
  });
  
  return bnb;
}

export default App;
