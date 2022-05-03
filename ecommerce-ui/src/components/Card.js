import Image from './Image';
import SubCard from './SubCard';
import PropTypes from 'prop-types';

const Card = ({ bnb, cardClass }) => {
  const location = bnb.location;
  return (
    <div className={cardClass}>
      {/* show image of the house */}
      <div className='column'>
        <Image
          src={bnb.image}
          classImg='image-container'
        />
      </div>
      <div className='column'>
        <div className='text-container'>
          {/* Show the house's title  */}
          <div className='title'>
            {bnb.title}
          </div>
          {/* Show the house type */}
          <div className='content'>
            {bnb.houseType}
          </div>
          {/* Display location */}
          <div className='content'>
            {`Location: ${location.city}, ${location.country}`}
          </div>
        </div>
        {/* Use SubCard component to display rating & paymeny info at the bottom of the card element */}
        <SubCard bnb={bnb} />
      </div>
    </div>
  )
}

// Define props types
Card.propTypes = {
  bnb: PropTypes.object.isRequired,
  cardClass: PropTypes.string.isRequired,
}


export default Card
