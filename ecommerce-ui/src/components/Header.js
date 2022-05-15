/* eslint-disable react/prop-types */
import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Welcome to Obi-Wan Kenobi Vacation Rentals</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Shopping Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}

      </div>
    </header>
  );
}
