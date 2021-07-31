import React from 'react';
import TableButtons from './TableButtons';
import useStyles from "../styles/styles";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography} from "@material-ui/core/";
import {withStyles} from '@material-ui/core/styles';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const createData = (name, type, brand) => {return{ name, type, brand}}
const rows = 
[
    createData("Xbox One", "Videogames", "Microsoft"),
    createData("SmartTv 32", "Entertainment", "Samsung"),
    createData("Iphone XR", "Phones", "Apple"),
    createData("Redmi 10", "Phones", "Xiaomi"),
    createData("Macbook 2021", "PC", "Apple")
];
/* const handleAdd = () => {}
const handleEdit = () => {}
const handleDelete = () => {} */

const TableProducts = () =>
{
  const styles = useStyles();
  return (
      <>
    <Typography variant="h3">
        Products
    </Typography>  
    <TableContainer component={Paper}>
      <Table size="small" margin="none" className={styles.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Brand</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
              <StyledTableRow key={row.name}>
              <TableCell></TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.brand}</TableCell>
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
export default TableProducts;