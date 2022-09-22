import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditProduct() {
  const [open, setOpen] = useState(true);
  const [category, setCategory] = useState("");
  const [supplier, setSupplier] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, Setprice] = useState("");
  const [description, Setdescription] = useState("");
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState("");
  const[result,setResult]=useState("")
  const handleOpen = () => setOpen(true);
  const history=useHistory()

  const back=()=>{
    history.push('/Product')
  }
  

  const location = useLocation();
  console.log(location.state,"LOCCCCC"); 
  const id = location.state;

  React.useEffect(()=>{
  axios.post("http://localhost:9000/showProduct", { id: id }).then((res) => {
    console.log(res.data.result, "DATA TO EDIT");
    setCategory(res.data.result[0].category_id)
    setSupplier(res.data.result[0].supplier_id)
    setName(res.data.result[0].name)
    setImage(res.data.result[0].image_id)
    Setprice(res.data.result[0].price)
    Setdescription(res.data.result[0].description)
    setStock(res.data.result[0].stock)
    setStatus(res.data.result[0].status)
  });
},[])

 const editData=()=>{
  axios.put("http://localhost:9000/editData",
  {
    id:id,
    category: category,
    supplier: supplier,
    name: name,
    image: image,
    price: price,
    description: description,
    stock: stock,
    status: status,
  })
  .then((res) => {
    if(res.data.success){
      toast.success("EDITED SUCCESSFULLY!",{position:toast.POSITION.BOTTOM_CENTER})
    }
    else{
      toast.error("FAILED!",{position:toast.POSITION.BOTTOM_CENTER})
    };
  });
}

  return (
    <div>
        <Box sx={style}>
          <br></br>
          <TextField
            id="filled-basic"
            label="Category"
            variant="filled"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <TextField
            id="filled-basic"
            label="Supplier"
            variant="filled"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
          />
          <br />
          <TextField
            id="filled-basic"
            label="Product Name"
            variant="filled"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <TextField
            id="filled-basic"
            label="Image Link"
            variant="filled"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <TextField
            id="filled-basic"
            label="Price"
            variant="filled"
            value={price}
            onChange={(e) => Setprice(e.target.value)}
          />
          <br />
          <TextField
            id="filled-basic"
            label="Description"
            variant="filled"
            value={description}
            onChange={(e) => Setdescription(e.target.value)}
          />
          <br />
          <TextField
            id="filled-basic"
            label="Stock"
            value={stock}
            variant="filled"
            onChange={(e) => setStock(e.target.value)}
          />
          <br />
          <TextField
            id="filled-basic"
            label="Status"
            value={status}
            variant="filled"
            onChange={(e) => setStatus(e.target.value)}
          />
          <br />
          <br/>
          <Button variant="contained" onClick={editData}>EDIT</Button> &nbsp;
          <Button variant="contained" color="success" onClick={back}>BACK</Button>
          <ToastContainer></ToastContainer>
        </Box>
    </div>
  );
}
