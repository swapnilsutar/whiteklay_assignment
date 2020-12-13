
import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';


function Form(){

    const [ MyInputname , setInputitem ] = useState("");
    const [ MynewName , setnewname ] = useState();



    const f_name = (e) =>{
        e.preventDefault();
        console.log(e.target.value);
        setInputitem(e.target.value);
    }

    const additem = (e1) =>{
        e1.preventDefault();
        alert(MyInputname+"'s Registration Completed");
        // setnewname(MyInputname);
        setInputitem("");
    }

    return(
        <>
                <form onSubmit={additem} noValidate autoComplete="off">
                <TextField id="name" onChange={f_name}  value={MynewName} label="First Name" variant="outlined" />&nbsp; 
                <TextField id="lname" label="Last Name" variant="outlined" />&nbsp;<br/><br/>
                <TextField id="role" label="Role" variant="outlined" />&nbsp;
                <TextField id="phone" label="Phone" variant="outlined" />&nbsp;
                <br/><br/>
                <TextField id="email"  type="email" label="Email" variant="outlined" />&nbsp;
                <TextField id="dept" label="Department" variant="outlined" />&nbsp;
                <br/>
                <br/>
                <FormControl component="fieldset">   
                    <RadioGroup aria-label="gender" name="gender1">
                        <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                        <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                    </RadioGroup>
                </FormControl>
                &nbsp;&nbsp;&nbsp;  
                <TextField  id="date" label="Birthday" type="date" defaultValue="2017-05-24"
                InputLabelProps={{
                shrink: true,
                }}
                />
                &nbsp;&nbsp;&nbsp;
                <TextField id="date1" label="Joining Date" type="date" defaultValue="2017-05-24" InputLabelProps={{
                shrink: true,
                }}
                />
                <br/>
                <br/>
                
                <Button type="submit" size="large" variant="contained" style={{backgroundColor:'#00e676',height:'54px'}}>
                    Submit
                </Button>

                </form>
        </>
        );
}

export default Form;