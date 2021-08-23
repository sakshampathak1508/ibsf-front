import React , {useState , useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../../assets/example1.jpg';
import image2 from "../../assets/example2.jpg";
import axios from "axios"
import './carousel.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';


function ControlledCarousel() {

  const [navbar , setNavbar] = useState();
  


    useEffect(()=>
    {

          axios.get("http://billiardsports.in/api/news/featured/")
          .then((response) => setNavbar(response.data.data))


          
    } , [])

  
    return (
      <Carousel className="mainPage_carousel" interval={3000}>

      {
      
        navbar&&navbar.map((data , index)=>
        (
        
      
              <Carousel.Item key={index} style={{height:"100%" , overflow:"hidden"}}>
        <img
        loading='lazy'
          className="d-block w-100"
          src={`http://billiardsports.in/${data.image}`}
          style = {{ height:"100%" }}
          alt="First slide"
        />
        <Carousel.Caption className="carousel_caption">
          <span></span>
          <h3>{data.title}</h3>
         
        </Carousel.Caption>
      </Carousel.Item>

        

        ))
      
    }

<Carousel.Item style={{height:"100%"}}>
        <img
          loading="lazy"
          className="d-block w-100"
          src={image2}
          style = {{ height:"100%"}}
          alt="First slide"
        />
        <Carousel.Caption className="carousel_caption">
          <span></span>
          <h3>Title of the day</h3>
      
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    );
  }
  
  export default ControlledCarousel;