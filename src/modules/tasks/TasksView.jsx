import React, {useState} from 'react';
import {TableTasks} from './components/TableTasks';
import {ComponentDrawer} from '../shared/components/Drawer';
import FormDialog from '../shared/components/FormDialog';
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
export const TasksView = () => 
{
    
    const classes = useStyles();
    const [tasks, setTasks] = useState([]);
    return(
        <>
        <div className={classes.root}>
        <ComponentDrawer />
        <main className={classes.content}>
        <div className={classes.toolbar} />
            <h1>Task List</h1>
            <TableTasks />
        <FormDialog defaultData={console.log} />
        </main>
        </div>
        </>
    )
};
