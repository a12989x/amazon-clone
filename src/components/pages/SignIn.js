import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
    };

    const register = (e) => {
        e.preventDefault();
    };

    return (
        <div className='signIn'>
            <Link to='/'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt='Amazon Logo'
                    className='signIn__logo'
                />
            </Link>

            <div className='signIn__container'>
                <h1>Sign In</h1>

                <form>
                    <h5>Email</h5>
                    <input
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type='submit'
                        className='signIn__signInBtn'
                        onClick={signIn}
                    >
                        Sign In
                    </button>

                    <p>
                        By sign-in you agree to the AMAZON FAKE CLONE Conditions
                        of Use &amp; Sale. Please see our Privacy Notice, our
                        Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button onClick={register} className='signIn__registerBtn'>
                        Create your Amazon Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
