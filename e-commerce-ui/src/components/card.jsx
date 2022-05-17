import React from "react";
import PropTypes from 'prop-types'

// My Components
import Picture from "./picture";
import Location from "./location";

// BootStrap Components
import Card from "react-bootstrap/Card";

// Material UI Components
import Rating from '@mui/material/Rating';

export default function CardBuilder({ imgSrc, title, houseType, stars, reviewCount, isHostSuper, hostName,cost, cost_description, city, country }){
  if(cost_description !== ""){
    cost_description = `- ${cost_description}`
  }
  return(<Card>
    <Card.Text className="houseType">{houseType}</Card.Text>
    <Card.Text className="rating"><Rating name="read-only" value={stars} readOnly />({reviewCount})</Card.Text>
    <Picture className="cardImg" src={imgSrc} alt={`${city}'s ${houseType} IMG`}/>
      <Card.Body className="cardBody">
          <Card.Title className="cardTitle">{title}</Card.Title>
          <Card.Text className="hostName">Host: {hostName}</Card.Text>
          <Card.Text className="location"><Location city={city} country={country}/></Card.Text>
          <Card.Text className="cost">${cost}(USD) /night </Card.Text>
          <Card.Text className="cost-description">{cost_description}</Card.Text>
          <Card.Text className={`isSuper_${isHostSuper}`} >SuperHost!</Card.Text>
      </Card.Body>
  </Card>)
}

CardBuilder.propTypes ={
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  houseType: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  isHostSuper: PropTypes.bool.isRequired,
  hostName: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  cost_description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
}