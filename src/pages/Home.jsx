import React from "react";
import {Link} from 'react-router-dom';
import Layout from "../components/Layout";

function Home(props) {
    return(
        <div>
            <Layout>
                <p>Home</p>
                <Link to='/login'>Login</Link>
            </Layout>
        </div>
    );
}

export default Home;