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

    console.log(navbar)
    
    return (
      <Carousel interval={3000} style={{ height:"auto" }}>

      {
      
        navbar&&navbar.map((data , index)=>
        (
        
      
              <Carousel.Item style={{height:"auto"}}>
        <img
          className="d-block w-100"
          src={`http://billiardsports.in/${data.image}`}
          style = {{ objectFit:"cover" , maxHeight:"80vh"}}
          alt="First slide"
        />
        <Carousel.Caption className="carousel_caption">
          <span></span>
          <h3>{data.title}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

        

        ))
      
    }

<Carousel.Item style={{height:"auto"}}>
        <img
          className="d-block w-100"
          src={image2}
          style = {{ objectFit:"cover" , maxHeight:"80vh"}}
          alt="First slide"
        />
        <Carousel.Caption className="carousel_caption">
          <span></span>
          <h3>data.title</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    );
  }
  
  export default ControlledCarousel;