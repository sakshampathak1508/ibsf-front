import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {useHistory} from'react-router'
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import image1 from "../../assets/example1.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin:'1rem' ,
    cursor:"pointer" , 
    width:"35vw",
    minWidth:"35rem"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '20rem',
    backgroundSize:'contain'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function ContinentCard(props){
  const classes = useStyles();
  const history = useHistory();
  props = props.data

  return (
    <Card className={classes.root}  onClick={()=>history.push(`/member_countries/${props.id}`)}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.name}
          </Typography>
          <Typography variant="h5" color="textSecondary">
            President: {props.president}
          </Typography>
          <Typography variant="h5" color="textSecondary">
          vice_president: {props.vice_president}
          </Typography>
          <Typography variant="h5" color="textSecondary">
          secretary: {props.secretary}
          </Typography>
          <Typography variant="h5" color="textSecondary">
            treasurer: {props.treasurer}
          </Typography>
          {
        
          <Typography variant="h5" color="textSecondary">
            Executive: {props.exe1}
          </Typography>
          }

          { 
          <Typography variant="h5" color="textSecondary">
            Executive: {props.exe2}
          </Typography>

          }
          {
          <Typography variant="h5" color="textSecondary">
            Executive: {props.exe3}
          </Typography>
          }
          <Typography variant="h5" color="textSecondary">
            Executive: {props.exe4}
          </Typography>
          <Typography variant="h5" color="textSecondary">
          Contact: {props.mobile}
          </Typography>
          <Typography variant="h5" color="textSecondary">
          email_id: <strong style={{color:"rgba(255 , 0 , 0 , 0.7)"}} onClick={()=>window.location.href=`mailto: ${props.email_id}`}>{props.email_id}</strong>
          </Typography>
        
          <Typography variant="h5" color="textSecondary" >
          website:<strong style={{color:"rgba(0 , 0 , 255 , 0.7)"}} onClick={()=>{window.open(props.website , 'blank')}}> {props.website}</strong>
        
          </Typography>

          
          
  
        </CardContent>
    
      </div>
      <CardMedia
        className={classes.cover}
        image={`http://billiardsports.in/${props.logo}`}
        title="Live from space album cover"
      />
    </Card>
  );
}
