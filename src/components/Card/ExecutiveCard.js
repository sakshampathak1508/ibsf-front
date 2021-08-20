import React from 'react';
import './ExecutiveCard.css'
const componentName = (props) => {
    return (
        <div className="executive_card" style={{backgroundImage:`url(${props.image}` , backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>

            <div className="executive_overlap_div">


                <div className="executive_overlap_text">
                <p>{props.position}</p>
                <h3>{props.name}</h3>
                </div>

            </div>

        </div>
    );
};

export default componentName;