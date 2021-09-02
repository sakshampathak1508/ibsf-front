import React, { useEffect, useState } from 'react';
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
  body: {
    fontSize: "1.2rem",
    // paddingLeft:"3rem",
    // paddingRight:"3rem"
  },

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 300,
    // maxWidth:"400px"
  },
  champion:
  {
    '&:hover':
    {
      color:"rgb(13, 161, 255)",
      cursor:"pointer",
      transition:"color 500ms"
    }
  }
});

export default function WorldChampion() {
  const [data , setData] = useState([]);
  const history = useHistory()
  const classes = useStyles();


  useEffect(()=>
  {

    axios.get(`http://billiardsports.in/api/worldchamps/`)
    .then((res)=>setData(res.data.data))
    .catch((e)=> console.log(e))
  } , [])

  return (
    <TableContainer style={{borderRadius:"0"}} component={Paper}>
      <Table className={classes.table}  stickyHeader aria-label="sticky table">
        <TableHead>
            <TableRow>
            <StyledTableCell align="left" style={{fontSize:"1.rem"}}>Name</StyledTableCell>
            <StyledTableCell align="left">Event</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell onClick={()=>history.push(`/champion/${row.id}`)} className={classes.champion} align="left">
                {row.name}   <img src={`http://billiardsports.in/${row.flag}`} height='17rem' alt="flag"/>
              </StyledTableCell>
              <StyledTableCell align="left">{row.event_name}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.calories}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
