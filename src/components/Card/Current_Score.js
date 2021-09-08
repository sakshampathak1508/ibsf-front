import React from 'react';
import "./Current_Score.css";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    disable_link: {
    
    color: 'grey',
    
    },
    link:
    {
        color:"white"
    },
    live:
    {
        color:'#FF0000',

    },
    submit_entry:
    {
        color:'yellow'
    }
  });



function Current_Score(props) {
    const classes=useStyles();

    function Decide()
    {
        

        if(props.title.toLowerCase()==='live')
        return(
    <div className="overlap_text">
        <h3 className={props.url!=null?classes.live:classes.disable_link}>{props.title}</h3>
    </div>)
    else
    if(props.title.toLowerCase()==='submit entry')
    return(
    <div className="overlap_text">
    <h3 className={props.url!=null?classes.submit_entry:classes.disable_link}>{props.title}</h3>
</div>)
    else
    return(
    <div className="overlap_text">
    <h3 className={props.url!=null?classes.link:classes.disable_link}>{props.title}</h3>
</div>)
    }
    

    return (
        <div className="current_score" onClick={()=>{props.url && window.open(props.url , 'blank')}} style={{backgroundImage:`url(${props.image}` , backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>

            <div className="overlap_div">

            <Decide/>
            </div>

            
        </div>
    );
}

export default Current_Score;