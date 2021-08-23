import React, { useEffect, useState } from 'react';
import ContinentCard from '../Card/ContinentCard';
import image1 from "../../assets/example3.jpg"
import { useLocation, useParams } from 'react-router-dom';
import Header from '../header/Header';
import MemberCountry from "../Card/MemberCountry"
import axios from 'axios';

function MemberCountries() {

    const [country , setCountry] =useState();
    const location =  useLocation()
    const {id} = useParams()

    useEffect(() =>
    {
        axios.get(`http://billiardsports.in/api/member-countries/?rid=${id}`)
        .then((res)=>setCountry(res.data.data))

    }, [])

    console.log(country)
    return (
        <>
        <Header/>
        <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center"  ,width:"100%" , height:"auto" , padding:"2rem 5rem"}}>

            {
                country&&country.map((data  , index)=>
                (
                    <MemberCountry key ={index} data ={data}/>
                ))
            
            }
            
        </div>

        </>
    );
}

export default MemberCountries;