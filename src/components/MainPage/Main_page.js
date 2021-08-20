import React , {useEffect, useState} from 'react';
// import 'react-gallery-carousel/dist/index.css';
// import { useStyles } from '@material-ui/core/styles';
import Card from '../Card/Card';
import ControlledCarousel from '../Carousel/Carousel';
import Caroufredsel_wrapper from '../Carousel/Caroufredsel_wrapper';
import axios from "axios"
import Header from '../header/Header';
import "./Main_page.css"
import image1 from '../../assets/example1.jpg'
import image2 from '../../assets/example3.jpg'
import Current_Score from '../Card/Current_Score';
import Footer from '../Footer/Footer';







const Main_page = () => {

  const [latestnews , setlatestnews] = useState([]);
  const [sponsor , setSponsor] = useState()
  

  

  useEffect(()=>
  {
  axios.get("http://billiardsports.in/api/news/latest/")
          .then((response) => setlatestnews(response.data.data))

          axios.get("http://billiardsports.in/api/sponsers/")
        .then((response) => setSponsor(response.data.data))



          console.log(latestnews)
      

  } , [])


  return (
    <>

    <Header active="home"/>
    <div style={{height:"auto"}}>
      
    
      <div >
        <ControlledCarousel/>
      
</div>  

  
    <div className="headlines">

          <div style={{width:"100%"  , backgroundColor: "rgba(0, 0, 0, 0.8)"}}>



              <div className="headlines_title">
                  <h2>DHOL</h2>
              </div>

              <div className="headlines_current_score" style={{display:"flex"}}>
                <Current_Score title="Draw" />
                <Current_Score title="Results" />
                <Current_Score title="Knockout Results" />
                <Current_Score title="Photographs" />
                <Current_Score title="Knockout Results" />
                <Current_Score title="Submit Entry" />
                

              </div>
              
          
            
          



      
          

          

          <div className="headlines_title">
                  <h2>IBSF Tournament Entry</h2>
              </div>

          
              <div  className="headlines_current_score" style={{display:"flex"}}>
                <Current_Score title="Draw"/>
                <Current_Score title="Results"/>
                <Current_Score title="Knockout Results"/>
                <Current_Score title="Photographs"/>
                <Current_Score title="Knockout Results"/>
                <Current_Score title="Submit Entry"/>
                

              </div>



        {/* <div className="headlines_title">
                  <h4>DHOL</h4>
              </div>


              <div  className="headlines_current_score" style={{display:"flex"}}>
                <Current_Score title="Draw"/>
                <Current_Score title="Results"/>
                <Current_Score title="Knockout Results"/>
                <Current_Score title="Photographs"/>
                <Current_Score title="Knockout Results"/>
                <Current_Score title="Submit Entry"/>
                

              </div> */}
        </div>
        </div>


      </div>

      <br></br>
      <br></br>

    <div className="news_section" style={{display:"flex" , flexDirection:"row" , justifyContent:"center" , flexWrap:"wrap"}}>
  
    {latestnews&&latestnews.slice(0 , 3).map((e , index)=>
    (
  
        <Card key={index} size="50vh" image={`http://billiardsports.in/${e.image}`} title={e.title} description={e.content} />
    ))    
    }


     
    </div>
   

    <br></br>

    <Caroufredsel_wrapper data = {sponsor}/>
      
    <Footer/>
      </>
  );
};

export default Main_page;