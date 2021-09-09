import React, { useEffect, useState } from 'react';
import ContinentCard from '../Card/ContinentCard';
import image1 from "../../assets/example3.jpg"
import Header from '../header/Header';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

function MemberContinent() {

    const [country , setCountry] =useState([]);
    const [loading, setloading]=useState(true)

    useEffect(() =>
    {
        axios.get('https://billiardsports.in/api/all-regions/')
        .then((res)=>
        {
            setCountry(res.data.data)
            setloading(false)
        })

    }, [])
    
    return (
        <>
        <Header active="aboutus"/>

        
        <div style={{maxWidth:"1400px"  , margin:"auto"}}>

        {
    country.length!=0 ?
        <div style={{display:"flex" ,flexWrap:"wrap" ,justifyContent:"center", textAlign:"center"  , padding:"4rem" }}>

            {
                country&&country.map((data  , index)=>
                (
                    <ContinentCard data={data}/>
                ))
            
            }
            
        </div>
        :
        <>
        {
        loading?<div id="loader" style={{width:"100%" , marginTop:"5rem" ,  textAlign:"center" }}> <p><CircularProgress/></p> </div>:
        <div id="loader" style={{width:"100%" ,  textAlign:"center" }}> <h4>Nothing Found...</h4> </div>
        }
        </>
        }

        </div>
        </>
    );
}

export default MemberContinent;