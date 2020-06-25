import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from "../src/pages/search"
import About from "../src/pages/popular"
import Services from "./pages/homePage/Homepage"
import Sales from "./pages/PageNotFound"
import Stock from "./pages/movieProfile/movieProfile";
import Contact from "./pages"

const Routes = () =>{
    return(
        <Switch>
            /*<Route exact path="/" component={Homepage}/>*/
            <Route exact path="/home" component={Homepage}/>
            <Route  path="/about/:currentMovie"  component={MovieProfile}/>
            <Route exact path="/Movie-browse" component={Homepage}/>
            <Route exact path="/popular" component={Popular}/>
            <Route exact path="/top5"/>
            <Route path="/search/:name" component={Search}/>
            <Route path="/movieProfile/:currentMovie" component={MovieProfile}/>
            <Route component={PageNotFound}/>
        </Switch>
    )
};