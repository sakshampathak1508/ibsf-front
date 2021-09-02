import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ParticularEvent.css'
import Lottie from 'react-lottie';
import animationData from '../../assets/search_file.json';
import {IoLocationSharp} from 'react-icons/io5'
import {BiTimeFive, BiWorld} from 'react-icons/bi'
import {AiOutlineLink} from 'react-icons/ai'
import {FaPhotoVideo} from "react-icons/fa"
import Header from '../header/Header';
import Footer from '../Footer/Footer'

const ParticularEvent = (props) => {
    const [data , setdata] = useState([]);
    const {id} =useParams()

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    useEffect(()=>
    {
        axios.get(`http://billiardsports.in/api/event/?id=${id}`)
        .then((res)=> setdata(res.data.data))
        .catch((e)=> console.log(e))

    }, [])
        
    if(data.length!=0)
        return (
        <div className="particulat_event">
            <Header active="events"/>
            
            <div>
                <h1>{data.name} </h1>
            </div>

            <section className="event_details">
                    <div>
                    <h4>LOCATION
                        </h4>

                        <p><IoLocationSharp className="event_icon"/>{data.location}</p>
                    </div>
                        
                        
                    <div>
                    <h4>VENUE
                        </h4>

                        <p> <span><IoLocationSharp className="event_icon"/></span>{data.venue}</p>

                    </div>
                    
                    <div>
                    <h4>START DATE
                        </h4>

                        <p> <span><BiTimeFive className="event_icon"/></span>{data.start_date}</p>

                    </div>
                    
                    <div>
                        
                    <h4>FINISH DATE
                        </h4>

                        <p> <span><BiTimeFive className="event_icon"/></span>{data.end_date}</p>

                    </div>


                    <div>
                    <h4>RESULTS
                        </h4>

                        <p> <span><AiOutlineLink className="event_icon"/></span>Download </p>
                    </div>
                        
                        
                    <div>
                    <h4>PHOTOGRAPHS
                        </h4>

                        <p> <span><FaPhotoVideo className="event_icon"/></span>Download </p>

                    </div>
                    
                    <div>
                    <h4>VIDEO
                        </h4>

                        <p> <span><FaPhotoVideo className="event_icon"/></span>Download </p>

                    </div>
                    
                    <div>
                        
                    <h4>LIVE
                        </h4>

                        <p> <span><FaPhotoVideo className="event_icon"/></span>Download </p>

                    </div>


            </section>

            <section className="event_content">
                <div className="event_content1" dangerouslySetInnerHTML={{__html:data.content1}}>

                </div>
                
                <div className="event_content2" dangerouslySetInnerHTML={{__html:data.content2}}>

                </div>
            </section>

            <Footer/>
        </div>
    );

        else
    {
        return(
            <>
            <Header/>
            <Lottie options={defaultOptions} style={{marginTop:"2rem"}}
            height={400} width={350} />
            </>
        )
    }
};


export default ParticularEvent;