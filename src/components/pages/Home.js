import React from 'react';

import Product from '../Product';

const productsData = [
    {
        id: '5cc75631-4631-434c-81ab-1057d7b5534b',
        title:
            'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback',
        price: 11.96,
        rating: 5,
        imgUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg',
    },
    {
        id: '7119ba6a-b185-421c-845c-3de3defe9c42',
        title:
            'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
        price: 239.0,
        rating: 4,
        imgUrl:
            'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg',
    },
    {
        id: '1a23e8eb-f9e4-40cb-b563-1006cc2464ef',
        title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
        price: 199.99,
        rating: 3,
        imgUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg',
    },
    {
        id: 'd02a78e3-9202-413a-964a-db379ef73469',
        title:
            'Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric',
        price: 98.99,
        rating: 5,
        imgUrl:
            'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$',
    },
    {
        id: '54c119ed-b7f5-4f9d-867b-9860243b81b5',
        title:
            'New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
        price: 598.99,
        rating: 4,
        imgUrl:
            'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg',
    },
    {
        id: 'd17db7a8-dd7e-4534-a9c0-20c95bd337a4',
        title:
            "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
        price: 1094.98,
        rating: 4,
        imgUrl:
            'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg',
    },
];

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__img'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt='prime video banner'
                />

                <div className='home__row'>
                    <Product {...productsData[0]} />
                    <Product {...productsData[1]} />
                </div>

                <div className='home__row'>
                    <Product {...productsData[2]} />
                    <Product {...productsData[3]} />
                    <Product {...productsData[4]} />
                </div>

                <div className='home__row'>
                    <Product {...productsData[5]} />
                </div>
            </div>
        </div>
    );
};

export default Home;
