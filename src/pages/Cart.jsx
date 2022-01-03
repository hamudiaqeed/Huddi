import React from "react";
import Layout from "../components/Layout";
import { connect } from 'react-redux';
import './Cart.css';
import { Link } from "react-router-dom";
import { ReactComponent as Close} from '../assets/icons/close.svg';

function Cart(props) {
    const {cartProducts} = props;
    console.log(props)

    return(
        <Layout>
            <div className="cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
                {
                    cartProducts.length
                    ? <div className="w-100">
                        <div className="d-flex justify-content-between text-center h4 text-bold">
                            <p className="w-25">Produs</p>
                            <p className="w-25">Pret</p>
                            <p className="w-25">Cantitate</p>
                            <p className="w-25">Total</p>
                        </div>
                        {
                            cartProducts.map(product => {
                                return <div className="d-flex justify-content-between align-items-center text-center" key={product.id}>
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                        <img src={product.image} alt="Produs"/>
                                        <p>{ product.name }</p>
                                    </div>
                                    <p className="w-25">{ product.price } { product.currency }</p>
                                    <p className="w-25">{ product.quantity }</p>
                                    <div className="w-25 d-flex justify-content-center">
                                        <p className="mr-2">{ product.price * product.quantity } { product.currency }</p>
                                        <Close />
                                    </div>
                                </div>
                                
                            })
                        }
                    </div>
                    : <div className="d-flex flex-column align-items-center">
                        <p className="h3">Nu ai produse in cart!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        cartProducts: state.cart.products
    };
}

export default connect(mapStateToProps)(Cart);