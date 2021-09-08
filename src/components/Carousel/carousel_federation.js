import React , {useEffect  , useState} from 'react';
import "./carousel_federation.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useHistory } from 'react-router';
import AOS from 'aos'
import 'aos/dist/aos.css';

import { useMediaQuery } from 'react-responsive'
import Aos from 'aos';






const Caroufredsel_federation = (props) => {


    const [slidesToShow , setslidesToShow] = useState(5);
    const history =useHistory()
    
    useEffect(()=>
    {
        AOS.init({
            // initialise with other settings
            duration : 900,
            once:true,
            offset: 900
          });
          Aos.refresh()
        const width = window.innerWidth;

        width>768? setslidesToShow(5):setslidesToShow(1)
        
    },[])

    
    const handleMediaQueryChange = (matches) => {
        if(matches)
        setslidesToShow(1);
    }

    const handleMediaQueryChange1 = (matches) => {
        if(matches)
        setslidesToShow(5);
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
        <div className="carouselfederation_container">
            {/* {isTabletOrMobile && setslidesToShow(1)} */}

<Slider  {...setting}>

                <div key={1} data-aos={"fade-up"} className="slide_image" onClick={()=>history.push(`/member_countries/1`)} ><img src={`http://www.ibsf.info/images/banners/african-logo.png`} alt="img" /></div>
                <div key={2} data-aos={"fade-up"}  data-aos-delay="200" onClick={()=>history.push(`/member_countries/2`)} className="slide_image" ><img src={`http://www.ibsf.info/images/banners/african-logo.png`} alt="img" /></div>
                <div key={3} data-aos={"fade-up"}  data-aos-delay="300" onClick={()=>history.push(`/member_countries/3`)} className="slide_image" ><img src={`http://www.ibsf.info/images/banners/african-logo.png`} alt="img" /></div>
                <div key={4} data-aos={"fade-up"}  data-aos-delay="400" onClick={()=>history.push(`/member_countries/4`)} className="slide_image" ><img src={`http://www.ibsf.info/images/banners/african-logo.png`} alt="img" /></div>
                <div key={5} data-aos={"fade-up"}  data-aos-delay="500" onClick={()=>history.push(`/member_countries/5`)} className="slide_image" ><img src={`http://www.ibsf.info/images/banners/african-logo.png`} alt="img" /></div>

            

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


export default Caroufredsel_federation;