import React, { useEffect, useState } from 'react';
import ContinentCard from '../Card/ContinentCard';
import image1 from "../../assets/example3.jpg"
import Header from '../header/Header';
import axios from 'axios';

function MemberContinent() {

    const [country , setCountry] =useState();

    useEffect(() =>
    {
        axios.get('http://billiardsports.in/api/all-regions/')
        .then((res)=>setCountry(res.data.data))

    }, [])
    
    return (
        <>
        <Header active="aboutus"/>
        <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center"  ,width:"100%" , height:"auto" , padding:"2rem 2rem"}}>

            {
                country&&country.map((data  , index)=>
                (
                    <ContinentCard data={data}/>
                ))
            
            }
            
        </div>

        </>
    );
}

export default MemberContinent;