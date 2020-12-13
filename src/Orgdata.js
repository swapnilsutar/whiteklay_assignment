import React from 'react';
import "./App.css";


function Orgdata(props){
        return(
                <>
                <h4 class="main">
                        <div className="fun ">
                        <li>
                                <p>
                                {props.text}&nbsp;
                                </p>
        
                        </li>                

                        </div>
                </h4>                
                </>
        );
}

export default Orgdata;