import React from 'react';
import { Button } from "@material-ui/core";
import './Login.css';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    //login function with.. authentication from google

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };

    return(

        <div className="login">
            <div className="login__container">
                <img
                    src="https://en.wikipedia.org/wiki/WhatsApp#/media/File:WhatsApp.svg"
                    alt=""
                />
                <div className="login__text">
                    <h1>Sign in Whatsapp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>

            </div>
        </div>
    );
}

export default Login;