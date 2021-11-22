import React from "react";
import {Link} from 'react-router-dom';
import Layout from "../components/Layout";

function Login() {
    return(
        <div>
            <Layout>
                <p>Login</p>
                <Link to='/'>Home</Link>
            </Layout>
        </div>
    );
}

export default Login;