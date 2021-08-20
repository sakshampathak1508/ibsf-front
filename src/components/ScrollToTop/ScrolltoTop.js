import React, { useState  , useEffect} from 'react';
import './ScrollToTop.css'
const ScrolltoTop = props => {
    const [visible , setvisible] = useState(false);

    const toggleVisibility = () => {
        

        
        
        if (window.pageYOffset >300) {
            setvisible(true)
        } else {
            setvisible(false);
        }
    }

    
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
      }, []);
    
    return (
        <div className="parrent-return-to-top">
{
    visible && (<a onClick={()=>window.scrollTo({top:0 , behavior:"smooth"})}  id="return-to-top"><strong>^</strong></a>)
}
            
        </div>
    );
};


export default ScrolltoTop;