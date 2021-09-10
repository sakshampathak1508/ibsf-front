import React, { useEffect, useState } from 'react';
import ExecutiveCard from "../Card/ExecutiveCard.js"
import Header from "../header/Header"
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
function ExecutiveMember(props) {
    const [data, setData]= useState([]);
    const [loading , setloading] = useState(true);

    useEffect(()=>
    {
        axios.get('https://billiardsports.in/api/executives/')
        .then((res)=>
        {setData(res.data.data)
            setloading(false)
        })
        .catch((e)=>console.log(e))

    } ,[])
    return (
        <>
        <Header active="aboutus"/>
        <div style={{maxWidth:"1300px" , padding:"2rem" , margin:"auto"}}>
        <h1 style={{ fontWeight:"600" , marginBottom:"3rem"}}>Executives</h1>

        {
        data.length!=0 ?


        <div style={{display:"flex"  ,  flexWrap:"wrap"}}>

            {
                data.map((data , index)=>(
                    <>
                <ExecutiveCard data={data}/>
                </>
                ))
            }
        </div>
        :
        <>
        {
            loading?<div id="loader" style={{width:"100%" ,  textAlign:"center" }}> <p><CircularProgress/></p> </div>:
            <div id="loader" style={{width:"100%" ,  textAlign:"center" }}> <h4>Nothing Found...</h4> </div>
        }
        </>
        }
        </div>
        </>
    
    );
}

export default ExecutiveMember;