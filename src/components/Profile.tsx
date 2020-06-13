import React, { Component } from 'react'
import { FirebaseAuthContext } from '../provider/FirebaseAuthProvider'
import { Typography, Container, Divider, Button } from '@material-ui/core'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface iProfile extends RouteComponentProps<{}>{}

const _Profile:React.FC<iProfile> = props => {
  const { history } = props
  const firebaseAuth = React.useContext(FirebaseAuthContext)

  const withdrawalHandler = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (firebaseAuth.delete) {
        firebaseAuth.delete()
          .then(() => {
            history.push('/')
          })
      }
    },
    [firebaseAuth]
  )

  return (
    <Container>
      <Typography variant="h1" component="h2">Profile</Typography>
      <pre>{JSON.stringify(firebaseAuth.firebaseUser, null, 2)}</pre>
      <Divider />
      <Button onClick={withdrawalHandler} color="default" variant="outlined">Withdrawal</Button>
    </Container>
  )
}

export const Profile = withRouter(_Profile)