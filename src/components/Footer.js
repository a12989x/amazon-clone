import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <ul className='footer__section'>
                <h4>Get to Know Us</h4>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Amazon</li>
                <li>Investor Relations</li>
                <li>Amazon Devices</li>
                <li>Amazon Tours</li>
            </ul>

            <ul className='footer__section'>
                <h4>Make Money with Us</h4>
                <li>Sell products on Amazon</li>
                <li>Sell apps on Amazon</li>
                <li>Become an Affiliate</li>
                <li>Advertise Your Products</li>
                <li>Self-Publish with Us</li>
                <li>Host an Amazon Hub</li>
            </ul>

            <ul className='footer__section'>
                <h4>Amazon Payment Products</h4>
                <li>Amazon Business Card</li>
                <li>Shop with Points</li>
                <li>Reload Your Balance</li>
                <li>Amazon Currency Converter</li>
            </ul>

            <ul className='footer__section'>
                <h4>Let Us Help You</h4>
                <li>Amazon and COVID-19</li>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Shipping Rates & Policies</li>
                <li>Returns & Replacements</li>
                <li>Manage Your Content and Devices</li>
                <li>Amazon Assistant</li>
                <li>Help</li>
            </ul>
            <img
                className='footer__img'
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                alt='amazon logo'
            />
        </div>
    );
};

export default Footer;
