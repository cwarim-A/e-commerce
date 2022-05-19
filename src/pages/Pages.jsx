import React from 'react'
import Annu from '../Components/annoucement/Annu'
import Discount from '../Components/discounts/Discount'
import FlashDeals from '../Components/flashDeals/FlashDeals'
import Home from '../Components/MainPage/Home'
import NewArrival from '../Components/newarrivals/NewArrival'
import Shop from '../Components/shop/Shop'
import TopCate from '../Components/top/TopCate'
import Wrapper from '../Components/wrapper/Wrapper'

const Pages = ({productItems,cartItem,addToCart,shopItems}) => {
  return (
    <>
      <Home cartItem={cartItem}/>
      <FlashDeals productItems={productItems} addToCart={addToCart}/>
      <TopCate/>
      <NewArrival/>
      <Discount/>
      <Shop shopItems={shopItems} addToCart={addToCart}/>
      <Annu/>
      <Wrapper/>
    </>
  )
}

export default Pages
