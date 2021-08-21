import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './ExecutiveCard.css'
const componentName = (props) => {
    return (
        <div className="executive_card" style={{backgroundImage:`url(${props.image}` , backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>

            <div className="executive_overlap_div">


                <div className="executive_overlap_text">
                <p>{props.position}</p>
                <h3>{props.name}</h3>
                <div className="executive_social_links">
            <MailOutlineIcon/>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            </div>
            
                </div>

            </div>

        </div>
    );
};

export default componentName;