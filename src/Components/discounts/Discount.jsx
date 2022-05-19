import React from 'react'
import Dcard from './Dcard'

const Discount = () => {
  return (
    <>
        <section className="disocunt background newarrivals">
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUg2mjtRZGAtDYE-b7W-npZd552gljXd8-g&usqp=CAU" className="for"/>
                            <h2>Big Discounts</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View all</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <Dcard/>
                </div>
        </section>
    </>
  )
}

export default Discount
