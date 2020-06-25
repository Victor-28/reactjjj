import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';


function Nav() {
    return (
        <div>
            <h1>Victor & Son</h1>
            <p> A trial will convince you....</p>
            <nav>

                <a className="topnav"></a>
                <a className="nav-link"></a>

                    <Link to="/Home">
                    <a className="active" href="#home">Home</a>
                    </Link>

                    <Link to="/AboutUs">
                    <a >AboutUs</a>
                    </Link>

                    <Link to="/Service">
                    <a href="services">Services</a>
                    </Link>

                    <Link to="/Sales">
                    <a href="sales">Sales</a>
                    </Link>

                    <Link to="/Stock">
                    <a href="stock">Stock</a>
                    </Link>

                    <Link to="/Contact">
                    <a href="contact">Contact</a>
                    </Link>
            </nav>

        </div>
)

}
export default Nav;