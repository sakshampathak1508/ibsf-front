import React , {useState , useEffect, createElement} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Posts from './Post';
import Pagination from './Pagination';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Header from "../header/Header"
import Card from '../Card/Card';
import "./NewsGallery.css"
import { CodeSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  formControl: {
    
    minWidth:150,
    // marginLeft:"2rem"
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));


function NewsGallery() {

const [state, setState] = useState('all')
const [data , setdata] = useState();
const [latest_year , setLatestyear] = useState(13);  
const classes = useStyles();

useEffect(() => {
  var currentyear = new Date().getFullYear();
  
  
    var select = document.getElementById('outlined-age-native-simple')

    if(select[1]===undefined)
    {
    for(let i = currentyear; i>=2013;i--)
    {

    
    var option = document.createElement("option");
option.text = i.toString();
option.value = i;
console.log(option)
  select.appendChild(option)
    }

    }

  } ,[]);

  useEffect(()=>
  {

    if(state==='all')
    {
    axios.get(`http://billiardsports.in/api/news/${state}/`).
    then((res)=>setdata(res.data.data))
    .catch((e)=> console.log(e));
    }
    else
    {
    axios.get(`http://billiardsports.in/api/news/year/?year=${state}`).
    then((res)=>setdata(res.data.data))
    .catch((e)=> console.log(e));
    }




  } , [state])

  const handleChange = (event) => {
    setState(event.target.value);
  };
    return (

      <div className="news-gallery">
        <Header active="news"/>
        

        <div style={{maxWidth:"1400px" , padding:"2rem"   ,marginLeft:"auto" , marginRight:"auto"}}>
    
        <h1> IBSF News</h1>
<div className="news-gallery-search_bar">
<FormControl className="news_gallery" variant="outlined" className={classes.formControl} >
        <InputLabel  className="news_gallery-input-label"  htmlFor="outlined-year-native-simple">Year</InputLabel>
        <Select
          native
          className="input-label-select"
          value={state}
          onChange={handleChange}
          label="Year"
          inputProps={{
            name: 'year',
            id: 'outlined-age-native-simple',
          }}
        >

<option className="input-label-option"   value="all" >All</option>
        </Select>
      </FormControl>

      {
        state!=='all'?
      <p>News in the <span style={{color:"#0da1ff"}}>{state}</span> year are -</p>
      :<p>Showing all the News.</p>
      }



</div>

          <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center" ,marginTop:"2rem"}}>

          

        {
          data && data.map((val , index)=>
          (
              <Card key={index} data={val}/>
          ))
        }

          </div>
        
            </div>

        </div>
    );
}

export default NewsGallery;