import React, {useState, useEffect} from "react";
import PropTyes from "prop-types"



const Location = ({city, country})=>{
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user_country, setCountry] = useState("");
  // let url = process.env.REACT_APP_API_URL
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then(res => res.json())
      .then(
        (jsonResponse) => {
          setIsLoaded(true);
          setCountry(jsonResponse.country);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if(error) {
    return `${city}, ${country}`;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if(user_country==="US" && country==="USA") {
    return `${city}`
  }else{
    return `${city}, ${country}`;
  }
  
}

export default Location

Location.PropTyes = {
  city: PropTyes.string.isRequired,
  country: PropTyes.string.isRequired
}

