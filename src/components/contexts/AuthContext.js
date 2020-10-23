import React, { useState, useEffect, createContext } from 'react';

import { auth } from '../../firebase';
import History from '../History';
import { useForm } from '../useForm';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [values, handleChange] = useForm({ email: '', password: '' });
    const [username, setUsername] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
                const email = authUser.email;
                setUsername(email.replace(/@[^@]+$/, ''));
            } else {
                setUser(null);
                setUsername(null);
            }
        });
    }, []);

    const signIn = (e) => {
        const { email, password } = values;

        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => History.push('/'))
            .catch((err) => console.error(err.message));
    };

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(values.email, values.password)
            .then((auth) => {
                if (auth) History.push('/');
            })
            .catch((err) => alert(err.message));
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                username,
                values,
                handleChange,
                signIn,
                register,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
