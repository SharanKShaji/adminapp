import axios from "axios"
import { fetchProductFailure, fetchProductSuccess } from "../components/Redux/Product/productAction"


export const fetchProduct = () => {
    return (dispatch) => {
      axios.get("http://localhost:9000/productData")
        .then((res) => {
          console.log(res,"CHECKING_DATA")
          if(res.data.success){
            dispatch(fetchProductSuccess(res.data.result))
          }
          else{
            dispatch(fetchProductFailure(res.data.result))
            console.log(res.data.message);
          }
        })
    }
  }

export const fetchRemove =  (id) => {
  return async () => {
    await axios
      .post("http://localhost:9000/Deleteproduct", { id: id })  
      .then((res)=>{
        console.log(res,"DELETED RESPONSE");
      })
  };
}

