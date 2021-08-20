import React, { useState } from 'react';
import './ScrollToTop.css'
const ScrolltoTop = props => {
    const [visible , setvisible] = useState(false);

    const changeBackground = () => {
        

        
        
        if (window.scrollY >= 300) {
            setvisible(true)
        } else {
            setvisible(false);
        }
    }

    
    window.addEventListener('scroll', changeBackground);
    return (
        <div>

<a onClick={()=>window.scrollTo({top:0 , behavior:"smooth"})} style={{display:visible?"inline":"none"}} id="return-to-top"><strong>^</strong></a>
            
        </div>
    );
};


export default ScrolltoTop;