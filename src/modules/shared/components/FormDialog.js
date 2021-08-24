import React, {useState} from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Fab, Tooltip} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from '../../../styles/styles'
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const FormDialog = ({setTriggering, tasking, taskCreate,  refetch}) => 
{
  /*  */
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {setOpen(true)}; 
  const handleClose = () => {setOpen(false)};
  /*  */
  const [tasks, setTasks] = useState({
    taskName: "",
    priorityLevel: "",
  });


  const onChangeTask = (event) => 
  {
    event.preventDefault();
    const {target: {name, value}} = event;
    setTasks(
      {
        ...tasks,
        [name]: value,
      });
  }

    const submit = async tasking =>
    {
      const res = await taskCreate({variables: {data: tasking}});
      if(res.data.taskCreate.id)
      {
        console.log("has posteado correctamente en tu api");
        setTasks({taskName: '', priorityLevel: ''});
        refetch()
      } 
      setTriggering(true);
    }
  
      
      
  const styles = useStyles();
  return (
    <>
      <Tooltip title="Add" onClick={handleClickOpen} aria-label="add">
        <Fab color="secondary" className={styles.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <form onSubmit={submit}>
        <DialogTitle id="form-dialog-title">Create Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="taskName"
            label="Task Name"
            name="taskName"
            type="text"
            value={tasks.taskName}
            fullWidth
            onChange={onChangeTask}
            />
          <TextField
            margin="dense"
            id="priorityLevel"
            label="Priority"
            name="priorityLevel"
            type="text"
            value={tasks.priorityLevel}
            fullWidth
            onChange={onChangeTask}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} type="submit" color="primary">
            Create
          </Button>
        </DialogActions>
      </form> 
      </Dialog>
    </>
  );
}
const NOTE_MUTATION = gql`
  mutation TaskCreate($data: TaskCreateInput!) {
    taskCreate(data: $data) {
      id
    }
  }
`;
export default graphql(NOTE_MUTATION, {
  name: 'taskCreate',
})(FormDialog);