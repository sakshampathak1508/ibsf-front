import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: "30rem",
    // width:"100%" ,
    marginLeft:"1rem",
    marginRight:"1rem", 
    marginBottom:"2rem"
  },
  media: {
    height:"17rem",
  },
});

export default function ContinentCard(props) {
  const history = useHistory();
  props =props.data
  console.log(props)
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={()=>history.push(`/member_countries/${props.id}/${props.slug}`)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`http://billiardsports.in/${props.logo}`} style={{}}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2" style={{padding:"0"}}>
            {props.short_form}
          </Typography>
          <Typography variant="body2"variant="h5" component="h2" style={{fontSize:"1.5rem"}}>
           {props.name}
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