import React from 'react'

const Annu = () => {
    const mystyle ={
        width:"30%",
        height: "340px",
    }
    const mystyle1 = {
        width:"68%",
        height: "340px",
    }

  return (
    <>
     <section className="annouc background">
         <div className="container d_flex">
             <div className="img" style={mystyle}>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLahwEwldIQNnn_Xf_INY4VH5tD2z3Eh67g&usqp=CAU" width='100%' height="100%"/>
             </div>
             <div className="img" style={mystyle1}>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_yUMv5TQhIapMswyMO33pkCMk4X_yxKt3Q&usqp=CAU" width='100%' height="100%"/>
             </div>
         </div>
    </section> 
    </>
  )
}

export default Annu
