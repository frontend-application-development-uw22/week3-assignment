import Button from "./Button";
import Item from "./Item";
import PropTypes from 'prop-types';
const ShoppingCart = ({ item, onRemove }) => {
  return (
    <div className='row bottom-line'>
      <div>
        {/* Use Item component to render the selected vacation rental info */}
        <Item item={item} />
      </div>
      <Button type="submit" text="Remove from cart" onClick={onRemove} classBtn="btn btn-bg" />
    </div>
  )
}

ShoppingCart.propTypes = {
  item: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default ShoppingCart
