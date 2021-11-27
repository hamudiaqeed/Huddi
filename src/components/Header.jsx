import React from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Header.css';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';

function Header(props) {
    const {user, signOut} = props;

    return(
        <header className="border-bottom mb-3 ">
            <div className="container-fluid container-min-max-width
                            d-flex justify-content-around align-items-center">
                <Link to="/" className="my-3">
                    <img src={logo} className='header-img' alt=""/>
                </Link>
                    <div className="d-flex justify-content-end">
                        { user
                            ? <div>
                                <p>Salut, {user.displayName}!</p>
                                <button className="logout h5" onClick={signOut}>Delogare</button>
                            </div>
                            : <Link to="/login" className="h5">Logare</Link>
                        }
                        {/* { user
                            ? <p className="logout h5" onClick={signOut}>Delogare</p>
                            : <Link to="/login" className="h5">Logare</Link>
                        } */}
                        <ShoppingCart className="ml-2"/>
                    </div>
            </div>
        </header>
    );
}

export default Header;