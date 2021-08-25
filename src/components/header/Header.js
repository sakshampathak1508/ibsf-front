import React, { useState  , useEffect} from 'react';
import "./Header.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { useHistory } from 'react-router-dom';
import IBSF_LOGO from "../../assets/IBSF_LOGO.png"
import 'bootstrap/dist/css/bootstrap.css'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
  },
  input: {
    // marginLeft: theme.spacing(1),
    // size:"1rem"
    // flex: 1,
    padding:"1rem",

  },
  iconButton: {
    padding: 10,
    fontSize:'1rem',
    border:'none',
    outline:'none'
  },




}));


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function Header({active}) {
  const history = useHistory();
  const classes = useStyles();
  const [navbar , setNavbar] = useState(false);
  



    return (
      
      <header className = "MainHeader">
      <div className="pre-header">
      <div className="ui container" style={{}}>
        <img
          className="ui_small_image"
          src={IBSF_LOGO}
          onClick={()=>history.push("/")}
          style={{objectFit:"contain" , position:"absolute" }}
          
        />
      </div>
    </div>

      <div className="parent_topnav">
    <div className="topnav" id="myTopnav">
      <div className="ui container" style={{backgroundColor: ""}}>
        <a className="" onClick={()=>history.push("/")} style={active == "home" ? { color: "#0da1ff"}:{}} >Home </a>
        <a className="" onClick={()=>history.push("/news/")} style={active == "news" ? { color: "#0da1ff"}:{}}>News</a>
        <a className="" onClick={()=>history.push("/")}>Results</a>
        <a className="" onClick={()=>history.push("/")}>Calendar</a>

        <div className="dropdown">
          <button className="dropbtn" onClick={()=>history.push("/aboutus")} style={active == "aboutus" ? { color: "#0da1ff"}:{}}>
            About Us
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a className="" onClick={()=>history.push("/executive_member")}>IBSF Executives</a>
            <a className=""  onClick={()=>history.push("/member_countries")}>Member Countries</a>
            <a className="" onClick={()=>history.push("/past_champion")}>Past Champions</a>
            <a className="">Downloads</a>
            <a className="" onClick={()=>history.push("/rules")}>Rules of Snooker</a>
          </div>
        </div>

        <a className="#home">Women Ranking</a>
        <a className="#home">Coaching</a>


        <div className="dropdown">
          <button className="dropbtn">
            Gallery's
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Photographs</a>
          </div>
        </div>
        
        <a href="#about">Contacts</a>
        
      
        <div className="search-container">


        <Paper component="form" className={classes.root}>
      
      <InputBase
        className={classes.input}
        className="header_input"
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
        
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon style={{fontSize:"2rem" , outline:"none" , border:"none"}} />
      </IconButton>
      
    </Paper>


        </div>
        <a
          style={{fontSize: "15px"}}
          className="icon"
          onClick={myFunction}
          >&#9776;</a>
      </div>


      
    </div>
    </div>
      </header>
      
    );
}

export default Header;