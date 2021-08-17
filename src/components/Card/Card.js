import React from 'react';
import "./Card.css"

function Card(props) {
    return (
        <div className="card_body" style={{height:`${props.size}`}}>

            <div className = "card_image" style={{backgroundImage:`url(${props.image})`, backgroundSize:"cover" , backgroundRepeat:"no-repeat"}}>
            {/* <img src={props.image} style={{width:"auto", backgroundSize:"cover"}}/>              */}
            </div>
    
            <div className="card_container">

            <h4>{props.title}</h4>
            {/* <code>
                {props.description}
            </code> */}

            <div dangerouslySetInnerHTML={{ __html: props.description }} />

            
            </div>
            
        </div>
    );
}

export default Card;