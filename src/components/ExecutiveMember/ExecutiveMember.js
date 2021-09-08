import React, { useEffect, useState } from 'react';
import ExecutiveCard from "../Card/ExecutiveCard.js"
import image1 from "../../assets/example2.jpg"
import Header from "../header/Header"
import axios from 'axios';
function ExecutiveMember(props) {
    const [data, setData]= useState([]);

    useEffect(()=>
    {
        axios.get('http://billiardsports.in/api/executives/')
        .then((res)=>setData(res.data.data))
        .catch((e)=>console.log(e))

    } ,[])
    return (
        <>
        <Header active="aboutus"/>
        <div style={{display:"flex"  ,  flexWrap:"wrap" , margin:"2rem"}}>

            {
                data.map((data , index)=>(
                    <>
                <ExecutiveCard data={data}/>
                <ExecutiveCard data={data}/>
                </>
                ))
            }
        </div>
        </>
    );
}

export default ExecutiveMember;