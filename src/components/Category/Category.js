import React ,{useEffect  ,useState} from 'react';
import { useHistory, useParams } from 'react-router';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Header from '../header/Header';
import Category_Event from './Category_Event'
import Category_News from './Category_News';
import './Category.css'
const useStyles = makeStyles((theme) => ({
    formControl: {
      
      minWidth:150,
      marginRight:"1rem"
    },
    formControlType:
    {
        minWidth:150
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
    table: {
      // maxWidth:"400px"
      fontSize:"1.2rem"
    },
    style_key:{
      border:0
  }
    
  }));
  


const Category = props => {
    var category;
    const [stateType, setStateType] = useState('News')
    const history = useHistory()
    const classes = useStyles();
    const {id} =  useParams();

    if(id==1)
    category='World Snooker';
    else
    if(id==2)
    category='World Billiards'
    else
    if(id==3)
    category='World 6Reds';
    else
    if(id==4)
    category='World Team';
    else
    if(id==5)
    category='World U21';
    else
    if(id==6)
    category='World U18';
    else
    if(id==7)
    category='World U17';
    else
    if(id==8)
    category='World U16';
    else
    if(id==9)
    category='World Cup';
    const handleChangeType = (event) => {
        setStateType(event.target.value);
    };

    

    return (
        <div>
            
            <Header active={stateType==='Event'?"events":"news"}/>
            <div className="category" style={{maxWidth:"1400px" , padding:"2rem",margin:"auto" }}>
    
    <div style={{display:"flex" , padding:"2rem"}}>
    <h1> {category}</h1>
<div className="category_search">

  <FormControl  variant="outlined" className={classes.formControlType} >
    <InputLabel  className="news_gallery-input-label"  htmlFor="outlined-year-native-simple">Type</InputLabel>
    <Select
      native
      className="input-label-select"
      value={stateType}
      onChange={handleChangeType}
      label="type"
      inputProps={{
        name: 'type',
        id: 'outlined-age-native-simple',
      }}
    >

<option className="input-label-option"   value="Event" >Event</option>
<option className="input-label-option"   value="News" >News</option>
    </Select>
  </FormControl>


    </div>

      </div>

      <br></br>

        {
            stateType==="Event"?<Category_Event/>:<Category_News/>
        }

        </div>
        </div>
    );
};

export default Category;