import React , {useEffect, useState} from 'react';
// import 'react-gallery-carousel/dist/index.css';
// import { useStyles } from '@material-ui/core/styles';
import Card from '../Card/Card';
import ControlledCarousel from '../Carousel/Carousel';
import Caroufredsel_wrapper from '../Carousel/Caroufredsel_wrapper';
import axios from "axios"
import Header from '../header/Header';
import "./Main_page.css"







const Main_page = () => {

  const [latestnews , setlatestnews] = useState([]);
  const [sponsor , setSponsor] = useState()
  

  useEffect(()=>
  {
  axios.get("https://billiardsports.in/api/news/latest/")
          .then((response) => setlatestnews(response.data.data))

          axios.get("https://billiardsports.in/api/sponsers/")
        .then((response) => setSponsor(response.data.data))



          console.log(latestnews)
      

  } , [])


  return (
    <>

    <Header/>
    <div style={{height:"auto"}}>
      
    
      <div >
        <ControlledCarousel/>
      
</div>  

    <br></br>

    <div className="headlines">

        
          <div style={{height:"100%" }}>



              <div className="headlines_title">
                  <h4>DHOL</h4>
              </div>
          
            <div className="headline_content" style={{display:"flex" , justifyContent:"center"}}>

            <h4>DRAW</h4>
            <h4>Results</h4>
            <h4>Knockout Results</h4>
            <h4>Photographs</h4>
            <h4>Knockout Results</h4>
            <h4>Submit Entry</h4>

            </div>
          



      
          

          

          <div className="headlines_title">
                  <h4>IBSF Tournament Entry</h4>
              </div>

          
            <div className="headline_content" style={{display:"flex" , justifyContent:"center"}}>
            <h4>DRAW</h4>
            <h4>Results</h4>
            <h4>Knockout Results</h4>
            <h4>Photographs</h4>
            <h4>Knockout Results</h4>
            <h4>Submit Entry</h4>

          
        </div>
        



        <div className="headlines_title">
                  <h4>DHOL</h4>
              </div>


            <div className="headline_content" style={{display:"flex" , justifyContent:"center"}}>


    

            <h4>DRAW</h4>
            <h4>Results</h4>
            <h4>Knockout Results</h4>
            <h4>Photographs</h4>
            <h4>Knockout Results</h4>
            <h4>Submit Entry</h4>

            </div>

        </div>
        </div>


      </div>

      <br></br>
      <br></br>




    <div className="news_section" style={{display:"flex" , flexDirection:"row" , justifyContent:"center" , flexWrap:"wrap"}}>
  
    {latestnews&&latestnews.slice(0 , 3).map((e , index)=>
    (
  
        <Card key={index} size="50vh" image={`https://billiardsports.in/${e.image}`} title={e.title} description={e.content} />
    ))    
    }
    </div>
   

    <br></br>

    <Caroufredsel_wrapper data = {sponsor}/>
      
    
    <br></br>
    <br></br>
      </>
  );
};

export default Main_page;