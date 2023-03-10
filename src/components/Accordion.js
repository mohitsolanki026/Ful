import React from 'react'
import SimpleAccordion from './SimpleAccordion'
import "./accordion.css"
import kitty from "../svgtopng/kitty-faq.png"

function Accordion() {
  return (
    <div className='acc-container'>
       
        <div className="compo">
          <h1 style={{textAlign:"center",padding:"20px",marginBottom:"10px"}}>Frequently Asked Questions</h1>
        <SimpleAccordion />
        </div>
        <img className='kkty' src={kitty} alt="" />
    </div>
  )
}

export default Accordion