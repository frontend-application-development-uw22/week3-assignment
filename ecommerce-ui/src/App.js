import { useState } from 'react';
import Button from './components/Button';
import ShoppingCart from './components/ShoppingCart';
import VacationRental from './components/VacationRental';
import bnbs from './data/bnbs.json';
function App() {
  const [itemList, setItemList] = useState([]);
  const [toggleDisplay, setToggleDisplay] = useState(true);
  const [totalCost, setTotalCost] = useState(0);
  // Add the selected vacation rental to the itemList array
  const addItem = (id) => {
    setItemList([...itemList, bnbs[id]]);
    // Sum total cost
    setTotalCost(previousValue => previousValue + bnbs[id].payment.cost);
  }

  const removeItem = (id) => {
    // Minus total cost
    setTotalCost(previousValue => previousValue - itemList[id].payment.cost);
    // Remove the current item from the item list array
    setItemList([
      ...itemList.slice(0, id),
      ...itemList.slice(id+1, itemList.length)
    ]);
  }

  return (
    <>
      {/* Rendering button show/hide shopping cart */}
      <div className='row right-side'>
        <Button
          type="submit"
          text={toggleDisplay? "Hide Shopping Cart" : "Show Shopping Cart"}
          onClick={()=> setToggleDisplay(!toggleDisplay)}
          classBtn="btn"
        />
      </div>
      <div className='row'>
        {/* Rendering vacation rental component */}
        <div className="double-column border-line">
          <div className='title'>Vacation Rentals</div>
          {bnbs.map((bnb, idx) => 
            // VacationRental component is used to render each Bnb
            <VacationRental
              key={idx}
              bnb = {bnb}
              onAdd={() => addItem(idx)}
            />
          )}
        </div>
        {/* Rendering shopping cart component */}
        <div className={`column border-line ${toggleDisplay? 'show' : 'hide'}`}>
          <div className='title'>Shopping Cart</div>
          {itemList.map((item, idx) =>
            <ShoppingCart
              key={idx}
              item={item}
              onRemove={() => removeItem(idx)}
            />
          )}
          {/* Show/hide total cost in shopping cart column */}
          <div className={`title ${totalCost > 0 ? 'show' : 'hide'}`}>
            {`Total: $${totalCost}`}
          </div>
        </div>
      </div>    
    </>
  );
}

export default App;
