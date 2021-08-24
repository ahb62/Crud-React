/* import ClippedDrawer from "./components/Drawer"; */
import React, {useState, useEffect} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {TasksView} from "./modules/tasks/TasksView";
import {WelcomeView} from "./modules/tasks/WelcomeView";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@material-ui/core/styles';
import {ComponentDrawer} from './modules/shared/components/Drawer';
import  EditDialog  from './modules/shared/components/EditDialog';
import FormDialog from './modules/shared/components/FormDialog';

const theme = createTheme({
  palette: 
  {
      primary: 
      {
          main: '#ef6694',
      },
      secondary: 
      {
        main: '#bb6bc9',
      },
      error:
      {
        main: '#d32f2f',
      },
  },
});
 
const App = ({tasks, refetch}) => 
{
const [stateTasks, setTasks] = useState([]);
const [triggerTasks, setTriggering ] = useState(true);
useEffect(() => 
{
  if(triggerTasks === true) 
    {
      setTasks(tasks); 
    }
    setTriggering(false);
}, [tasks, triggerTasks]);

return (
    <>
    <Router>
    <ThemeProvider theme={theme}>
      <ComponentDrawer />
      <Switch>
        <Route exact path="/tasks/:id" component={EditDialog}/> 

          <Route exact path="/tasks" render={(props) => 
            {
              const idTask = parseInt(props.match.params.id);
              const task = tasks.filter(element => element.id === idTask);
              return(
                <>
                <TasksView tasks={stateTasks} task={task[0]} setTriggering={setTriggering} refetch={refetch} tasking={tasks} />

                <FormDialog  tasking={tasks} tasks={stateTasks} refetch={refetch} defaultData={console.log} setTriggering={setTriggering} />
                </>
              )
            }} />


        <Route exact path="/" component={WelcomeView} />
      </Switch>
    </ThemeProvider>
    </Router>
    </>
  );
}
const TASK_LIST_QUERY = gql`
  query
  {
    tasksList
    {
      items
      {
        id
        taskName
        priorityLevel
        completed
      }
    }
  }
`
export default graphql(TASK_LIST_QUERY, 
  {
    props: (result) =>
    {
      const {data} = result;
      const {loading, refetch} = data;
      let tasks = [];
      if (data && data.tasksList)
      {
        tasks = data.tasksList.items;
        console.log(data, tasks);
      } 
        
      return{
        loading, tasks, refetch,
      }
    }
  })(App);