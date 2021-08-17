import React from 'react';
import "./Continent.css";

function ContinentCard(props) {
    return (
        <div className="continent_card" style={{backgroundImage:`url(${props.image}` , backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>

            <div className="overlap_div">

            
            <div className="overlap_text">
                <h4>Member:{props.member}</h4>
                <h4>President: {props.president}</h4>

            </div>

            </div>

            
        </div>
    );
}

export default ContinentCard;