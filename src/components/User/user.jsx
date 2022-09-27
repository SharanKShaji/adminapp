import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios"
import Visibility from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

export default function User() {
  const [userData,setUserData]=React.useState("")

  React.useEffect(()=>{
  axios.get("http://localhost:9000/userData")
.then((res)=>{
  console.log(res.data.result,"ADMIN CHECK");
  setUserData(res.data.result)
})
},[])

  return (
    <TableContainer component={Paper}>
      <h1>User Table</h1>
      <Table sx={{ minWidth: 650 }} style={{ width: 500,margin:'auto'}}aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">USER ID</TableCell>
            <TableCell align="center">USERNAME</TableCell>
            <TableCell align="center">CART ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData && userData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >
                {row.id}
              </TableCell>
              <TableCell align="center">{row.username}</TableCell>
              <TableCell align="center">{row.cart_id}</TableCell>
              <TableCell align="center"><Link to={`/Details/${row.id}`}><Visibility/></Link></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}
