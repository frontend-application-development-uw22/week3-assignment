import Card from './Card';
import Button from './Button';
import PropTypes from 'prop-types';

const VacationRental = ({ bnb, onAdd }) => {
  return (
    <div className='row bottom-line'>
      {/* Use Card component to render Bnb detail info */}
      <Card
        bnb={bnb}
        cardClass='card'
      />
      <Button type="submit" text="Add to cart" onClick={onAdd} classBtn="btn" />
    </div>
  )
}

// Define props types
VacationRental.propTypes = {
  bnb: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired
}

export default VacationRental
