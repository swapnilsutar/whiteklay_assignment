import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';



const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  
function createData(name, calories, phone, fat, carbs, protein) {
    return { name, calories, phone, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 'Project Manager', 9696858545 ,"Male", 24, '4 / 5 / 2007'),
    createData('Ice cream sandwich', 'Senior Developer',9696858545 , "Male", 37, '3 / 11 / 2013'),
    createData('Eclair', "Software Developer",9696858545 , "Female", 25, '14 / 2 / 2018'),
    createData('Cupcake', "Database Administrator", 9696858545 ,"Male", 25, '9 / 7 / 2018'),
    createData('Gingerbread', "Front-End Devloper", 9696858545 , "Male", 22, '4 / 10 / 2020'),
  ];
  
function List(){
    return(
        <>
            <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Full Name</StyledTableCell>
                            <StyledTableCell align="left">Role</StyledTableCell>
                            <StyledTableCell align="left">Phone</StyledTableCell>
                            <StyledTableCell align="left">Gender</StyledTableCell>
                            <StyledTableCell align="right">Age</StyledTableCell>
                            <StyledTableCell align="right">Joining Date</StyledTableCell>
                            <StyledTableCell align="right">Delete</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.calories}</StyledTableCell>
                            <StyledTableCell align="left">{row.phone}</StyledTableCell>
                            <StyledTableCell align="left">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            <StyledTableCell align="right">
                              <a href="">  <DeleteIcon style={{color:'red'}} /></a>
                            </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
            </TableContainer>
        <br/>
        <br/>
        </>
    );
}

export default List;