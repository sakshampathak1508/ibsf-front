import React from 'react';
import "./Card.css"

function Card(props) {
    return (
        <div className="card_body" style={{height:`${props.size}` ,  overflow:"hidden"}}>

            <div className = "card_image" style={{backgroundImage:`url(${props.image})`, backgroundSize:"cover" , backgroundRepeat:"no-repeat"}}>
            {/* <img src={props.image} style={{width:"auto", backgroundSize:"cover"}}/>              */}
            </div>
    
            <div className="card_container">

            <h4>{props.title}</h4>
            {/* <hr></hr> */}
            <div style={{height:"100%"  , paddingBottom:"1rem", overflow:"hidden", textOverflow:"ellipsis"}}  dangerouslySetInnerHTML={{ __html: props.description }}>
            {/* <p>wlmdpmed wkf</p> */}
                {/* <span>ddfpjfopj foc d c;d ckd pc kwpwpfm pwpfn wfnwwnfdemwmf wo fpkwn fow</span> */}
            </div>
            </div>
        </div>
    );
}

export default Card;