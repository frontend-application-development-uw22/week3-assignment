
import './App.css';
import Main from './ecommerce-ui/Main'
import Header from './ecommerce-ui/Header';
import ShoppingCart from './ecommerce-ui/ShoppingCart';
import properties from "./_data/bnbs.json"


function App() {

  return (
    <div className="App">
      <Header/> 
      <div className="row">
        <Main properties={properties}/>
        <ShoppingCart/>
      </div>
    </div>
  );
}

export default App;
