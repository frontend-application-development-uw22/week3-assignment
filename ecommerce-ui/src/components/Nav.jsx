////////////////////////////////////////////////////////////////////////////////
// Nav /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';
import NavShoppingCartButton from './NavShoppingCartButton';

function Nav ({cartContents, cartOpen, setCartOpen}) {

  return (
    <nav>
      <ul>
        <li>
         ☁ CloudBnB
        </li>
        <li>
          Browse
        </li>
        <NavShoppingCartButton
          cartContents={cartContents}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
        />
      </ul>
    </nav>
  );

}

Nav.propTypes = {
  cartContents: PropTypes.array.isRequired
}

export default Nav;