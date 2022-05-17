import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';

export default function Location({city, country}){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user_country, setCountry] = useState("");
  useEffect(() => {
    fetch(process.env.REACT_APP_LOCATION_API_URL)
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
  },[])
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

Location.propTyes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
}

