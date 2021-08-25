import React, {useState , useEffect } from 'react';
import Header from '../header/Header';
import image1 from '../../assets/image4.jpg';
import {WhatsappShareButton      , LinkedinShareButton , FacebookShareButton  ,TwitterShareButton} from "react-share"
import Avatar from '@material-ui/core/Avatar';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook'
import WhatsappIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PrintIcon from '@material-ui/icons/Print';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useLocation } from 'react-router-dom';
import search from "../../assets/search.gif"
import { useParams } from "react-router-dom";
import "./NewsPage.css"
import Instagram from '@material-ui/icons/Instagram';
import Lottie from 'react-lottie';
import animationData from '../../assets/search_file.json';
import axios from 'axios';


const NewsPage=({match})=> {
    const shareUrl = 'http://github.com';
    const [newsData , setNewsData] =useState("");
    const location =  useLocation()
    // let id = new URLSearchParams(location.search).get("id");
    const {id } =useParams();


      
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
        axios.get(`http://billiardsports.in/api/news/?id=${id}`)
        .then((res)=>setNewsData(res.data.data))
        .catch((e)=>console.log(e))
        

    } , [])
    

    // var date=  new Date(newsData.timestamp);
    // if(date!=undefined)


    if(newsData)
    return (

    <div style={{display:"flex" , flexDirection:"column"}}>

        <Header active="news"/>

        <div style={{maxWidth:"1200px" , marginLeft:"auto" ,marginRight:"auto"}}>
        <h2 style={{ marginRight:"auto" , marginLeft:"auto" , color: "#282828",
            fontFamily: "PT Serif,serif",fontWeight: '800'}}>{ newsData.title}</h2>
        
        
        <p style={{ width:"fit-content" ,  marginLeft:"auto" , marginRight:"3rem" }}>{  newsData.timestamp && new Date(newsData.timestamp).toLocaleDateString("en", {weekday: "long",
        year: "numeric",
        month: "2-digit",
        day: "numeric"})}</p>

        <div style={{width:"96%" , maxHeight:"auto" , overflow:"hidden" , margin:"auto"}}>

        <img src ={`http://billiardsports.in/${newsData.image}`}  style={{ width:"100%", maxHeight:"100%" ,  border:"1px solid"}}/>

        </div>



        <div style={{display:"flex" , flexDirection:'row'}}>


            <div className="newspage_share_links" style={{display:"flex" , flexDirection:"column" ,width:"27%"   }}>

                <ul style={{listStyleType:"none" , width:"100%"}}>
                <li style={{marginBottom:"1.2rem"}}>Read {newsData.views} times</li>

                {/* <li style={{display:"flex" , cursor:"pointer" , fontWeight:"600" , marginTop:"0.5rem"}}>
                    <p  onClick={()=>window.print()}>
                        Print &nbsp;
                    </p>

                    <p onClick={()=>window.location.href="mailto: damnnotme@gmail.com "}>
                    
                        Email    
                    </p>
                </li> */}
                    <li className="shareLinks">
                            
                            <PrintIcon onClick={()=>window.print()} style={{fontSize:"3rem" ,marginRight:"1rem"}}></PrintIcon>
                            <MailOutlineIcon onClick={()=>window.location.href="mailto: ibsfinfo@gmail.com "} style={{fontSize:"3rem" ,marginRight:"1rem"}} ></MailOutlineIcon>
                            <FacebookShareButton url={shareUrl} quote={"oo"}>  <FacebookIcon style={{fontSize:"3rem" ,marginRight:"1rem"}}  round={true}/></FacebookShareButton>
                            <InstagramIcon  onClick={()=>{window.open('http://www.instagram.com' , 'blank')}} style={{cursor:"pointer"  , marginRight:"1rem", fontSize:"3rem" }}/>
                            <TwitterShareButton  url={shareUrl}> <TwitterIcon style={{fontSize:"3rem" ,marginRight:"1rem"}}  round={true}/> </TwitterShareButton>
                            <WhatsappShareButton url={shareUrl} separator=":: "> <WhatsappIcon style={{fontSize:"3rem" ,marginRight:"1rem"}}  round={true}/></WhatsappShareButton>

                    
                    </li>

                

                </ul>

                <hr></hr>

                <div className="author">

                <Avatar style={{width: "6rem",height: "6rem"}} alt="Remy Sharp" src="https://cdn.thewire.in/wp-content/uploads/2019/02/13133501/wire-logo.png" />

                    <h5>IBSF, Media officer</h5>
                </div>

                <hr></hr>
            
                <div className="news_tags">
                        {
                            newsData && newsData.tags.map((data , index)=>
                            (   
                                <>
                                <p key={index} style={{width:"fit-content" , padding:"1rem" , color:"white" , fontWeight:"500"  , backgroundColor:"#b71c1c", marginRight:"0.5rem"}}>{data}</p>
                                </>

                            )
                        )}
                </div>



            </div>

            <div style={{display:"flex" ,justifyContent:"center" , width:"75%" }}>


    
        <div style={{width:"95%" , height:"auto"  ,wordWrap : "break-word" , overflowWrap:'break-word' }}>

    
    
        <br></br>

        <div dangerouslySetInnerHTML={{ __html: newsData.content }}>

        </div>
        
            

        </div>
                
            </div>
            
        

            
            
        </div>

        </div>
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
}

export default NewsPage;