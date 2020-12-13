import React from "react";
import "./EmpList.css";
import Form from "./Form";
import List from "./List";



function EmpList(){
    return(
        <>
            <div className="boad">
                <br/>
                <div className="formme">
                    <h2>New Employee Registration</h2>
                <br/>
                    <Form/>
                </div>

                <br/><br/>
                <br/><br/>   

                <h1 className="text-center">
                    List of All Employees    
                </h1>
                <br/>
                
                <List/>

            </div>
        </>
    );
}

export default EmpList;