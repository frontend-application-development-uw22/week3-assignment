import React from 'react';

// Will render top-navigation
function TopNavigation(){
    return (
        <nav className="top-navigation">
            <ul>
                <li>Home</li>
                <li><img alt="shopping cart" src="../icons/shopping-cart-16.png" ></img> Cart</li>
            </ul>
        </nav>
    );
}

export default TopNavigation;