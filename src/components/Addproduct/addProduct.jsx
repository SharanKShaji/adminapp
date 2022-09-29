import { Box, Button, Icon, Input, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProduct() {
  const [category, setCategory] = useState("");
  const [supplier, setSupplier] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, Setprice] = useState("");
  const [description, Setdescription] = useState("");
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState("");
  const[file,setFile]=useState("");

  const addProduct = () => {
    // axios
    //   .post("http://localhost:9000/Addproduct", {
    //     category: category,
    //     supplier: supplier,
    //     name: name,
    //     image: image,
    //     price: price,
    //     description: description,
    //     stock: stock,
    //     status: status,
    //   })
    //   .then((res) => {
    //     console.log(res.data.success);
    //     if(res.data.success==true){
    //       toast.success("ADDED SUCCESSFULLY!",{position:toast.POSITION.BOTTOM_CENTER})
    //     }
    //     else{
    //       toast.error("FAILED!",{position:toast.POSITION.BOTTOM_CENTER})
    //     }
    //   });
    const formData = new FormData();
        formData.append('category',category);
        formData.append('supplier',supplier);
        formData.append('name',name);
        formData.append('file',file);
        formData.append('price',price);
        formData.append('description',description);
        formData.append('stock',stock);
        formData.append('status',status);

        axios.post("http://localhost:9000/Addproduct",
            formData,
            {headers:{
                'content-type':'multipart/form-data'
            }}
        ).then((res) => {
              console.log(res.data.success);
              if(res.data.success==true){
                toast.success("ADDED SUCCESSFULLY!",{position:toast.POSITION.BOTTOM_CENTER})
              }
              else{
                toast.error("FAILED!",{position:toast.POSITION.BOTTOM_CENTER})
              }
  });
  return (
    <div>
    <h1>ADD PRODUCT</h1>
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-basic"
        label="Category"
        variant="filled"
        onChange={(e) => setCategory(e.target.value)}
      />
      <br />
      <TextField
        id="filled-basic"
        label="Supplier"
        variant="filled"
        onChange={(e) => setSupplier(e.target.value)}
      />
      <br />
      <TextField
        id="filled-basic"
        label="Product Name"
        variant="filled"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      {/* <TextField
        id="filled-basic"
        label="Image Link"
        variant="filled"
        onChange={(e) => setImage(e.target.value)}
      /> */}
      <Input
      type="file"
      name="image"
      onChange={(e)=>setFile(e.target.files[0])}>
      </Input>
      <br />
      <TextField
        id="filled-basic"
        label="Price"
        variant="filled"
        onChange={(e) => Setprice(e.target.value)}
      />
      <br />
      <TextField
        id="filled-basic"
        label="Description"
        variant="filled"
        onChange={(e) => Setdescription(e.target.value)}
      />
      <br />
      <TextField
        id="filled-basic"
        label="Stock"
        variant="filled"
        onChange={(e) => setStock(e.target.value)}
      />
      <br />
      <TextField
        id="filled-basic"
        label="Status"
        variant="filled"
        onChange={(e) => setStatus(e.target.value)}
      />
      <br />
      <Button variant="contained" onClick={addProduct}>
        ADD PRODUCT
      </Button>
      <ToastContainer></ToastContainer>
    </Box>
    </div>
  );
  
}

export default AddProduct;
