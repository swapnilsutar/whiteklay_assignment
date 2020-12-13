import React from "react";
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import "./Dashboard.css";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Charts from "./Charts";

function Dashboard(){
    return(
        <>
            <div className="dashboard">

            <h1>Dashboard</h1>

            <div className="board">


            <div className="card" >

                <span className="dash_icon">
                    <EditTwoToneIcon style={{ margin:'10px',fontSize:'55px',color:'orange',}}/>
                </span>

                <div className="card-body">
                    <p className="card-text"> New Projects </p>
                    <p className="card-text-head">70</p>
                </div>

            </div>

            <div className="card" >

                <span className="dash_icon">
                    <PeopleAltIcon style={{ margin:'10px',fontSize:'55px',color:'orange',}}/>
                </span>

                <div className="card-body">
                    <p className="card-text"> Total Employee </p>
                    <p className="card-text-head">200</p>
                </div>

            </div>

            <div className="card" >

                <span className="dash_icon">
                    <PeopleOutlineIcon style={{ margin:'10px',fontSize:'55px',color:'orange',}}/>
                </span>

                <div className="card-body">
                    <p className="card-text"> New Clients </p>
                    <p className="card-text-head"> 100 </p>
                </div>

            </div>

            <div className="card" >

                <span className="dash_icon">
                    <AssignmentTurnedInIcon style={{ margin:'10px',fontSize:'55px',color:'orange',}}/>
                </span>

                <div className="card-body">
                    <p className="card-text"> Project Completed </p>
                    <p className="card-text-head"> 250+ </p>
                </div>

            </div>

            </div>

            <br/>
            <Charts/>


            </div>
        </>
    );
}

export default Dashboard;