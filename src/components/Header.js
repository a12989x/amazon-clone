import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { auth } from '../firebase';
import { AuthContext } from './contexts/AuthContext';
import { ProductsContext } from './contexts/ProductsContext';

const Header = () => {
    const { user, username } = useContext(AuthContext);
    const { basket } = useContext(ProductsContext);

    const handleAuthentication = () => {
        if (user) auth.signOut();
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
                        <span>Hello {username}</span>
                        <span>Sign {user ? 'Out' : 'In'}</span>
                    </div>
                </Link>
                {user && (
                    <Link to='/orders'>
                        <div className='header__options'>
                            <span>Returns</span>
                            <span>&#38; Orders</span>
                        </div>
                    </Link>
                )}
                <Link to={user ? '/checkout' : 'sign-in'}>
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
