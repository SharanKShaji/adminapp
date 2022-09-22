import axios from "axios"
import { fetchProductFailure, fetchProductSuccess } from "../components/Redux/Product/productAction"


export const fetchProduct = () => {
    return (dispatch) => {
      axios.post("http://localhost:9000/productData")
        .then((res) => {
          console.log(res.data.result,"CHECKING")
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