import {IoIosArrowForward } from 'react-icons/io'
import { useHistory } from 'react-router-dom'
import React, { Component }  from 'react';


const Middle_widget_Heading=(props)=>
{
  const history = useHistory()
  return(
    <>
    <div className="middle_widget_header">
        <h3><span style={{fontSize:'1.8rem'}}>{<props.icon/>} </span> {props.text}</h3>
        {
          props.text==="FUTURE CHAMPIONSHIPS"&&
        <p style={{cursor:"pointer"}} onClick={()=> history.push(`/${props.link}`)}>View All {<IoIosArrowForward/>}</p>
        }
    </div>
    </>
  )
}

export default Middle_widget_Heading