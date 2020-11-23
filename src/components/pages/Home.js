import React, { useState, useContext, useEffect } from 'react';

import { ProductsContext } from '../contexts/ProductsContext';

import Product from '../Product';

const Home = () => {
    const { products } = useContext(ProductsContext);

    const [randomNumbers, setRandomNumbers] = useState([]);

    useEffect(() => {
        let nums = [];
        for (let i = 0; i < products.length; i++) {
            let randomNumber = Math.floor(Math.random() * products.length);

            nums.push(randomNumber);
        }
        setRandomNumbers(nums);
    }, [products]);

    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__img'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt='prime video banner'
                />

                <div className='home__row'>
                    <Product page='home' {...products[randomNumbers[0]]} />
                    <Product page='home' {...products[randomNumbers[1]]} />
                </div>

                <div className='home__row'>
                    <Product page='home' {...products[randomNumbers[2]]} />
                    <Product page='home' {...products[randomNumbers[3]]} />
                    <Product page='home' {...products[randomNumbers[4]]} />
                </div>

                <div className='home__row'>
                    <Product page='home' {...products[randomNumbers[5]]} />
                </div>
            </div>
        </div>
    );
};

export default Home;
