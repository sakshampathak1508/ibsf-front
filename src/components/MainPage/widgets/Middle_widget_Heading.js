import {IoIosArrowForward } from 'react-icons/io'
import { useHistory } from 'react-router-dom'



const Middle_widget_Heading=(props)=>
{
  const history = useHistory()
  return(
    <>
    <div className="middle_widget_header">
        <h3>{<props.icon/>} {props.text}</h3>
        {
          props.text==="Upcoming Events"&&
        <p style={{cursor:"pointer"}} onClick={()=> history.push(`/${props.link}`)}>View All {<IoIosArrowForward/>}</p>
        }
    </div>
    </>
  )
}

export default Middle_widget_Heading