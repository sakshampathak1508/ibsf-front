import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook'
import WhatsappIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import "./Footer.css"
function Footer(props) {
    return (
        <footer className="home_footer" >
            <div>

                <h2><strong className="first_letter_effect">R</strong>egional Links</h2>
                <hr></hr>
                <ul className="quick_links">
                <li><a>EBSA </a></li>
                <li><a>OBSF </a></li>
                <li><a>ACBS</a></li>
                <li><a>ABSF</a></li>
            </ul>
            </div>

            <div>
            <h2> <strong className="first_letter_effect">O</strong>ther World Links</h2>
            <hr></hr>
            <ul className="quick_links">
                <li><a>World Snooker</a></li>
                <li><a>Union Mondiale De Billiard</a></li>
                <li><a>World Confederation of Billiards Sports</a></li>
                <li><a>World Pool Association</a></li>
                <li><a>Olympic Movement</a></li>

            </ul>
            
            </div>
            <div>
            <h2><strong className="first_letter_effect">A</strong>bout us</h2>
            <hr></hr>
            <ul className="quick_links">
                <li><a>About IBSF</a></li>
                <li><a>Member Countries</a></li>
                <li><a>Past Champions</a></li>
                <li><a>Downloads</a></li>
            </ul>
            </div>
            <div>
            <h2><strong className="first_letter_effect">S</strong>ocial</h2>
            <hr></hr>
            <div className="social_links">
            <MailOutlineIcon/>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            </div>
            
            
            </div>

        </footer>
    );
}

export default Footer;