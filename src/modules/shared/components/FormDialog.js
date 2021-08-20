import React, {useState} from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Fab, Tooltip} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from '../../../styles/styles'

const FormDialog = () => 
{
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styles = useStyles();
  return (
    <>
      <Tooltip title="Add" onClick={handleClickOpen} aria-label="add">
        <Fab color="secondary" className={styles.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a Product</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="type"
            label="Type"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="brand"
            label="Brand"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default FormDialog;