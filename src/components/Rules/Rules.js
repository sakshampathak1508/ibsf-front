import axios from 'axios';
import React, { useState } from 'react';
import Header from "../header/Header"
import Rules_Champ from '../Card/Rules_Champ/Rules_Champ';
const Rules = (props) => {
    const [data ,setData] = useState([])
    useState(()=>
    {
        axios.get(`http://billiardsports.in/api/all-rules/`)
        .then((res)=> setData(res.data.data))
        .catch((e)=> console.log(e));
    },[])

    return (
        <>
        
        <Header/>
        <div style={{maxWidth:"1400px" , padding:"2rem" , margin:"auto"}}>
            <h1 style={{textAlign:"center" , fontWeight:"600" , marginBottom:"3rem"}}>IBSF Rules</h1>

            <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>

            {
                data.map((data, index)=>
                (
                    <Rules_Champ key={index} path="all-rules" data ={data}/>
                ))
            }


            </div>

            
        </div>

        </>
    );
};

export default Rules;