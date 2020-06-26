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




                    <Router>
                        <Nav/>
                        <Switch>
                        <Route path="/Home">
                            <Home/>
                        </Route>

                        <Route path="/AboutUs">
                        <AboutUs/>
                        </Route>

                        <Route path="/Service">
                            <Services/>
                        </Route>

                        <Route path="/Sales">
                            <Sales/>
                        </Route>

                        <Route path="/Stock">
                            <Stock/>
                        </Route>

                        <Route path="/Contact">
                            <Contact/>
                        </Route>
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
