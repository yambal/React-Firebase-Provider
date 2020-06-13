import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { GrowSpacer } from '../GrowSpacer';
import { AppBarUser } from './AppBarUser';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface iHeaderBar extends RouteComponentProps<{}>{
  drawerOpenHandler: () => void
}


const _HeaderBar:React.FC<iHeaderBar> = props => {
  const { history } = props
  const drawerOpenHandler = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      props.drawerOpenHandler()
    },
    []
  )

  const goHomeHandler = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      history.push('/')
    },
    [history]
  )

  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={drawerOpenHandler}>
          <MenuIcon />
        </IconButton>
        <div onClick={goHomeHandler}>
          <Typography variant="h6">
            React Firebase Provider
          </Typography>
        </div>
        <GrowSpacer />
        <AppBarUser />
      </Toolbar>
    </AppBar>
  );
}

export const HeaderBar = withRouter(_HeaderBar);