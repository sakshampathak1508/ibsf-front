import React ,{useEffect, useState} from 'react';
import axios from 'axios'
import Header from '../header/Header';
import CircularProgress from '@material-ui/core/CircularProgress';
import "../About/About.css"
import {BsDownload} from 'react-icons/bs'

function About() {

    const [data ,  setData] = useState([]);
    const [loading , setloading] = useState(true);
    const [downloads ,setdownloads]= useState([])

    useEffect(()=>
  {
            axios.get("https://billiardsports.in/api/about/")
            .then((response) => 
            {setData(response.data.data.content_download)
                    setloading(false)   
            })
            .catch((e)=>console.log(e))

            axios.get("https://billiardsports.in/api/downloads/")
            .then((response) => {
                setdownloads(response.data.data)
                
            })
            .catch((e)=>console.log(e))

  } , [])
    return (
        <>
         <Header active="document"/>
        <div className="aboutus">

            
            <div className="aboutus_title">

        
            <h1>Downloads </h1>
            <hr  style={{marginBottom:"1rem"}}></hr>

            </div>
            {
            data.length!=0?

            <section className="aboutus_section" >
            <div dangerouslySetInnerHTML={{ __html: data }} />

            <div>
                {
                    downloads.map((row,  index)=>
                    
                        (
                        <a style={{fontSize:"1.5rem"}} href={`${row.file}`} download target="_blank"> <h4> {row.name} <BsDownload/></h4></a>
                        )
                    
                    )
                }
            </div>
            </section>
            :
            <>
            {
                loading?<div id="loader" style={{width:"100%" ,  textAlign:"center" }}> <p><CircularProgress/></p> </div>:
                <div id="loader" style={{width:"100%" ,  textAlign:"center" }}> <h4>Nothing Found...</h4> </div>
            }</>
        }
            
        </div>
        </>
    );
}

export default About;