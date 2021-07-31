import ClippedDrawer from "./components/Drawer";
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
      warning:
      {
        main: '#ff9800',
      },
      info:
      {
        main: '#64b5f6',
      },
  },
});

const App = () => 
{
  return (
    <>
    <ThemeProvider theme={theme}>
      <ClippedDrawer />
    </ThemeProvider>
    </>
  );
}
export default App;
