import React, { useEffect, useState } from 'react';
import ContinentCard from '../Card/ContinentCard';
import image1 from "../../assets/example3.jpg"
import { useLocation, useParams } from 'react-router-dom';
import Header from '../header/Header';
import MemberCountry from "../Card/MemberCountry"
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import animationData from "../../assets/search_file.json"
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Lottie from 'react-lottie';

const useStyles = makeStyles({
    key:
    {
        fontSize:"1.4rem",
        fontWeight:"600" ,
    },
    value:
    {
        fontSize:"1.4rem" ,
    }
});


function MemberCountries() {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:723px)');

    const [continent , setContinent] =useState("");
    const [related_country  , setCountry]=useState("");
    const location =  useLocation()
    const {id} = useParams()
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
   

    useEffect(() =>
    {
        axios.get(`http://billiardsports.in/api/region/?id=${id}`)
        .then((res)=>setContinent(res.data.data))
        .catch((e)=>console.log(e));

        axios.get(`http://billiardsports.in/api/member-countries/?rid=${id}`)
        .then((res)=>setCountry(res.data.data))
        .catch((e)=>console.log(e))

    }, [])

    if(continent && related_country.length!=0)
    {
        return (
        <>
        <Header active="aboutus"/>
        
        <div style={{maxWidth:'110rem' , margin:"auto"}}>

        <div className="federation_info" style={{maxWidth:"70rem", padding:"2rem" , margin:"auto"}}>
            <h3 style={{textAlign:"center" ,marginBottom:"2rem"}}>International Billiards & Snooker Federation</h3>
            
            <div className="frderation_info_contact" style={{display:"flex" , justifyContent:"space-between"}}>

                <div className="contact" style={{display:"flex" , flexDirection:"column"}}>
                    <p style={{color:"rgba(255 , 0 , 0 , 0.7)"}} onClick={()=>window.location.href=`mailto: ${continent.email_id}`}>  <MailOutlineIcon style={{cursor :"pointer", fontSize:'2.5rem'}}/> Mail</p>
                    <p style={{fontWeight:"600"}} onClick={()=>window.location.href=`tel:${continent.mobile}`}>{continent.contact},<CallIcon style={{color:"green"}}/> <span style={{cursor:"pointer"}}>{continent.mobile}</span></p>
                </div>

                <div className="website">
                    <p  style={{cursor:"pointer" , color:"rgba(0 , 0 , 255 , 0.7)"}} onClick={()=>{window.open(continent.website , 'blank')}}>{continent.website}</p>
                </div>
            </div>
            <hr style={{border:"0", backgroundImage:"linear-gradient(to right,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0))"}}></hr>


            <div style={{display:"flex" , flexWrap:"wrap" }}>
                <div style={matches?{width:'100%'}:{width:'60%'}}>
                <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
          
        <TableHead>
        {
              continent.president&&
          <TableRow>
            <TableCell className={classes.key} >President</TableCell>
            <TableCell className={classes.value}  align="right">{continent.president}</TableCell>
          </TableRow>
          }
          {continent.vice_president&&
        <TableRow>
            <TableCell className={classes.key}>Vice President</TableCell>
            <TableCell className={classes.value} align="right">{continent.vice_president}</TableCell>
        </TableRow>
        }
        {continent.secretary&&
        <TableRow>
            <TableCell className={classes.key}>Secretary</TableCell>
            <TableCell className={classes.value} align="right">{continent.secretary}</TableCell>
        </TableRow>
        }
        {continent.treasurer&&
        <TableRow>
            <TableCell className={classes.key}>Treasurer</TableCell>
            <TableCell className={classes.value} align="right">{continent.treasurer}</TableCell>
        </TableRow>
        }
        {continent.exe1&&
        <TableRow>
            <TableCell className={classes.key}>Executive</TableCell>
            <TableCell className={classes.value} align="right">{continent.exe1}</TableCell>
        </TableRow>
        }
        {continent.exe2&&
        <TableRow>
            <TableCell className={classes.key}>Executive</TableCell>
            <TableCell className={classes.value} align="right">{continent.exe2}</TableCell>
        </TableRow>
        }
        {continent.exe3&&
        <TableRow>
            <TableCell className={classes.key}>Executive</TableCell>
            <TableCell className={classes.value} align="right">{continent.exe3}</TableCell>
        </TableRow>
        }
        {continent.exe4&&
        <TableRow>
            <TableCell className={classes.key}>Executive</TableCell>
            <TableCell className={classes.value} align="right">{continent.exe4}</TableCell>
        </TableRow>
        }
        </TableHead>
        </Table>
    </TableContainer>
                </div>

                <div style={matches?{width:'80%', margin:"auto"}:{width:'40%'}}>
                    <img width="100%" src={`http://billiardsports.in/${continent.logo}`}/>
                </div>

            </div>

            

        </div>
        <br></br>
        <hr style={{border:"0", backgroundImage:"linear-gradient(to right,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0))" , marginTop:'-1rem' , marginBottom:"0"}}></hr>

    
        <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center"  ,width:"100%" , height:"auto" , padding:"2rem 5rem"}}>

            {
                related_country&&related_country.map((data  , index)=>
                (
                    <MemberCountry key ={index} data ={data}/>
                ))
            
            }
            
        </div>
        </div>
        </>
        );
    }
        else
        {
            return(<>
            <Header/>
            <Lottie options={defaultOptions} style={{marginTop:"2rem"}}
            height={400} width={350} />
            </>
            )
        }
}

export default MemberCountries;