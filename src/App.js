/* import ClippedDrawer from "./components/Drawer"; */
import {TasksView} from "./modules/tasks/TasksView";
import {WelcomeView} from "./modules/tasks/WelcomeView";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@material-ui/core/styles';

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

const App = () => 
{
  return (
    <>
    <Router>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/tasks-view" component={TasksView} />
        <Route exact path="/" component={WelcomeView} />
      </Switch>
    </ThemeProvider>
    </Router>
    </>
  );
}
export default App;
