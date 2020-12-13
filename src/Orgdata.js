import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import React from 'react';
import "./App.css";


function Orgdata(props){
        return(
                <>
                <h4 class="main">
                        <div className="fun d-flex">
                        <li style={{}}>
                                <p>
                                {props.text}&nbsp;
                                </p>
                        </li>                
                                <span onClick={()=>{props.selectme(props.id)}}>
                                <DeleteForeverRoundedIcon style={{color:'red',fontSize:'35',float:'right',}}/>        
                                </span>
        

                        </div>
                </h4>                
                </>
        );
}

export default Orgdata;