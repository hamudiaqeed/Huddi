import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Login.css';

function Login(props) {

    const {signInWithGoogle, history} = props;

    function handleGoogleLogin() {

        const googleLoginRespone = signInWithGoogle();

        googleLoginRespone.then(() => {

            history.push('/');
        });
    }

    return(
        <div className="login-page">
            <Link to='/'>
                <img src={logo} alt="logo" className="mb-5"/>
            </Link>

            <h1 className="h2">Login</h1>
            <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

            <button
                className="btn btn-outline-dark d-flex align-items-center"
                onClick={handleGoogleLogin}
            >
                <span className="text-nowrap">Loghează-te cu Google</span>
            </button>
        </div>
    );
}

export default Login;