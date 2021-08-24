import React from 'react';
import {TableTasks} from './components/TableTasks';
import {ComponentDrawer} from '../shared/components/Drawer';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
({
    root: 
    {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content:
    {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));
export const TasksView = (props) => 
{
    const {tasks, task, setTriggering, refetch, tasking} = props;
    const classes = useStyles();
    return(
        <>
        <div className={classes.root}>
        <ComponentDrawer />
        <main className={classes.content}>
        <div className={classes.toolbar} />
            <h1>Task List</h1>
            <TableTasks tasks={tasking} refetch={refetch} tasking={tasks} task={task} setTriggering={setTriggering}  />
        
        </main>
        </div>
        </>
    )
};
