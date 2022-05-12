import './App.css';
import React, {useState} from "react";
import VacationRental from './rentals/VacationRental'
import bnbs from './_data/bnbs.json'
import ShoppingCart from "./rentals/ShoppingCart";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import { red } from '@mui/material/colors';

// const toggleButtonColor = red[500];


function App() {

  const [cart, setCart] = useState([])

  const [cartVisible, setCartVisible] = useState(true)

  const [formVisible, setFormVisible] = useState(true)

  const [bnbList, setBnbList] = useState(bnbs)

  const [title, setTitle]= useState("")

  function addToCart(card){

    console.log('button clicked')
    console.log(cart)

    setCart([...cart, card])

  }

  function removeFromCart(idx){

    console.log('button clicked')
    console.log(idx)
    setCart([...cart.slice(0, idx), ...cart.slice(idx+1, cart.length)])

  }

  function handleToggle(){
    console.log('toggle button clicked')
    setCartVisible(!cartVisible)
    console.log(cartVisible)
  }

  function handleInputBnB(){
    console.log('Input BnB button clicked')
    setFormVisible(!formVisible)
  }

  function handleForm(event){
    event.preventDefault()

    const target = event.target

    const name = target.name.value

    console.log(name)

    console.log('form button clicked')
    console.log()

    const newBnb =

      {
        "title": "Room straight from the Form",
        "houseType": "Room",
        "image": "https://www.usnews.com/dims4/USNEWS/969b907/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F7d%2Fd7%2Fce42ec8b466ebf93dc1da709ae62%2F1-main-photo-courtesy-of-airbnb.jpg",
        "location": {
          "city": "Toronto",
          "country": "Canada"
        },
        "payment": {
          "cost": 200,
          "description": "Free cancellation"
        },
        "host": {
          "name": "John",
          "isSuperhost": false
        },
        "rating": {
          "stars": 5,
          "reviews": 12
        }
      }


    bnbList.push(newBnb)

    setBnbList([...bnbList])

    console.log(bnbList)

    console.log()

    // setTitle(title)
    //
    console.log(title)

    console.log(

    )

    setTitle("")
    //
    // setTitle("")
    //
    // console.log(title.value)

    target.reset()





  }

  let sum=0

  cart.forEach(value =>{

    sum+=value.payment.cost

  })

  return (

    <div className="mother">

      <div className="website-description">

        <div>
        </div>
        <div>
          <h1>Random BnBs at Localhost</h1>
        </div>

        <div>
        </div>

      </div>

      <div className="menu-buttons">

        <div>

        </div>

        <div>

          <Stack spacing={2} direction="row">

            <Button onClick={handleInputBnB} variant="contained" style={{
              backgroundColor: "#c51162",
              padding: "10px 10px",
              marginTop: "10px",

            }}>Toggle Form</Button>

            <Button onClick={handleToggle} variant="contained" style={{
              backgroundColor: "#6200ea",
              padding: "10px 10px",
              marginTop: "10px",

            }}>Toggle Cart</Button>

          </Stack>

        </div>

        <div>

        </div>

      </div>

      <div>

        <div className="App">

          <div className="input-bnb-form">

            <div className={formVisible ? 'app-grid-form' : 'form-off'}>

              <h1 className="input-bnb-h1">Input BnB</h1>

              <hr />

              <form onSubmit={handleForm} id="bnb-form">
                <div className="form-group mb-2">
                  <label htmlFor="title">Title</label>
                  <input
                    id="title"
                    name="title"
                    // value={title}
                    onChange={(event)=> setTitle(event.target.value)}
                    className="form-control"
                    type="text"
                    placeholder=""
                    // pattern="^\w+\s*\w+$"

                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="houseType">House Type</label>
                  <input
                    id="houseType"
                    name="houseType"
                    className="form-control"
                    type="text"
                    placeholder=""
                    // pattern="^\w+\s*\w+$"
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="image">Image</label>
                  <input
                    id="image"
                    name="image"
                    className="form-control"
                    type="text"
                    placeholder=""
                    // pattern="\d{1,}"
                  />
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    name="city"
                    className="form-control"
                    type="text"
                    placeholder=""
                    // pattern="\d{1,}"
                  />
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="country">Country</label>
                  <input
                    id="country"
                    name="country"
                    className="form-control"
                    type="text"
                    placeholder=""
                    // pattern="\d{1,}"
                  />
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="cost">Cost</label>
                  <input
                    id="cost"
                    name="cost"
                    className="form-control"
                    type="text"
                    placeholder=""
                    // pattern="\d{1,}"
                  />
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="description">Description</label>
                  <input
                    id="description"
                    name="description"
                    className="form-control"
                    type="text"
                    placeholder=""
                    // pattern="\d{1,}"
                  />
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    className="form-control"
                    type="text"
                    placeholder=""
                    // pattern="\d{1,}"
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="isSuperhost">isSuperhost</label>
                  <input
                    id="isSuperhost"
                    name="isSuperhost"
                    className="form-control"
                    type="text"
                    placeholder=""
                    // pattern="\d{1,}"
                  />
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="stars">Stars</label>
                  <input
                    id="stars"
                    name="stars"
                    className="form-control"
                    type="text"
                    placeholder=""
                    // pattern="\d{1,}"
                  />
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="reviews">Reviews</label>
                  <input
                    id="reviews"
                    name="reviews"
                    className="form-control"
                    type="text"
                    placeholder=""
                    // pattern="\d{1,}"
                  />
                </div>

                <div className="form-group mb-2">
                  <input
                    id="submit"
                    className="btn btn-primary"
                    type="submit"
                    value="Submit Form"


                  />
                </div>


              </form>

            </div>

          </div>

          <div className="app-grid">

            <h1 className="vacation-rentals-h1">Vacation Rentals</h1>

            <hr />

            <VacationRental bnbList={bnbList} addToCart = {addToCart}/>

          </div>

          <div className={cartVisible ? 'app-grid-shopping-cart' : 'shopping-cart-off'}>

            <h1 className="shopping-cart-h1">Shopping Cart</h1>

            <hr />

            <ShoppingCart cart={cart} removeFromCart={removeFromCart}/>

            <div className="app-grid-total-due">

              <h1 className="total-payment">Total Due</h1>
              <hr />
              <h1 className="sum">{sum}</h1>

            </div>

          </div>



        </div>

      </div>

      </div>

  );
}

export default App;
