import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Header from '../header/Header';
import Card from "../Card/Card"
import CircularProgress from '@material-ui/core/CircularProgress';

const NewsbyTag = props => {
    const {tagname } =useParams();
    const [databytagname , setdata] =useState([]);
    const [loading , setloading] = useState(true); 


    useEffect(()=>
    {
    axios.get(`http://billiardsports.in/api/news/tags/?tag=${tagname}`).
    then((res)=>
    {
        setloading(false);
        setdata((res.data.data))
    })
    .catch((e)=>console.log(e));


    } , [])

    console.log(databytagname)
    return (
        <div>
            <Header active="news"/>

            <div style={{maxWidth:"1400px" , padding:"2rem"   ,marginLeft:"auto" , marginRight:"auto"}}>
                <h1 style={{textAlign:"center", marginBottom:"4rem"}}>News by <span style={{backgroundColor:"#0da1ff" ,padding:"0.5rem"  , color:"white"}}>{tagname}</span></h1>
                <div style={{height:"auto",display:"flex" , flexWrap:"wrap" , justifyContent:"center" ,marginTop:"2rem" }}>
                {
                    databytagname.map((data , index)=>
                    (
                        <Card key ={index} data={data} />
                    ))
                }
                {(loading) && <div id="loader" style={{width:"100%" ,  textAlign:"center" }}> <CircularProgress/> </div>}


                </div>

                </div>
        
        </div>
    );
};


export default NewsbyTag;