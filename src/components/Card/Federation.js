import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Federation.css";

function Federation(props) {
    const history =useHistory()
    return (
        <div onClick={()=>history.push(`/member_countries/${props.id}`)} className="federation" style={{backgroundImage:`url(${props.image}` ,  backgroundRepeat:"no-repeat" , backgroundSize:"contain" }}>

            <div className="federation_overlap_div">

            
            <div className="federation_overlap_text">
                <h3>{props.title}</h3>
            </div>

            </div>

            
        </div>
    );
}

export default Federation;