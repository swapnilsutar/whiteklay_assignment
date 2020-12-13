import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import "./Org.css";
import Orgdata from "./Orgdata";

function Organization(){

    const [ Name , setName ] = useState();
    const [ Size , setSize ] = useState(1);

    const [ mynewlist , setmynewlist ] = useState([]);

    const title = (t) =>{
        t.preventDefault();
        console.log(t.target.value);
        setName(t.target.value);
    }

    const size = (s) =>{
        s.preventDefault();
        console.log(s.target.value);
        setSize(s.target.value);
    }

    const store = (e) =>{
        e.preventDefault();
        setmynewlist((allitem)=>{
            return [...allitem,[Name+" ",'('+Size+' members)']];
    });
    setName("");
    setSize("");
    }

    const del = (id1) =>{
        setmynewlist((allitem)=>{
            return allitem.filter((vala,index)=>{
                return index !== id1;
            })
        })
    }

    return(
        <>
        <br/><br/><br/>

            <h1 className="text-center"> Oraganization Unit </h1>

            <div className="row">

            <div className="col-lg-5">
                <div className='bord'>
                <form onSubmit={store} autoComplete="off">

                    <TextField type="text" value={Name} className="input_f" id="Name" label="Organization Title" variant="outlined" onChange={title} required />&nbsp;<br/>

                    <TextField type="text" value={Size} className="input_f" id="size" onChange={size} label="Size of Organization Unit" variant="outlined" />&nbsp;
                    <br/>

                    <TextField className="input_f" rows={4} multiline id="Description" label="Description" variant="outlined" />&nbsp;

                    <br/>
                    
                    <Button className="input_f" type="submit" size="large" variant="contained" style={{backgroundColor:'rgb(0 192 230)',height:'54px'}}>
                    Submit
                    </Button>
                    
                </form>
                </div>
            </div>

            <div className="col-lg-6 my_list">
            <br/>
                            <br/>
                <ol>

                    {
                        mynewlist.map((val,index )=>{
                            return <Orgdata
                            text= {val}
                            id = {index}
                            selectme= {del}/>;
                        })
                    }
                </ol>
            </div>

            </div>

        </>
    );
}

export default Organization;