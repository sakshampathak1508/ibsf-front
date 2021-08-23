import React from 'react';
import { useHistory } from 'react-router';
import "./Card.css"

function Card(props) {
    const history = useHistory();
    props = props.data
    console.log(props)
    return (
        <div onClick={()=>history.push(`/news/${props.id}/${props.slug}`)} className="card_body" style={{height:`${props.size}` ,  overflow:"hidden"}}>

            <div className = "card_image" style={{backgroundImage:`url(http://billiardsports.in/${props.image})`, backgroundSize:"cover" , backgroundRepeat:"no-repeat"}}>
            {/* <img src={props.image} style={{width:"auto", backgroundSize:"cover"}}/>              */}
            </div>
    
            <div className="card_container">

            <h4>{props.title}</h4>
            {/* <hr></hr> */}
            <div style={{height:"100%"  , paddingBottom:"1rem", overflow:"hidden", textOverflow:"ellipsis"}}  dangerouslySetInnerHTML={{ __html: props.content }}>
            {/* <p>wlmdpmed wkf</p> */}
                {/* <span>ddfpjfopj foc d c;d ckd pc kwpwpfm pwpfn wfnwwnfdemwmf wo fpkwn fow</span> */}
            </div>
            </div>
        </div>
    );
}

export default Card;