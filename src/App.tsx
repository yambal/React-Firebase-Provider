import React from 'react';

import { Home } from './containers/Home';
import { Counter } from './containers/Counter';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { FooterBar } from './containers/FooterBar'
import { GrowSpacer } from './components/GrowSpacer';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { SwipeableTemporaryDrawer } from './containers/SwipeableTemporaryDrawer';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import iRootState from './redux/rootState';
import { useSelector } from 'react-redux';

const routerBasename = (state: iRootState): string | undefined => state.config.router_basename

const App:React.FC = () => {
  const stateRouterBasename = useSelector(routerBasename) || '/'
  const drawerRef = React.useRef<any>()

  const drawerOpenHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    drawerRef.current && drawerRef.current.setIsOpen(true)
  }

  return (
    <BrowserRouter basename={stateRouterBasename}>
      <SwipeableTemporaryDrawer ref={drawerRef} position="left">
        <List>
          <ListItem button>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
        </List>
      </SwipeableTemporaryDrawer>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={drawerOpenHandler}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <GrowSpacer />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/counter" component={Counter}/>
      </Switch>
      <FooterBar />
    </BrowserRouter>
  );
}

export default App;