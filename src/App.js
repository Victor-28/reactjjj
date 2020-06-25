import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./Navbar"
import Home from "./Home"
import AboutUs from "./AboutUs"
import Services from "./Services"
import Sales from "./Sales"
import Stock from "./Stock"
import Contact from "./Contact"
import Footer from "./Footer"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
    return (
        <div>
            <div className="App">
                <div className="App-header">
                    <Nav/>

                    <Router>
                        <Switch>
                        <Route path="/Home" Componenent={Home}/>
                        <Route path="/AboutUs" Component={AboutUs}/>
                        <Route path="/Services" Component={Services}/>
                        <Route path="/Sales" Component={Sales}/>
                        <Route path="/Stock" Component={Stock}/>
                        <Route path="/Contact" Component={Contact}/>
                    </Switch>
                </Router>

                </div>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKzZSFhuxhjEpO37xYnNfrTNHCGBfhd11HC3xxHkiTuOL_ujgK&usqp=CAU'}
                    className="App-logo" alt="logo"/>


            </div>

            <Footer/>
        </div>

            );
}

export default App;
