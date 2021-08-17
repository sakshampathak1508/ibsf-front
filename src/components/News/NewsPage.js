import React from 'react';
import Header from '../header/Header';
import image1 from '../../assets/image4.jpg';
import {WhatsappShareButton    , WhatsappIcon , FacebookIcon , LinkedinShareButton , FacebookShareButton  ,TwitterShareButton , TwitterIcon, LinkedinIcon} from "react-share"
import Avatar from '@material-ui/core/Avatar';
import InstagramIcon from '@material-ui/icons/Instagram';
import "./NewsPage.css"
import Instagram from '@material-ui/icons/Instagram';
function NewsPage() {
    const shareUrl = 'http://github.com';
    return (

        <div style={{display:"flex" , flexDirection:"column"}}>

        <Header/>

        <div>
        <h2 style={{ marginRight:"auto" , marginLeft:"auto" , color: "#282828",
            fontFamily: "PT Serif,serif",fontWeight: '800'}}>Make Govt Reveal if it Used Pegasus: Editors N. Ram, Sashi Kumar File Petition in Supreme Court</h2>
        
        <p style={{ maxWidth:"30%" ,  marginLeft:"auto" }}>Thursday, 04 March 2021</p>
        <div style={{width:"96%" , maxHeight:"80vh" , overflow:"hidden" , margin:"auto"}}>

        <img src ={image1} style={{ width:"100%", maxHeight:"100%" , objectFit:"cover" , border:"1px solid"}}/>

        </div>



        <div style={{display:"flex" , flexDirection:'row'}}>


            <div className="newspage_share_links" style={{display:"flex" , flexDirection:"column" ,width:"27%"   }}>

                <ul style={{listStyleType:"none" , width:"95%"}}>
                <li>Read 1234 times</li>
                <li style={{display:"flex" , cursor:"pointer" , fontWeight:"600" , marginTop:"0.5rem"}}>
                    <p  onClick={()=>window.print()}>
                        Print &nbsp;
                    </p>

                    <p onClick={()=>window.location.href="mailto: damnnotme@gmail.com "}>
                    
                        Email    
                    </p>
                </li>
                    <li className="shareLinks">
                            
                            <FacebookShareButton url={shareUrl} quote={"oo"}>  <FacebookIcon style={{width:"3.5rem" ,marginRight:"0.5rem"}}  round={true}/></FacebookShareButton>
                            <Avatar style={{marginRight:"0.5rem" , background:"none"}}><InstagramIcon  onClick={()=>{window.open('http://www.instagram.com' , 'blank')}} style={{cursor:"pointer" , fontSize:"3rem" ,  color:"white" ,background:"linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)"}}/></Avatar>
                            <TwitterShareButton  url={shareUrl}> <TwitterIcon style={{width:"3.5rem" ,marginRight:"0.5rem"}}  round={true}/> </TwitterShareButton>
                            <WhatsappShareButton url={shareUrl} separator=":: "> <WhatsappIcon style={{width:"3.5rem" ,marginRight:"0.5rem"}}  round={true}/></WhatsappShareButton>

                    
                    </li>

                

                </ul>

                <hr></hr>

                <div class="author">

                <Avatar style={{width: "6rem",height: "6rem"}} alt="Remy Sharp" src="https://cdn.thewire.in/wp-content/uploads/2019/02/13133501/wire-logo.png" />

                    <h5>IBSF, Media officer</h5>
                </div>

                <hr></hr>
            



            </div>

            <div style={{display:"flex" ,justifyContent:"center" , width:"75%" }}>


    
        <div style={{width:"78.333%" , height:"auto" ,marginLeft:"auto", marginRight:"auto" ,wordWrap : "break-word" , overflowWrap:'break-word' }}>

    
    
        <br></br>
        <p style={{fontFamily: "PT Serif", fontWeight: '400' , fontSize: '1.7rem',letterSpacing: '2px',color: "#282828",lineHeight: '1.3em'}}><strong>New Delhi:</strong> Two veteran journalists – former editor of The Hindu N. Ram and chairman of the Asian College of Journalism Sashi Kumar – have filed a petition in the Supreme Court seeking a court-ordered investigation into the Pegasus spyware revelations.<br></br>
            <br></br>Over the last 10 days, a global consortium of 17 media groups including The Wire have been publishing a series known as the Pegasus Project. The project is based on a leaked database of phone numbers of people who were either persons of interest or forensically identified as having been targeted by clients of the Israeli NSO Group’s Pegasus spyware. The NSO Group has repeatedly said that it only sells Pegasus to “vetted governments”.
            <br></br>In India, forensic evaluation showed that at least 10 devices – belonging to a political strategist, senior journalists and others – had either been successfully infected or witnessed a hacking attempt.The petition </p>
            <p style={{fontFamily: "PT Serif", fontWeight: '400' , fontSize: '1.7rem',letterSpacing: '2px',color: "#282828",lineHeight: '1.3em'}}><strong>New Delhi:</strong> Two veteran journalists – former editor of The Hindu N. Ram and chairman of the Asian College of Journalism Sashi Kumar – have filed a petition in the Supreme Court seeking a court-ordered investigation into the Pegasus spyware revelations.<br></br>
            <br></br>Over the last 10 days, a global consortium of 17 media groups including The Wire have been publishing a series known as the Pegasus Project. The project is based on a leaked database of phone numbers of people who were either persons of interest or forensically identified as having been targeted by clients of the Israeli NSO Group’s Pegasus spyware. The NSO Group has repeatedly said that it only sells Pegasus to “vetted governments”.
            <br></br>In India, forensic evaluation showed that at least 10 devices – belonging to a political strategist, senior journalists and others – had either been successfully infected or witnessed a hacking attempt.The petition </p>
            
            

        </div>
                
            </div>
            
        

            
            
        </div>

        </div>
        </div>
    );
}

export default NewsPage;