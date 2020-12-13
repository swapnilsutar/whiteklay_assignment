import React from "react";
import "./Heading.css";


function Heading(){
    return(
        <>
            <div className="bar">

            <input type="text" placeholder="Search..."/>


            <div className="btn-group">
                <button type="button" className="btn  btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Profile
                </button>

                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">My Profile</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Logout</a>
                   
                </div>
            </div>

            </div>
        </>
    );
}

export default Heading;