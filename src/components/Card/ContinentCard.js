import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "30rem",
    marginLeft:"1rem",
    marginRight:"1rem", 
    marginBottom:"2rem",
    // padding: "2rem"
  },
  media: {
    height:"17rem",
  },
});

export default function ContinentCard(props) {
  const history = useHistory();
  props =props.data
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={()=>history.push(`/member_countries/${props.id}/${props.slug}`)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://admin.ibsf.info/${props.image}`} style={{backgroundSize:"contain"}}
          title="Contemplative Reptile"
        />
        <CardContent>
        
          <Typography variant="body2"variant="h5" component="h1" style={{marginTop:"0.5rem" , fontSize:"1.7rem"}}>
           {props.body_name}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions style={{float:"right"}}>
        <Button size="small" color="primary" style={{fontSize:"1.5rem" , margin:0}}>
          Go
        </Button>
      </CardActions> */}
    </Card>
  );
}