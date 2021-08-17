import React , {useEffect  , useState} from 'react';
import "./Caroufredsel_wrapper.css"
import adidas from "../../assets/sponsors/adidas.png"
import facebook from "../../assets/sponsors/facebook.png"
import google from "../../assets/sponsors/google.png"
import instagram from "../../assets/sponsors/instagram.png"
import nike from "../../assets/sponsors/nike.png"
import twitter from "../../assets/sponsors/twitter.png"
import uber from "../../assets/sponsors/uber.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios'
import { useMediaQuery } from 'react-responsive'






const Caroufredsel_wrapper = (props) => {


    console.log(props.data)
    const [slidesToShow , setslidesToShow] = useState(4);
    
    useEffect(()=>
    {
        const width = window.innerWidth;

        width>768? setslidesToShow(4):setslidesToShow(1)
        
    })

    
    const handleMediaQueryChange = (matches) => {
        if(matches)
        setslidesToShow(1);
      }

      const handleMediaQueryChange1 = (matches) => {
        if(matches)
        setslidesToShow(4);
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

                <div key={index} className="slide_image" ><img src={`http://billiardsports.in/${data.image}`} alt="img" /></div>

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