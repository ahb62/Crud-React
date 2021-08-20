import React from 'react';
import TableButtons from './TableButtons';
import useStyles from "../../../styles/styles";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,} from "@material-ui/core/";
import {withStyles} from '@material-ui/core/styles';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const createData = (taskName, priorityLevel, completed) => {return{taskName, priorityLevel, completed}}
const creatingRows = 
[
    createData("Task 1", "High", true,),
    createData("Task 2", "Mid", false,),
    createData("Task 3", "Low", true,),
    createData("Task 4", "High", false,),
    createData("Task 5", "Mid", true, )
];


export const TableTasks = (CreatingRows, deleteRows) =>
{
  const styles = useStyles();
  return (
      <>  
    <TableContainer component={Paper}>
      <Table size="small" margin="none" className={styles.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Completed</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {creatingRows.map((row) => (
              <StyledTableRow key={row.taskName}>
              <TableCell component="th" scope="row">
                {row.taskName}
              </TableCell>
              <TableCell>{row.priorityLevel}</TableCell>
              <TableCell>{row.completed.toString()}</TableCell>
              <TableCell>
                <TableButtons />
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
