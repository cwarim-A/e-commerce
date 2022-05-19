import React from 'react'
import Ndata from './Ndata'

const Cart = () => {
  return (
    <>
        <div className="content grid product">
            {Ndata.map((val,index)=>{
                return(
                    <div className="box product" key={index} style={{margin:"50"}}>
                            <div className="img">
                                <img src={val.cover}/>
                            </div>
                            <h4>{val.name}</h4>
                            <span>${val.price}.00</span>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Cart
