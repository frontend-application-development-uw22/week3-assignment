import React  from 'react';
import PropTypes from 'prop-types';
import BnbImage from './BnbImage';
import BnbInfo from './BnbInfo'
import AddToCart from './AddToCart'

function Bnb({cname, id, bnbItem, handleAdd})
{
  return(
  <div className={cname} key={id}>
    <BnbImage cname={"bnbimagecell"} imgCname={"bnbimage"} imgUrl={bnbItem.image} id={id}/>
    <BnbInfo cname={"bnbtextcell"} bnbItem={bnbItem} id={id}/>
    <AddToCart cname={""} bnbItem={bnbItem} handleAdd={handleAdd} id={id}/>
  </div>
  )
}

Bnb.propTypes =
  {
    cname: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    bnbItem: PropTypes.object.isRequired,
    handleAdd: PropTypes.func.isRequired
  }

export default Bnb;
