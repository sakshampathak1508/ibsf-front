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
import CircularProgress from '@material-ui/core/CircularProgress';
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
const [data , setdata] = useState([]);
const classes = useStyles();
const [page, setpage]= useState(1)
const [loading, setloading]=useState(false)
const [preload, setpreload]=useState()
const [bottom, setBottom] = useState(false)

useEffect(() => {
  var currentyear = new Date().getFullYear();
  

    var select = document.getElementById('outlined-age-native-simple')

    while(select.firstChild)
    {
      select.removeChild(select.lastChild);
    }
    let Alloption = document.createElement('option');
    Alloption.text = "All";
    Alloption.value="all";
    select.appendChild(Alloption)
    for(let i = currentyear; i>=2013;i--)
    {

    
  let option = document.createElement("option");
option.text = i.toString();
option.value = i;
  select.appendChild(option)
    }
  } ,[]);

  useEffect(()=>
  {

    if(state==='all')
    {
      if(page===1){
      setdata([])
      setBottom(false);

      }
      setloading(true)
    axios.get(`http://billiardsports.in/api/news/${state}/?num=${page}`).
    then((res)=>setdata((prev)=> {
      console.log(res.data.data)
      if(res.data.data.length===0)
      setBottom(true)

      setloading(false)
      return (prev.concat(res.data.data))}))
    .catch((e)=> console.log(e));
    }
    else
    {
      setdata([]);
      setpage(1)
      setBottom(false)
      setloading(true)
    axios.get(`http://billiardsports.in/api/news/year/?year=${state}`).
    then((res)=>
    {setdata(res.data.data)
      setloading(false)
      setBottom(true)
    })
    .catch((e)=> console.log(e));
    }




  } , [state , page])

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleScroll = (e) => {
    if(state!='all')
    return
    const {scrollTop , clientHeight , scrollHeight} = e.currentTarget

    console.log("Here"  ,scrollTop + clientHeight + 200 , scrollHeight);
    if(clientHeight + scrollTop + 300 >= scrollHeight && bottom!=true && loading==false)
        {
            

              
                    
                    setloading(true)
                    setpage((prev)=>  prev+1)
                
            return
              
        }



  }

  console.log( data)
    return (

      <div onScroll={handleScroll} style={{height:"100vh" , overflow:"scroll"}}className="news-gallery">
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
      :<p>Showing <span style={{color:"#0da1ff"}}>{state}</span> the News.</p>
      }



</div>

          <div style={{height:"auto",display:"flex" , flexWrap:"wrap" , justifyContent:"center" ,marginTop:"2rem" }}>

        
          

        {
          data && data.map((val , index)=>
          (
            <>
              <Card key={index} data={val}/>
              {/* <Card key={index} data={val}/> */}
              </>
          ))

          
        }
        

{(loading && bottom!=true) && <div id="loader" style={{width:"100%" ,  textAlign:"center" }}> <CircularProgress/> </div>}



          </div>
        
            </div>

        </div>
    );
}

export default NewsGallery;