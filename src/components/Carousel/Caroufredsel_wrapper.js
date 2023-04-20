import React , {useEffect  , useState} from 'react';
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive'
import "./Caroufredsel_wrapper.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






const Caroufredsel_wrapper = (props) => {


    const [slidesToShow , setslidesToShow] = useState(2);
    
    useEffect(()=>
    {
        const width = window.innerWidth;

        width>768? setslidesToShow(2):setslidesToShow(1)
        
    })

    
    const handleMediaQueryChange = (matches) => {
        if(matches)
        setslidesToShow(1);
      }

      const handleMediaQueryChange1 = (matches) => {
        if(matches)
        setslidesToShow(2);
      }

    

    useMediaQuery(
        { maxWidth: 768 }, undefined,  handleMediaQueryChange
    );
    

     useMediaQuery(
        { minWidth: 769 }, undefined,  handleMediaQueryChange1
    );


    var setting={
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay:true,
    }
    

    

    return (
        <div className="carouselwrapper_container">
            {/* {isTabletOrMobile && setslidesToShow(1)} */}

<Slider style={{  height:"auto"  , overflow:"hidden"}} {...setting}>

        {
            
            props.data&&props.data.map((data , index)=>
            (   

                <div key={index} onClick={()=>window.open(data.url , '_blank')} className="slide_image" ><img src={`https://admin.ibsf.info/${data.image}`} width="auto" height="100%" alt="img" /></div>

            ))

            
        }
    

    </Slider>
    

        {/* <Slider {...settings} className="customer-logos slider">
            

        <div className="slide"><img src={adidas} alt="img" /></div>
        <div className="slide"><img src={facebook} alt="img" /></div>
        <div className="slide"><img src={google} alt="img" /></div>
        <div className="slide"><img src={instagram} alt="img" /></div>
        <div className="slide"><img src={nike} alt="img" /></div>
        <div className="slide"><img src={twitter} alt="img" /></div>
        <div className="slide"><img src={uber} alt="img" /></div>

        </Slider> */}


        </div>
    );
};


export default Caroufredsel_wrapper;