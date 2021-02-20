import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../navbar';

const Layout = props => {
    return (
        <>
            <Navbar />
           <main>
                {props.children}
            </main> 
        </>
    );
};

export default Layout;