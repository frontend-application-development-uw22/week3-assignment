import './App.css';
import React, {useState} from "react";
import VacationRental from './rentals/VacationRental'
import bnbs from './_data/bnbs.json'
import ShoppingCart from "./rentals/ShoppingCart";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BnBForm from "./rentals/BnBForm";


function App() {

  const [cart, setCart] = useState([])
  const [cartVisible, setCartVisible] = useState(true)
  const [formVisible, setFormVisible] = useState(true)
  const [bnbList, setBnbList] = useState(bnbs)
  const [title, setTitle]= useState("")
  const [houseType, sethouseType]= useState("")
  const [image, setImage]= useState("")
  const [city, setCity]= useState("")
  const [country, setCountry]= useState("")
  const [cost, setCost]= useState("")
  const [description, setDescription]= useState("")
  const [name, setName]= useState("")
  const [isSuperhost, setisSuperhost]= useState(false)
  const [stars, setStars]= useState("")
  const [reviews, setReviews]= useState("")

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

    // gets the element entity that triggered the event, in this case the form.
    const target = event.target

    // const name = target.name.value
    //
    // console.log(name)

    console.log('form button clicked')
    console.log()

    const newBnb =

      {
        "title": title,
        "houseType": houseType,
        "image": image,
        "location": {
          "city": city,
          "country": country
        },
        "payment": {
          "cost": Number(cost),
          "description": description
        },
        "host": {
          "name": name,
          "isSuperhost": Boolean(isSuperhost)
        },
        "rating": {
          "stars": Number(stars),
          "reviews": Number(reviews)
        }
      }


    bnbList.push(newBnb)

    setBnbList([...bnbList])

    // console logs

    console.log(bnbList)
    console.log()
    console.log(title)
    console.log()
    console.log(houseType)
    console.log()
    console.log(image)
    console.log()
    console.log(city)
    console.log()
    console.log(country)
    console.log()
    console.log(cost)
    console.log()
    console.log(description)
    console.log()
    console.log(name)
    console.log()
    console.log(isSuperhost)
    console.log()
    console.log(stars)
    console.log()
    console.log(reviews)
    console.log()

    setTitle("")
    sethouseType("")
    setImage("")
    setCity("")
    setCountry("")
    setCost("")
    setDescription("")
    setName("")
    setisSuperhost(false)
    setStars("")
    setReviews("")

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

              <BnBForm
                setTitle={setTitle}
                sethouseType={sethouseType}
                setImage={setImage}
                setCity={setCity}
                setCountry={setCountry}
                setCost={setCost}
                setDescription={setDescription}
                setName={setName}
                setisSuperhost={setisSuperhost}
                setStars={setStars}
                setReviews={setReviews}
                handleForm={handleForm}/>

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
