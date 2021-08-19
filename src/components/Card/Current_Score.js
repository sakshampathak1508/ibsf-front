import React from 'react';
import "./Current_Score.css";

function Current_Score(props) {
    return (
        <div className="current_score" style={{backgroundImage:`url(${props.image}` , backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>

            <div className="overlap_div">

            
            <div className="overlap_text">
                <h3>{props.title}</h3>
            </div>

            </div>

            
        </div>
    );
}

export default Current_Score;