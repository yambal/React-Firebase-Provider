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
import { FirebaseProvider } from './provider/FirebaseProvider';
import { FirebaseAuthProvider } from './provider/FirebaseAuthProvider';

import { SignInWithEmailAndPassword } from './components/SignInWithEmailAndPassword';
import { SignOut } from './components/SignOut';
import { CreateUserWithEmailAndPassword } from './components/CreateUserWithEmailAndPassword';
import { SendPasswordResetEmail } from './components/SendPasswordResetEmail';
import { SendEmailVerification } from './components/SendEmailVerification';
import { DeleteUser } from './components/DeleteUser';
import { AppBarUser } from './components/HeaderBar/AppBarUser';
import { Profile } from './components/Profile';
import { HeaderBar } from './components/HeaderBar/HeaderBar';

const routerBasename = (state: iRootState): string | undefined => state.config.router_basename

const App:React.FC = () => {
  const stateRouterBasename = useSelector(routerBasename) || '/'
  const drawerRef = React.useRef<any>()

  const drawerOpenHandler = () => {
    drawerRef.current && drawerRef.current.setIsOpen(true)
  }

  return (
    <FirebaseProvider>
      <FirebaseAuthProvider languageCode="ja">
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
          <HeaderBar drawerOpenHandler={drawerOpenHandler}/>
          <Toolbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sign-up" component={CreateUserWithEmailAndPassword}/>
            <Route exact path="/sign-in" component={SignInWithEmailAndPassword}/>
            <Route exact path="/mail-verification" component={SendEmailVerification}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/pwd-reset" component={SendPasswordResetEmail}/>
            <Route exact path="/withdrawal" component={DeleteUser}/>
            <Route exact path="/counter" component={Counter}/>
          </Switch>
          <Toolbar/>
          <FooterBar />
        </BrowserRouter>
      </FirebaseAuthProvider>
    </FirebaseProvider>
  );
}

export default App;