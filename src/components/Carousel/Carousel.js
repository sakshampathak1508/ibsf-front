import React , {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../../assets/example1.jpg';
import image2 from "../../assets/example2.jpg";
import image4 from "../../assets/image4.jpg"
import image3 from "../../assets/example3.jpg";
import './carousel.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function ControlledCarousel() {
    
    return (
      <Carousel interval={3000} style={{ height:"auto" ,overflow:"hidden"}}>
      <Carousel.Item style={{height:"auto"}}>
        <img
          className="d-block w-100"
          src={image2}
          style = {{ objectFit:"cover" , maxHeight:"80vh"}}
          alt="First slide"
        />
        <Carousel.Caption className="carousel_caption">
          <span></span>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          style = {{ objectFit:"cover" , maxHeight:"80vh"}}
          alt="Second slide"
        />
    
        <Carousel.Caption className="carousel_caption">
        <span></span>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          style = {{ objectFit:"cover" , maxHeight:"80vh"}}
          alt="Third slide"
        />
    
        <Carousel.Caption className="carousel_caption">
        <span></span>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
  
  export default ControlledCarousel;