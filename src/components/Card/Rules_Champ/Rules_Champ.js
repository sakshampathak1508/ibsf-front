import React from 'react';
import { Profiler } from 'react';
import { useHistory } from 'react-router';
import "./Rules_Champ.css"

function Rules_Champ(props) {
    const history = useHistory();
    const path = props.path;
    props = props.data
    console.log(props)
    return (
        <div onClick={()=>history.push(`${path}/${props.id}/${props.slug}`)} className="rules_champ_card_body" style={{  overflow:"hidden"}}>

            <div className = "rules_champ_card_image" style={{backgroundImage:`url(http://billiardsports.in/${props.image})`, backgroundSize:"cover" , backgroundRepeat:"no-repeat"}}>
            {/* <img src={props.image} style={{width:"auto", backgroundSize:"cover"}}/>              */}
            </div>
    
            <div className="rules_champ_card_container">

            <h4>{props.name}</h4>
            {/* <hr></hr> */}
            <p style={{lineHeight:"2rem" , marginBottom:"0rem",whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}} >
            {props.caption}174 (Billiards); 123 (Snooker)
            </p>
            </div>
        </div>
    );
}

export default Rules_Champ;