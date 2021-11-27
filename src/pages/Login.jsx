import React from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Login(props) {
    const {signInWithGoogle, history} = props;

    console.log(props)

    function handleButtonClick() {
        signInWithGoogle();
        history.push('/');

    }

    return(
        // <div>
        //     <p>Login</p>
        //     <Link to='/'>Home</Link>
        //     <button onClick={handleButtonClick}>Google SignIn</button>

        // </div>

        <div className="login-page">
            <Link to='/'>
                <img src={logo} alt="logo" className="mb-5 header-img"/>
            </Link>

            <h1 className="h2">Login</h1>

            <button
                className="btn btn-outline-dark d-flex align-items-center"
                onClick={handleButtonClick}
            >
                <span className="text-nowrap">Loghează-te cu Google</span>
            </button>
        </div>
    );
}

export default Login;