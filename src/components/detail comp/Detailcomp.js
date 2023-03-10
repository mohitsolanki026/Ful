import React from 'react';
import './Detailcomp.css'; // import your CSS file
import "./Detailcomp.css"
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';

function Detailcomp(props) {
    const { icon, title, heading, paragraph, keyPoints } = props;
  
    return (
      <div className="icon-with-content">
        <div className="icon-with-content-header">
          {icon}
          <h2 style={{color:"#4f46e5",fontSize:"24px"}}>{title}</h2>
        </div>
   
          <h3 style={{color:"#4b5563",fontSize:"26.4px",lineHeight:"24px"}}>{heading}</h3>
          <p style={{color:"#4b5563",fontSize:"18px",lineHeight:"26px"}}>{paragraph}</p>
          <div className='key-points'>
            <p style={{fontSize:"14px"}}>Key Highlights:</p>
          <ul>
            {keyPoints.map((point, index) => (
              <li style={{color:"#6b7280",fontSize:"16px",lineHeight:"20px"}} key={index}>
               <DoneAllOutlinedIcon style={{color:"green"}} /> {point}
              </li>
            ))}
          </ul>
          </div>
      </div>
    );
}

export default Detailcomp;
