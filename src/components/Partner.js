import React from 'react'
import img1 from "../partners-img/img1.png"
import img2 from "../partners-img/img2.png"
import img3 from "../partners-img/img3.png"
import img4 from "../partners-img/img4.png"
import img5 from "../partners-img/img5.png"
import img6 from "../partners-img/img6.png"



function Partner() {
  return (
    <div className='Partner-container' style={{padding:"100px 100px 50px 150px"}}>
        <div className="images" style={{display:"felx", justifyContent:"space-between;"}}>
            <img src={img1} alt="" style={{width:"12%",padding:"20px"}} />
            <img src={img2} alt="" style={{width:"12%",padding:"20px"}}/>
            <img src={img3} alt="" style={{width:"12%",padding:"20px"}}/>
            <img src={img4} alt="" style={{width:"12%",padding:"20px"}}/>
            <img src={img5} alt="" style={{width:"12%",padding:"20px"}}/>
            <img src={img6} alt="" style={{width:"12%",padding:"15px"}}/>

        </div>

    </div>
  )
}

export default Partner