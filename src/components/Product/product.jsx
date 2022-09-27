import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Button, Fab, IconButton } from "@mui/material";
import { Link, useHistory } from 'react-router-dom';
import "./product.css";
import EditProduct from "../../EditProduct/editProduct";
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {fetchProduct, fetchRemove} from "../../api/productapi"
import { useDispatch, useSelector } from "react-redux";

function Product() {
  const [editData,setEditdata]=React.useState("");
  const history=useHistory()
  const dispatch=useDispatch()
  React.useEffect(()=>{
    dispatch(fetchProduct())
  },[])
  const result=(useSelector((state)=>state.productReducer.product))
  console.log(result,"9999");

  const deleteProduct=(id)=>{
    dispatch(fetchRemove(id))
    .then(()=>{
      dispatch(fetchProduct())
    })
  }

  const editProduct=(id)=>{
    history.push({
      pathname: '/Editproduct',
      state:id,
    });
  }

  return (
    <TableContainer component={Paper}>
      <h1>Product Table</h1>
      <ToastContainer></ToastContainer>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
      <Link to="/Addproduct"> <AddIcon/></Link> 
      </Fab>
      </Box>
      <Table
        sx={{ minWidth: 650 }}
        style={{ width: 1300, margin: "auto",marginLeft:85}}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="left">Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Supplier</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Desc</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Created</TableCell>
            <TableCell align="right">Modified</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result &&
            result.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.id}</TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.category_id}</TableCell>
                <TableCell align="right">{row.supplier_id}</TableCell>
                <TableCell align="right">
                  {" "}
                  <img src={row.image_id} alt="" className="imgClass"></img>
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.stock}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.created_at}</TableCell>
                <TableCell align="right">{row.modified_at}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={()=>{deleteProduct(row.id)}}
                    startIcon={<DeleteIcon />}
                  >
                  </Button>
                  <Button
                    
                    onClick={()=>{editProduct(row.id)}}
                    startIcon={<EditIcon/>}
                    color="error"
                  >
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        {editData && <EditProduct editData = {editData} setEditdata = {setEditdata} /> }
      </Table>
    </TableContainer>
  );
}

export default Product;
