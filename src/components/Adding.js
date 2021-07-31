import React, { useState } from 'react';
import {TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const Adding = () =>
{
    const classes = useStyles();
    const [product, setProduct] = useState();
    return(
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Name" />
                <TextField id="standard-basic" label="Type" />
                <TextField id="standard-basic" label="Brand" />
            </form>
        </>
    )
}
export default Adding;
