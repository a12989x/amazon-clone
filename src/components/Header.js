import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
    return (
        <header className="header">
            <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
            />

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <nav className="header__nav">
                <div className="header__options">
                    <span>Hello</span>
                    <span>Sign In</span>
                </div>
                <div className="header__options">
                    <span>Returns</span>
                    <span>&#38; Orders</span>
                </div>
                <div className="header__options">
                    <span>Your</span>
                    <span>Prime</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__basketCount">0</span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
