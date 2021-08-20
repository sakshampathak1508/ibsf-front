import React from 'react';
import './ScrollToTop.css'
const ScrolltoTop = props => {

    const changeBackground = () => {
        

        if(document.getElementById("return-to-top")!=undefined)
        {
        if (window.scrollY >= 300) {
            document.getElementById("return-to-top").style.display = "block";
        } else {
            document.getElementById("return-to-top").style.display = "none";
        }
    }
    }

    
    window.addEventListener('scroll', changeBackground);
    return (
        <div>

<a onClick={()=>window.scrollTo({top:0 , behavior:"smooth"})} id="return-to-top"><strong>^</strong></a>
            
        </div>
    );
};


export default ScrolltoTop;