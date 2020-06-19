import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';

interface iDrawerContent extends RouteComponentProps<{}>{

}

const _DrawerContent: React.FC<iDrawerContent> = props => {

  const dbCounterHandler = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      props.history.push('/dbCounter')
    },
    []
  )

  return (
    <List>
      <ListItem button onClick={dbCounterHandler}>
        <ListItemIcon><InboxIcon /></ListItemIcon>
        <ListItemText primary="Database Counter" />
      </ListItem>
      <Divider />
    </List>
  )
}

export const DrawerContent = withRouter(_DrawerContent)