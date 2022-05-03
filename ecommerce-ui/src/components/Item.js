import Image from "./Image";
import PropTypes from 'prop-types';
const Item = ({ item }) => {
  const payment = item.payment;
  return (
    <>
      <div>
        <Image
          src={item.image}
          classImg='image-container'
        />
      </div>
      <div className="content">
        {`${item.title}: $${payment.cost}`}
      </div>   
    </>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}

export default Item
