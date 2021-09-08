import axios from 'axios';
import React, { useState } from 'react';
import Header from "../header/Header"
import Rules_Champ from '../Card/Rules_Champ/Rules_Champ';
import CircularProgress from '@material-ui/core/CircularProgress';
const Rules = (props) => {
    const [data ,setData] = useState([])
    const [loading, setloading]=useState(true)
    useState(()=>
    {
        axios.get(`http://billiardsports.in/api/allchamps/`)
        .then((res)=> {
        setData(res.data.data)
        setloading(false)
        })
        .catch((e)=> console.log(e));
    },[])

    return (
        <>
        
        <Header active="aboutus"/>
        <div style={{maxWidth:"1400px" , padding:"2rem" , margin:"auto"}}>
            <h1 style={{textAlign:"center" , fontWeight:"600" , marginBottom:"3rem"}}>PAST CHAMPIONS</h1>

            <div style={{display:"grid" ,gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" ,justifyContent:"center"}}>

            {
                data.map((data, index)=>
                (
                    
                    <Rules_Champ key={index} path="champion" data ={data}/>
                    
                ))
            }
            {loading && <div id="loader" style={{width:"100%" ,  textAlign:"center" }}> <CircularProgress/> </div>}

            </div>

            
        </div>

        </>
    );
};

export default Rules;