import React, { useState } from 'react';
import Header from '../header/Header';
import { useParams } from 'react-router-dom';
import image1 from '../../assets/example2.jpg'
import axios from "axios"

const Particular_rules = (props) => {
    const [Data , setData] =useState("");
    const {id } =useParams();
    useState(()=>
    {
        axios.get(`http://billiardsports.in/api/all-rules/?id=${id}`)
        .then((res)=>setData(res.data.data))
        .catch((e)=>console.log(e))
        

    } , [])
    console.log(Data)
    return (
        <div>
            <Header/>
            
            <div style={{maxWidth:"1200px" , marginLeft:"auto" ,marginRight:"auto"}}>
        <h2 style={{color: "#282828",
            fontFamily: "PT Serif,serif",fontWeight: '800'}}>{ Data.title}Title</h2>
        

        <section style={{width:"96%" , margin:"auto"}}>
        <img src ={image1}  style={{ width:"100%", maxHeight:"100%" ,  border:"1px solid"}}/>
        
        <br></br>
        <br></br>
    
            <div dangerouslySetInnerHTML={{ __html: "<p>OK</p>"}} />

            </section>


        </div>
        </div>
    );
};


export default Particular_rules;