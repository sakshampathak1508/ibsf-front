import React ,{useEffect, useState} from 'react';
import axios from 'axios'
import Header from '../header/Header';

import "../About/About.css"
import {BsDownload} from 'react-icons/bs'

function About() {

    const [data ,  setData] = useState();
    const [downloads ,setdownloads]= useState([])

    useEffect(()=>
  {
            axios.get("http://billiardsports.in/api/about/")
            .then((response) => setData(response.data.data.content_download))
            .catch((e)=>console.log(e))

            axios.get("http://billiardsports.in/api/downloads/")
            .then((response) => setdownloads(response.data.data))
            .catch((e)=>console.log(e))

  } , [])
    return (
        <>
         <Header active="aboutus"/>
        <div className="aboutus">

            
            <div className="aboutus_title">

        
            <h1>Downloads </h1>
            <hr  style={{marginBottom:"1rem"}}></hr>

            </div>

            <section className="aboutus_section" >
            <div dangerouslySetInnerHTML={{ __html: data }} />

            <div>
                {
                    downloads.map((row,  index)=>
                    
                        (
                        <a style={{fontSize:"1.5rem"}} href={`http://localhost:3000/${row.file}`} download target="_blank"> <h4> {row.name} <BsDownload/></h4></a>
                        )
                    
                    )
                }
            </div>
            </section>
            
        </div>
        </>
    );
}

export default About;