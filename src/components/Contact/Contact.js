import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {GoLocation , GoCreditCard , GoPerson} from 'react-icons/go'
import {BsFillPersonFill} from 'react-icons/bs'
import Header from '../header/Header'
import Caroufredsel_wrapper from '../Carousel/Caroufredsel_wrapper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      // paddingLeft:"3rem",
      // paddingRight:"3rem"
    },
    body: {
      fontSize: "1.2rem",
      fontWeight:"600"
      // paddingLeft:"3rem",
      // paddingRight:"3rem"
    }
    
  
  }))(TableCell);

  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      }
    },
  }))(TableRow);


  const useStyles = makeStyles({
    table: {
    //   minWidth: 320,
      maxWidth:"1000px",
      margin:"auto",
      fontSize:"4rem"
    },
    style_key:
    {
        width:"3rem",
        border:"0",
        fontSize:"4rem",
        background:"rgb(0, 153, 248 , 0.6)"
    },
    latest_event:
    {
      '&:hover':
      {
        color:"rgb(13, 161, 255)",
        cursor:"pointer",
        transition:"color 500ms"
      }
    }
  });
  


const Contact = props => {
    const [data, setdata] = useState([])
    const history = useHistory()
    const classes = useStyles();
    const [sponsor , setSponsor] = useState([])
    useEffect(()=>
    {
        axios.get('http://billiardsports.in/api/contact/')
        .then((res)=> setdata(res.data.data))
        .catch((e)=>console.log(e))


        
        axios.get("http://billiardsports.in/api/sponsers/")
        .then((response) => setSponsor(response.data.data))




    }, [])
    return (
        <div>
            <Header active="contactus"/>
            
            <div style={{background:"#0067b8" , padding:"2rem 0rem 2rem 2rem"}}>
                <h3 style={{width:"80%" , color:"white" , display:'inline-block' ,margin:'auto' , maxWidth:"1400px"}}>Contact IBSF</h3>
            </div>

            <br></br>
            <TableContainer style={{borderRadius:"0"  , maxWidth:"75rem" , margin:"auto"}} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        
        <TableBody>
          
            <StyledTableRow>
              <StyledTableCell  className={classes.style_key}  align="left">
                
              </StyledTableCell>
              <StyledTableCell className={classes.latest_event} align="left">Address <GoLocation/></StyledTableCell>
              <StyledTableCell align="right">{data.address}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell  className={classes.style_key} align="left">
                
              </StyledTableCell>
              <StyledTableCell className={classes.latest_event}  align="left">Bank Details <GoCreditCard/></StyledTableCell>
              <StyledTableCell align="right">{data.bank_details}</StyledTableCell>
            </StyledTableRow>


            {
                data.name1 &&
            <StyledTableRow>
              <StyledTableCell  className={classes.style_key} align="left">
                
              </StyledTableCell>
              <StyledTableCell className={classes.latest_event} align="left">{data.name1} <BsFillPersonFill/></StyledTableCell>
              <StyledTableCell align="right">{data.email1}</StyledTableCell>
            </StyledTableRow>
            }

            {
                data.name2&&
            <StyledTableRow>
              <StyledTableCell  className={classes.style_key} align="left">
                
              </StyledTableCell>
              <StyledTableCell className={classes.latest_event} align="left">{data.name2} <BsFillPersonFill/></StyledTableCell>
              <StyledTableCell align="right">{data.email2}</StyledTableCell>
            </StyledTableRow>
            }
            {
                data.name3 &&
            <StyledTableRow>
              <StyledTableCell  className={classes.style_key} align="left">
                
              </StyledTableCell>
              <StyledTableCell className={classes.latest_event} align="left">{data.name3} <BsFillPersonFill/></StyledTableCell>
              <StyledTableCell align="right">{data.email3}</StyledTableCell>
            </StyledTableRow>

            }
            {data.name4 &&
            <StyledTableRow>
              <StyledTableCell  className={classes.style_key} align="left">
                
              </StyledTableCell>
              <StyledTableCell className={classes.latest_event} align="left">{data.name4} <BsFillPersonFill/></StyledTableCell>
              <StyledTableCell align="right">{data.email4}</StyledTableCell>
            </StyledTableRow>

            }

        </TableBody>
      </Table>
    </TableContainer>
            <br></br>
    <Caroufredsel_wrapper data={sponsor}/>

    </div>

    );

}


export default Contact;