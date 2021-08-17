import React ,{useEffect, useState} from 'react';
import axios from 'axios'
import Header from '../header/Header';

import "./About.css"

function About() {

    const [data ,  setData] = useState();

    useEffect(()=>
  {
  axios.get("http://billiardsports.in/api/about/")
          .then((response) => setData(response.data.data.content))

          console.log(data)
      

  } , [])
    return (
        <>
         <Header/>
        <div className="aboutus">

            
            <div className="aboutus_title">

        
            <h1>About us  </h1>
            <hr  style={{marginBottom:"1rem"}}></hr>

            </div>

            <section className="aboutus_section" >
            <div dangerouslySetInnerHTML={{ __html: data }} />

            </section>
            
        </div>
        </>
    );
}

export default About;