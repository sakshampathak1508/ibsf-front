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
import {withStyles , makeStyles } from '@material-ui/core/styles';
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

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      }
    },
  }))(TableRow);


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
        axios.get(`https://billiardsports.in/api/region/?id=${id}`)
        .then((res)=>setContinent(res.data.data))
        .catch((e)=>console.log(e));

        axios.get(`https://billiardsports.in/api/member-countries/?rid=${id}`)
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
            <h3 style={{textAlign:"center", lineHeight:"2.5rem" , fontWeight:"600" ,marginBottom:"3rem"}}>{continent.name}</h3>
            
            <div className="frderation_info_contact" style={{display:"flex" , justifyContent:"space-between"}}>

                <div className="contact" style={{display:"flex" , flexDirection:"column"}}>
                    <p style={{color:"rgba(255 , 0 , 0 , 0.7)"}} onClick={()=>window.location.href=`mailto: ${continent.email_id}`}>  <MailOutlineIcon style={{cursor :"pointer", fontSize:'2.5rem'}}/> Mail</p>
                    <p style={{fontWeight:"600"}} onClick={()=>window.location.href=`tel:${continent.mobile}`}>{continent.contact},<CallIcon style={{color:"green"}}/> <span style={{cursor:"pointer"}}>{continent.mobile}</span></p>
                </div>

                <div className="website">
                    <p  style={{cursor:"pointer" , color:"rgba(0 , 0 , 255 , 0.7)"}} onClick={()=>{window.open(continent.website , 'blank')}}>{continent.website}</p>
                </div>
            </div>
            <hr ></hr>


            <div style={{display:"flex" , flexWrap:"wrap" }}>
                <div style={matches?{width:'100%'}:{width:'60%'}}>
                <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
          
        <TableHead>
        {
              continent.president&&
          <StyledTableRow>
            <TableCell className={classes.key} >President</TableCell>
            <TableCell className={classes.value}  align="right">{continent.president}</TableCell>
          </StyledTableRow>
          }
          {continent.vice_president&&
        <StyledTableRow>
            <TableCell className={classes.key}>Vice President</TableCell>
            <TableCell className={classes.value} align="right">{continent.vice_president}</TableCell>
        </StyledTableRow>
        }
        {continent.secretary&&
        <StyledTableRow>
            <TableCell className={classes.key}>Secretary</TableCell>
            <TableCell className={classes.value} align="right">{continent.secretary}</TableCell>
        </StyledTableRow>
        }
        {continent.treasurer&&
        <StyledTableRow>
            <TableCell className={classes.key}>Treasurer</TableCell>
            <TableCell className={classes.value} align="right">{continent.treasurer}</TableCell>
        </StyledTableRow>
        }
        {continent.exe1&&
        <StyledTableRow>
            <TableCell className={classes.key}>Executive</TableCell>
            <TableCell className={classes.value} align="right">{continent.exe1}</TableCell>
        </StyledTableRow>
        }
        {continent.exe2&&
        <StyledTableRow>
            <TableCell className={classes.key}>Executive</TableCell>
            <TableCell className={classes.value} align="right">{continent.exe2}</TableCell>
        </StyledTableRow>
        }
        {continent.exe3&&
        <StyledTableRow>
            <TableCell className={classes.key}>Executive</TableCell>
            <TableCell className={classes.value} align="right">{continent.exe3}</TableCell>
        </StyledTableRow>
        }
        {continent.exe4&&
        <StyledTableRow>
            <TableCell className={classes.key}>Executive</TableCell>
            <TableCell className={classes.value} align="right">{continent.exe4}</TableCell>
        </StyledTableRow>
        }
        </TableHead>
        </Table>
    </TableContainer>
                </div>

                <div style={matches?{width:'80%',paddingLeft:"auto" , margin:"auto"}:{width:'40%'}}>
                    <img style={{marginLeft:"1rem" , marginTop:"1rem"}} width="100%" src={`https://billiardsports.in/${continent.logo}`}/>
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
            <Lottie options={defaultOptions} style={{marginTop:"2rem" ,marginBottom:"7rem"}}
            height={400} width={350} />
            </>
            )
        }
}

export default MemberCountries;