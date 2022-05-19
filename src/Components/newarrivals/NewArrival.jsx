import React from 'react'
import Cart from './Cart'
import "./style.css"

const NewArrival = () => {
  return (
    <>
        <section className="newarrivals background">
            <div className="container">
            <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3MmHN4XxLyFbCBQbkX-VHvaXr2WClQ6so-w&usqp=CAU" className="for"/>
                        <h2>New Arrivals</h2>
                    </div>
                    <div className="heading-right row">
                        <span>View all</span>
                        <i className="fa fa-caret-right"></i>
                   </div>
            </div>
                <Cart/>
            </div>
        </section>
    </>
  )
}

export default NewArrival
