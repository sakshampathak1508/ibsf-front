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
import { useHistory, useLocation } from 'react-router-dom';
import search from "../../assets/search.gif"
import { useParams } from "react-router-dom";
import "./NewsPage.css"
import Instagram from '@material-ui/icons/Instagram';
import Lottie from 'react-lottie';
import animationData from '../../assets/search_file.json';
import axios from 'axios';


const NewsPage=({match})=> {
    const [newsData , setNewsData] =useState([]);
    // let id = new URLSearchParams(location.search).get("id");
    const {id } =useParams();
    const shareUrl = `http://billiardsports.in/news/?id=${id}/${newsData.slug}`;
    console.log(shareUrl)
    const history = useHistory()


      
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


    if(newsData.length!=0)
    return (

    <div style={{display:"flex" , flexDirection:"column"}}>

        <Header active="news"/>

        <div style={{maxWidth:"1200px" , marginLeft:"auto" ,marginRight:"auto"}}>
        <h2 style={{ marginRight:"auto" , marginLeft:"auto" , color: "#282828",
            fontFamily: "PT Serif,serif",fontWeight: '800'}}>{ newsData.title}</h2>
        
        
        <p style={{ width:"max-content"  ,  marginLeft:"auto" , marginRight:"3rem" }}>{  newsData.timestamp && new Date(newsData.timestamp).toLocaleDateString("en", {weekday: "long",
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

                <Avatar style={{width: "6rem",height: "6rem"}} alt="Remy Sharp" src={`http://billiardsports.in/${newsData.writer_data.profile_pic}`} />

                    <h5>{newsData.writer_data.name}, {newsData.writer_data.position}</h5>
                </div>

                <hr></hr>
            
                <div className="news_tags">
                        {
                            newsData && newsData.tags_name.map((data , index)=>
                            (   
                                <>
                                <p onClick={()=>history.push(`/newsbytag/${data}`)} key={index} style={{cursor:"pointer" , width:"fit-content" , padding:"1rem" , color:"white" , fontWeight:"500"  , backgroundColor:"#0da1ff", marginRight:"0.5rem"}}>{data}</p>
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
            <Header active="news"/>
            <Lottie options={defaultOptions} style={{marginTop:"2rem" , marginBottom:"7rem"}}
            height={400} width={350} />
            </>
        )
    }
}

export default NewsPage;