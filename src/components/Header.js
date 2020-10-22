import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { auth } from '../firebase';
import { useStateValue } from './store/StateContext';

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };

    return (
        <header className='header'>
            <Link to='/'>
                <img
                    className='header__logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt='amazon logo'
                />
            </Link>

            <div className='header__search'>
                <input type='text' className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>

            <nav className='header__nav'>
                <Link to={'/sign-in'}>
                    <div
                        onClick={handleAuthentication}
                        className='header__options'
                    >
                        <span>Hello</span>
                        <span>Sign {user ? 'Out' : 'In'}</span>
                    </div>
                </Link>
                <div className='header__options'>
                    <span>Returns</span>
                    <span>&#38; Orders</span>
                </div>
                <div className='header__options'>
                    <span>Your</span>
                    <span>Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header__basketCount'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
