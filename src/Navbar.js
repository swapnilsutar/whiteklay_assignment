import React from "react";
import {NavLink} from "react-router-dom";

import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListIcon from '@material-ui/icons/List';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import InfoIcon from '@material-ui/icons/Info';
import BusinessIcon from '@material-ui/icons/Business';


function Navbar(){
    return(
        <>
            <div className="sidebar">
            <h3 className="brand"> 
                <img src={process.env.PUBLIC_URL + '/white.png'}  alt="logo" height="40px"/>
                Whiteklay
             </h3>

         
            <NavLink exact activeClassName="active" to="/Home" >
                <HomeIcon/>
                <span className="ico_text">Home</span>
            </NavLink>

            <NavLink exact activeClassName="active" to="/D" >
                <DashboardIcon/>
                <span className="ico_text">Dashboard</span>
            </NavLink>

            <NavLink exact activeClassName="active" to="/Organization" >
                <BusinessIcon/>
                <span className="ico_text">Organization</span>
            </NavLink>
            
            <NavLink exact activeClassName="active" to="/EmpList">
                <ListIcon/> 
                <span className="ico_text">Employee List</span>
            </NavLink>
            
            <NavLink exact activeClassName="active" to="/Contact">
            <PermContactCalendarIcon/>
                <span className="ico_text">Contact</span>
            </NavLink>
            
            <NavLink exact activeClassName="active" to="/About" >

            <InfoIcon/>
                <span className="ico_text">About</span>
            </NavLink>

        </div>
            

        </>
    );
}

export default Navbar;