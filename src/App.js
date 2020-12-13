import React from "react";
import "./Nav.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import EmpList from "./EmpList";
import Contact from "./Contact";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Organization from "./Organization";
import Heading from "./Heading";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import About from "./About";

function App(){
    return(
        <>
        <Navbar/>
        
        <div className="window">

            <Heading/><br/><br/>

            <Switch>
                        <Route path="/Home" component={Home}/>
                        <Route exact path="/" component={Dashboard}/>
                        <Route exact path="/Organization" component={Organization}/>
                        <Route path="/EmpList" component={EmpList}/>
                        <Route path="/Contact" component={Contact}/>
                        <Route path="/About" component={About}/>
            </Switch>
            <Footer/>
        </div>


        </>
    );
}

export default App;
