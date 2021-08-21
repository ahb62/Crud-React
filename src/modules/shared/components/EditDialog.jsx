import React, {useState, useRef} from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import axios from 'axios'; 

const EditDialog = (props) => 
{
  /* Manejando los props */
  const {history, task, setTriggering} = props;
  console.log(task);
  const priorityLevelRef = useRef("");
  const taskNameRef = useRef("");
  /* Manejador del dialog  */
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {setOpen(true)}; 
  const handleClose = () => {setOpen(false)};
  /*  */
  /* Generando refs */
  const handleSubmit = async (event) =>
  { 
    event.preventDefault();
    console.log("you clicked on edit!", task);
    const newPriorityLevelRef = taskNameRef.current.value;
    const newTaskNameRef = priorityLevelRef.current.value;
    
    const editTask = {taskName: newTaskNameRef, priorityLevel: newPriorityLevelRef};
    const url = `http://localhost:3001/tasks/${task.id}`;
    try
    {
      const result = await axios.put(url, editTask);
      if(result.status === 200)
        {console.log("has editado correctamente en tu api")}
    } catch (error) 
      {
        console.log(error);
        console.log("has tenido un error!");
      }
      setTriggering(true);
      history.push('/tasks');
  }

  return (
    <>
        <IconButton size="small" onClick={handleClickOpen}>
            <EditOutlinedIcon />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <form onSubmit={handleSubmit}>
                <DialogTitle id="form-dialog-title">Edit Task:</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Task Name"
                    type="text"
                    ref={taskNameRef}
                    fullWidth
                    />
                <TextField
                    margin="dense"
                    id="priorityLevel"
                    label="Priority"
                    type="text"
                    ref={priorityLevelRef}
                    fullWidth
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} type="submit" color="primary">
                    Edit
                </Button>
                </DialogActions>
            </form> 
            </Dialog>
        </IconButton>
    </>
  );
}
export default EditDialog;