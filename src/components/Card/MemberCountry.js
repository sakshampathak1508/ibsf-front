import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin:'1rem' ,
    cursor:"pointer" , 
    width:"50rem",
  },
  key:
  {
    color:'black'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 180,
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

export default function MemberCountry(props){

    
  const classes = useStyles();

  props= props.data
  return (
    <Card className={classes.root}>

<CardMedia
        className={classes.cover}
        image={`https://billiardsports.in/${props.logo}`}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.name}
          </Typography>
          <Typography component="h5" variant="h6">
            {props.federation}
          </Typography>
        
          {
            props.president&&
          <Typography variant="h5" color="textSecondary">
            <span className={classes.key}>President</span>: {props.president}
          </Typography>
          }
          {
            props.secretary &&
          <Typography variant="h5" color="textSecondary">
          <span className={classes.key}>secretary</span>: {props.secretary}
          </Typography>
          }
          {
            props.email_id &&
          <Typography variant="h5" color="textSecondary">
          <span className={classes.key}>Email</span>: <strong style={{color:"rgba(255 , 0 , 0 , 0.7)"}} onClick={()=>window.location.href=`mailto: ${props.email_id}`}>{props.email_id}</strong>
          </Typography>
          }
          {
            props.website&&
          <Typography variant="h5" color="textSecondary" >
          <span className={classes.key}>Website</span>:<strong style={{color:"rgba(0 , 0 , 255 , 0.7)"}} onClick={()=>{window.open(props.website , 'blank')}}> {props.website}</strong>
          </Typography>
          }

          
          
  
        </CardContent>
    
      </div>
  
    </Card>
  );
}
