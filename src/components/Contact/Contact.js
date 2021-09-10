import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { BiMailSend } from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'
import Header from '../header/Header'
import Caroufredsel_wrapper from '../Carousel/Caroufredsel_wrapper';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Contact.css'





  const useStyles = makeStyles({
    table: {
        display:'flex',

    },
    style_key:
    {
        minWidth:"10rem" ,maxWidth:"40%",color:'black'
    },

    value:
    {
        color:'#0da1ff',
        maxWidth:"50%",
        marginLeft:'3.5rem',
        wordBreak:"break-all",
        cursor:'pointer'
    }
  
  });
  


const Contact = props => {
    const [data, setdata] = useState([])
    const history = useHistory()
    const classes = useStyles();
    const [sponsor , setSponsor] = useState([])
    const [loading , setloading] = useState(true);

    
    useEffect(()=>
    {
        axios.get('https://billiardsports.in/api/contact/')
        .then((res)=> {
          
          setdata(res.data.data)
          setloading(false)
          })
        .catch((e)=>console.log(e))


        
        axios.get("https://billiardsports.in/api/sponsers/")
        .then((response) => setSponsor(response.data.data))




    }, [])


    return (
        <div>
            <Header active="contactus"/>
            
            <div style={{background:"#0067b8" , padding:"2rem 0rem 2rem 3.5rem"}}>
                <h3 style={{width:"80%" , color:"white" , display:'inline-block' ,margin:'auto'}}>Contact IBSF</h3>
            </div>

            <br></br>
            <div style={{padding:"1.5rem", maxWidth:"800px"  , margin:"auto"}}>
            {
            data.length!=0?
              <>
              <div  style={{display:'flex' , flexWrap:"wrap"}}>
                <div className="contact_responsive" style={{display:"flex"}}>
                    <h3 style={{color:"rgb(13, 161, 255)"}}>Address</h3>
                    <div dangerouslySetInnerHTML={{__html:data.address}}></div>
                </div >

                <div className="contact_responsive" style={{display:"flex", flexDirection:'column' }}>
                    <h3 style={{color:"rgb(13, 161, 255)"}}>Bank Details</h3>
                    <p>{data.bank_details}</p>
                </div>

            
              </div>
              <br></br>
              <hr></hr>

              <div style={{display:'flex' , flexDirection:'column' }}>
              
              
              {
                data.name1&&
                <div className={classes.table}>
                    <h4 className={classes.style_key}><BsFillPersonFill/> {data.name1}</h4>
                    <h4 onClick={()=>window.location.href=`mailto: ${data.email1}`} className={classes.value}><BiMailSend style={{color:'black'}}/> {data.email1}</h4>
                </div>

              }
              {
                data.name2&&
                <div className={classes.table}>
                    <h4 className={classes.style_key}>{data.name2}</h4>
                    <h4 onClick={()=>window.location.href=`mailto: ${data.email2}`} className={classes.value}><BiMailSend style={{color:'black'}}/> {data.email2}</h4>
                </div>

              }
              {
                data.name3&&
                <div className={classes.table}>
                    <h4 className={classes.style_key}>{data.name3}</h4>
                    <h4 onClick={()=>window.location.href=`mailto: ${data.email3}`} className={classes.value}><BiMailSend style={{color:'black'}}/> {data.email3}</h4>
                </div>

              }
              {
                data.name4&&
                <div className={classes.table}>
                    <h4 className={classes.style_key}>{data.name4}</h4>
                    <h4 onClick={()=>window.location.href=`mailto: ${data.email4}`} className={classes.value}><BiMailSend style={{color:'black'}}/> {data.email4}</h4>
                </div>

              }
              </div>

              </>
          :
          <>
            {
                loading?<div id="loader" style={{width:"100%" ,  textAlign:"center" }}> <p><CircularProgress/></p> </div>:
                <div id="loader" style={{width:"100%" ,  textAlign:"center" }}> <h4>Nothing Found...</h4> </div>
            }</>
          }
          </div>
            <br></br>
            <br></br>
    <Caroufredsel_wrapper data={sponsor}/>

    </div>

    );

}


export default Contact;