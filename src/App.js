import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Adminpanel from './components/Main/main';
import User from './components/User/user';
import Home from './components/Home/home';
import Product from './components/Product/product';
import AddProduct from './components/Addproduct/addProduct';
import EditProduct from './EditProduct/editProduct';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Adminpanel></Adminpanel>
      <Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route path='/User'><User></User></Route>
        <Route path='/Product'><Product/></Route>
        <Route path='/Addproduct'><AddProduct/></Route>
        <Route path='/Editproduct'><EditProduct></EditProduct></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
