import './App.css';
import Header from './Common/header/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Pages from './pages/Pages';
import Data from "./Components/flashDeals/Data"
import Sdata from "./Components/shop/Sdata"
import { useState } from 'react';
import Cart from './Common/cart/Cart';
import Footer from './Components/footer/Footer';


function App() {
  //step1= Fetch Data from Database
  const {productItems} = Data
  const {shopItems} = Sdata

  const[cartItem,setCartItem] = useState([])
  const addToCart=(product)=>{
      const productExit = cartItem.find((item)=>item.id === product.id)

      if(productExit){
        setCartItem(cartItem.map((item)=>(item.id===product.id ? {...productExit,qty: productExit.qty + 1 } : item )))
      }else{
        setCartItem([...cartItem,{...product,qty: 1}])
      }
  }



  const decreaseQty = (product)=>{
    const productExit = cartItem.find((item)=>item.id === product.id)
    if(productExit.qty ===1 ){
      setCartItem(cartItem.filter((item)=>item.id!= product.id))
    }else{
      setCartItem(cartItem.map((item)=>(item.id===product.id ? {...productExit,qty: productExit.qty - 1 } : item )))
    }
  }
  return (
    < >
     
     <Router>
     <Header cartItem={cartItem}/>
       <Routes>
          <Route path="/" exact element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
          <Route path="/cart" exact element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
