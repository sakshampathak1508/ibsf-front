import React, { useState } from 'react';
import Header from '../header/Header';
import { useParams } from 'react-router-dom';
import Lottie from 'react-lottie';
import axios from "axios"
import animationData from '../../assets/search_file.json';

const Particular_rules = (props) => {
    const [Data , setData] =useState([]);
    const {id } =useParams();


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
        axios.get(`https://billiardsports.in/api/rule/?id=${id}`)
        .then((res)=>setData(res.data.data))
        .catch((e)=>console.log(e))
        

    } , [])
    
       if(Data.length!=0)
       return (
        <div>
            <Header active="rules"/>
            
            <div style={{maxWidth:"1200px" , marginLeft:"auto" ,marginRight:"auto"}}>
        <h2 style={{color: "#282828",
            fontFamily: "PT Serif,serif",fontWeight: '800'}}>{ Data.name}</h2>
        

        <section style={{width:"96%" , margin:"auto"}}>
        <img src ={`https://billiardsports.in/${Data.image}`} style={{ width:"100%", maxHeight:"100%" ,  border:"1px solid"}}/>
        
        <br></br>
        <br></br>
    
            <div dangerouslySetInnerHTML={{ __html:Data.content}} />

            </section>


        </div>
        </div>
    );
        else{
            return(

                <>
                <Header active="aboutus"/>
                <Lottie options={defaultOptions} style={{marginTop:"2rem"}}
                height={400} width={350} />
                
                </>
            )
        
        }
};


export default Particular_rules;