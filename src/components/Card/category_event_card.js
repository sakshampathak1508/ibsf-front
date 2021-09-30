import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {BsArrowRight} from "react-icons/bs"
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    minWidth: 220,
    maxWidth:320,
    marginLeft:"0.2rem",
    marginRight:'3rem',
    marginBottom:"1rem",
    boxShadow:"0px 1px 1px -1px rgb(0 0 0 / 30%), 0px 1px 1px 0px rgb(0 0 0 / 4%), 0px 1px 3px 0px rgb(0 0 0 / 42%)",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: "1.8rem",
    fontWeight:"600",
    lineHeight:"2rem"
  },
  info:
  {
    display:"flex",
    width:"100%",
    marginBottom: "0.7rem",
  },
  pos: {
    fontSize:"1.5rem",
    width:"70%",
    fontWeight:"500",
  },
  highlight:
  {
    fontSize:"1.3rem",
    fontWeight:"500",
    color:"rgb(13, 161, 255)",
    marginRight:'0.5rem',
    width:"30%"
  }
});

export default function Category_event_card(props) {
  const history = useHistory();
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    props= props.data;


    return (
    <Card className={classes.root}>
    <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
            {props.name}
        </Typography>
        <Typography variant="h5" style={{marginLeft:"auto" , marginBottom:"1.5rem" , width:"max-content"}}>
          -{props.location}
        </Typography>
        <div className={classes.info}>
        <Typography className={classes.highlight}>
            Venue:
        </Typography>

        <Typography className={classes.pos}>
          {props.venue}
        </Typography>
        
          </div>
      
          <div className={classes.info}>
        <Typography className={classes.highlight}>
          Start Date:   
        </Typography>

        <Typography className={classes.pos}>
          {props.start_date}
        </Typography>
        
          </div>

          <div className={classes.info}>
        <Typography className={classes.highlight}>
            Finish:
        </Typography>

        <Typography className={classes.pos}>
          {props.end_date}
        </Typography>
        
          </div>
      </CardContent>
      <CardActions style={{float:"right" , paddingTop:"0"}}>
        <Button onClick={()=> history.push(`/events/${props.id}/${props.slug}`)} size="medium"><BsArrowRight fontSize="2.3rem"/></Button>
      </CardActions>
    </Card>
  );
}
