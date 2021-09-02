import React ,{useEffect , useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    // paddingLeft:"3rem",
    // paddingRight:"3rem"
  },
 

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    }
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1', 159, 6.0, 24, 4.0),
  createData('2', 237, 9.0, 37, 4.3),
  createData('3', 262, 16.0, 24, 6.0),
  createData('4', 305, 3.7, 67, 4.3),
  createData('5', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 320,
    // maxWidth:"400px"
  },
  style_key:
  {
      width:"3rem",
      border:"0"
  },
  latest_event:
  {
    '&:hover':
    {
      color:"rgb(13, 161, 255)",
      cursor:"pointer",
      transition:"color 500ms"
    }
  }
});

export default function LatestEvents() {
  const [data , setData] = useState([]);
  const history = useHistory()
  const classes = useStyles();

  useEffect(()=>
  {
    axios.get(`http://billiardsports.in/api/event/latest/`)
    .then((res)=>setData(res.data.data))
    .catch((e)=> console.log(e))
  } , [])

  return (
    <TableContainer style={{borderRadius:"0"}} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        
        <TableBody>
          {data.map((row ,index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell  className={classes.style_key} style = {index%2?{background:"rgb(13, 161, 255 , 0.8)"}:{background:"rgb(13, 161, 255 )"}} align="left">
                {index+1}
              </StyledTableCell>
              <StyledTableCell onClick={()=>history.push(`/events/${row.id}`)} className={classes.latest_event} align="left">{row.name}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.calories}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
