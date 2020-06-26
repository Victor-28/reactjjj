import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';


function Nav() {
    return (
        <div>
            <h1>Victor & Son</h1>
            <p> Accredited Japanese SUV's Dealer....</p>
            <nav>

                <a className="topnav"></a>
                <a className="nav-link"></a>


                <Link to="/Home">
                    <button type="button">Home</button>
                </Link>


                <Link to="/AboutUs">
                    <button type="button">AboutUs!</button>
                </Link>


                <Link to="/Service">
                    <button type="button">Service</button>
                </Link>

                <Link to="/Sales">
                    <button type="button">Sales</button>
                </Link>

                <Link to="/Stock">
                    <button type="button">Stock</button>
                </Link>

                <Link to="/Contact">
                    <button type="button">Contact</button>
                </Link>

            </nav>


        </div>
    )

}

export default Nav;