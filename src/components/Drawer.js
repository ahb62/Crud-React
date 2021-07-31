import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TableProducts from './TableProducts';
import Dropdown from './Dropdown';
import FormDialog from './FormDialog';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: 
    {
        display: 'flex',
    },
    appBar: 
    {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: "#2d3c48",
        color: "white",
    },
    drawer: 
    {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: 
    {
        width: drawerWidth,
        backgroundColor: "#2d3c48",
        color: "white"
    },
  // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar, 
    content: 
    {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <Dropdown />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left">
        <div className={classes.toolbar}>
            <Typography variant="h6" align="center">
                CRUD
            </Typography>    
        </div>
        <Divider />
        <List>
          {['Profile', 'Logout'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <AccountCircleIcon fontSize="large" color="info" /> : <ExitToAppIcon color="warning" fontSize="large"/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography>    
            <TableProducts />
        </Typography>
        <FormDialog />
      </main>
    </div>
  );
}

