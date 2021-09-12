import React, { useState } from 'react';
import Header from '../header/Header';
import { useParams } from 'react-router-dom';
import Lottie from 'react-lottie';
import axios from "axios"
import animationData from '../../assets/search_file.json';
import Caroufredsel_wrapper from '../Carousel/Caroufredsel_wrapper';

const Particular_rules = (props) => {
    const [Data , setData] =useState([]);
    const {id } =useParams();
    const [sponsor , setSponsor] = useState([])



    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    useState(()=>
    {
        axios.get(`https://billiardsports.in/api/champs/?id=${id}`)
        .then((res)=>setData(res.data.data))
        .catch((e)=>console.log(e))

        axios.get("https://billiardsports.in/api/sponsers/")
        .then((response) => setSponsor(response.data.data))
        

    } , [])

       if(Data.length==0)
        return(

            <>
            <Header active="aboutus"/>
            <Lottie options={defaultOptions} style={{marginTop:"2rem"}}
            height={400} width={350} />
            
            </>
        )
        else{
        return (
        <>
            <Header active="aboutus"/>
            
            <div style={{maxWidth:"1200px" , marginLeft:"auto" ,marginRight:"auto"}}>
        <h2 style={{color: "#282828",
            fontFamily: "PT Serif,serif",fontWeight: '800'}}>{ Data.name}</h2>
        

        <section style={{width:"96%" , margin:"auto"}}>
        <img src ={`https://billiardsports.in/${Data.image}`} style={{ width:"100%", maxHeight:"100%"}}/>
        
        <br></br>
        <br></br>
    
            <div dangerouslySetInnerHTML={{ __html:Data.content}} />

            </section>


        </div>
        <br></br>
        <Caroufredsel_wrapper data={sponsor} />
        </>
    );
        }
};


export default Particular_rules;