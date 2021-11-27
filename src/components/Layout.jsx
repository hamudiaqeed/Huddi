import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {

    const {user, signOut} = props;

    return(
        <div>
            <Header user={user} signOut={signOut}/>
                {props.children}
            <Footer />
        </div>
    );
}

export default Layout;