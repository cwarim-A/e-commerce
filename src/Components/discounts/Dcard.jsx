import React from 'react'
import Ddata from './Ddata'
import Slider from "react-slick";

const Dcard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        margin: 20,
      };
  
  return (
    <>
    <div className="content">
    <Slider {...settings}>
          
            {Ddata.map((val,index)=>{
                return(
                    <>
                    <div className=" product " key={index}>
                        <div className="box">
                            <div className="img" width="100%">
                                <img src={val.cover} />
                            </div>
                            <h4>{val.name}</h4>
                            <span>{val.price}.00</span>
                        </div>
                    </div>
                    </> 
                )
            })}
        </Slider>
        </div>
    </>
  )
}

export default Dcard
