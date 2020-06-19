import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { FirebaseAuthContext } from '../../provider/FirebaseAuthProvider'
import Button from '@material-ui/core/Button';
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';
import { Divider } from '@material-ui/core';

interface iAppBarUser extends RouteComponentProps<{}>{

}

const _AppBarUser: React.FC<iAppBarUser> = props => {
  const { history } = props
  const firebaseAuth = React.useContext(FirebaseAuthContext)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl);

  const signInHandler = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      history.push('/sign-in')
    },
    []
  )

  const signUpHandler = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      history.push('/sign-up')
    },
    []
  )

  const profileUpHandler = React.useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      setAnchorEl(null)
      history.push('/profile')
    },
    []
  )


  const signOutHandler = React.useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      if (firebaseAuth.signOut) {
        setAnchorEl(null)
        firebaseAuth.signOut()
        history.push('/')
      }
    },
    [firebaseAuth]
  )

  const emailVerificationHandler = React.useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      setAnchorEl(null)
      history.push('/mail-verification')
    },
    []
  )

  const displayName = React.useMemo(
    () => {
      if (firebaseAuth?.firebaseUser?.displayName && firebaseAuth.firebaseUser.displayName.length > 0) {
        return firebaseAuth.firebaseUser.displayName
      }
      if (firebaseAuth?.firebaseUser?.email && firebaseAuth.firebaseUser.email.length > 0) {
        return firebaseAuth.firebaseUser.email
      }
      return '?'
    },
    [firebaseAuth]
  )

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null)
  };

  return (
    <React.Fragment>
      {firebaseAuth.firebaseUser &&
        <Button
          startIcon={<AccountCircle />}
          onClick={handleProfileMenuOpen}
        >
          {displayName}
        </Button>
      }
      {!firebaseAuth.firebaseUser &&
        <React.Fragment>
          <Button
            startIcon={<MeetingRoom />}
            onClick={signInHandler}
          >
            Sign In
          </Button>
            <Button
            startIcon={<MeetingRoom />}
            onClick={signUpHandler}
          >
            Sign Up
          </Button>
        </React.Fragment>
      }
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
      >
        <MenuItem onClick={profileUpHandler}>Profile</MenuItem>
        <Divider />
        <MenuItem onClick={emailVerificationHandler}>Email Verification</MenuItem>
        <MenuItem onClick={signOutHandler}>Sign Out</MenuItem>
      </Menu>
    </React.Fragment>
  )
}

export const AppBarUser = withRouter(_AppBarUser)