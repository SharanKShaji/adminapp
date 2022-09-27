import axios from 'axios';
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Details() {
    const id=useParams()
    console.log(id.userId,"PARA");
    const [details,setDetails]=useState("")
    React.useEffect(()=>{
        axios.post("http://localhost:9000/userDetails",
        { id: id.userId })
      .then((res)=>{
        console.log(res.data.result,"USER DETAILS");
        setDetails(res.data.result)
      })
      },[])
  return (
    <TableContainer component={Paper}>
      <Link to="/User"><VisibilityOffIcon></VisibilityOffIcon></Link> 
      <Table sx={{ minWidth: 700 }}
        style={{ width: 1000, margin: "auto",marginLeft:205}}
        aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>USER ID</StyledTableCell>
            <StyledTableCell align="center">USERNAME</StyledTableCell>
            <StyledTableCell align="center">FIRST NAME</StyledTableCell>
            <StyledTableCell align="center">LAST NAME</StyledTableCell>
            <StyledTableCell align="center">PHONE</StyledTableCell>
            <StyledTableCell align="center">EMAIL</StyledTableCell>
            <StyledTableCell align="center">CART ID</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {details && details.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.username}</StyledTableCell>
              <StyledTableCell align="center">{row.first_name}</StyledTableCell>
              <StyledTableCell align="center">{row.last_name}</StyledTableCell>
              <StyledTableCell align="center">{row.phone}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.cart_id}</StyledTableCell>
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
  );
}