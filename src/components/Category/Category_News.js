import React, { useEffect , useState } from 'react';


import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import { useParams } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '../Card/Card'


const useStyles = makeStyles(() => ({
    center: {
      textAlign: "center",
    },
    SearchBar: {
      margin: "24px 0 28px 360px",
    },
  }));

const Category_Event = props => {
    const classes = useStyles()
    const [data  , setdata] = useState([]);
    const {id} = useParams();
    const [loading , setloading] = useState(false);
    const [bottom, setBottom] = useState(false)
    const [page , setPage] = useState(1);

    console.log(id);


    // useEffect(()=>
    // {
    //     axios.get(`http://billiardsports.in/api/category/?num=${page}&category=${id}&type=event`)
    //     .then((res)=> setdata(res.data.data.event))
    //     .catch((e)=>console.log(e));

    // } , [])

    useEffect(()=>
    {
  
    
        if(page===1){
        setdata([])
        setBottom(false);
  
        }
        setloading(true)
      axios.get(`http://billiardsports.in/api/category/?num=${page}&category=${id}&type=news`).
      then((res)=>setdata((prev)=> {
        if(res.data.data.news.length===0)
        setBottom(true)
  
        setloading(false)
        return (prev.concat(res.data.data.news))}))
      .catch((e)=> console.log(e));
    } , [page ,id])


    const handleScroll = (e) => {

        const {scrollTop , clientHeight , scrollHeight} = e.currentTarget
    
        if(clientHeight + scrollTop + 300 >= scrollHeight && bottom!=true && loading==false)
            {
                
    
                  
                        
                        setloading(true)
                        setPage((prev)=>  prev+1)
                
                    
                return
                  
            }
    
    
    
      }
    

    console.log(data);
    return (
        
        <div onScroll={handleScroll} style={data.length!=0 ? {height:"60vh" ,paddingTop:"1rem" ,overflow:"scroll"}:{height:"auto"}} className="news-gallery">
            <Grid item container>
          
            <div  style={{display:"flex" ,paddingLeft:"2rem"   , flexWrap:"wrap"}}>
                
                {
                    data.map((raw ,index)=>
                    (
                        <>
                    
                        <Card key={index} data = {raw}/>
                        {/* <Category_news_card key={index} data = {raw}/> */}
                        </>
                    ))

                } 

              </div>
        {
          data.length==0 && loading==false && <div style={{width:'100%', textAlign:"center"}}><h3>Nothing Found...</h3></div>
        }
{(loading && bottom!=true) && <div id="loader" style={{width:'100%', textAlign:"center"}}> <CircularProgress/> </div>}
            
      
        
            </Grid>
            
        </div>
    );
};


export default Category_Event;