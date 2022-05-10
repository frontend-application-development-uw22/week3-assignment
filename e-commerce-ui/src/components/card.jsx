import React from "react";

// My Components
import Picture from "./picture";
import Location from "./location";
// BootStrap Components
import Card from "react-bootstrap/Card";

// Material UI Components
import Rating from '@mui/material/Rating';

export default function CardBuilder({imgSrc, title, houseType, stars, reviewCount, isHostSuper, hostName,cost, cost_description, city, country }){
  return(<Card>
    <Picture src={imgSrc}/>
      <Card.Body className="cardBody">
          <Card.Title className="cardTitle">{title}</Card.Title>
          <Card.Text className="houseType">{houseType}</Card.Text>
          <Card.Text className="rating"><Rating name="read-only" value={stars} readOnly />({reviewCount})</Card.Text>
          <Card.Text className={`superHost_${isHostSuper}`}>{hostName}</Card.Text>
          <Card.Text className="cost">{cost}/Night</Card.Text>
          <Card.Text className="cost-description">{cost_description}</Card.Text>
          <Card.Text className="location"><Location city={city} country={country}/></Card.Text>
      </Card.Body>
  </Card>)
}
