import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SubCard = ({ bnb }) => {
  const rating = bnb.rating;
  const payment = bnb.payment;

  return (
    <div className="sub-card">
        <div className='content'>
          {/* Display star icon and rating info */}
          <FontAwesomeIcon icon = {faStar} className='star' />
          {` ${rating.stars} (${rating.reviews} reviews)`}
        </div>
        {/* Display payment info */}
        <div className='content'>
          {`$${payment.cost} night - ${payment.description}`}
        </div>
    </div>
  )
}

SubCard.propTypes = {
  bnb: PropTypes.object.isRequired
}

export default SubCard
