import React from 'react'
import { FirebaseAuthContext } from '../provider/FirebaseAuthProvider'
import { Container, Typography, Button, TextField } from '@material-ui/core'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface iCreateUserWithEmailAndPassword extends RouteComponentProps<{}>{

}

const _CreateUserWithEmailAndPassword:React.FC<iCreateUserWithEmailAndPassword> = props => {
  const { history } = props
  const firebaseAuth = React.useContext(FirebaseAuthContext)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const emailChangeHandler = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.currentTarget.value)
    },
    [email]
  )

  const passwordChangeHandler = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.currentTarget.value)
    },
    [password]
  )

  const createInHandler = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (firebaseAuth.createUserWithEmailAndPassword) {
        firebaseAuth.createUserWithEmailAndPassword(email, password)
      }
    },
    [email, password, firebaseAuth]
  )

  const signInHandler = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      history.push('/sign-in')
    },
    []
  )

  return (
    <Container>
      <Typography variant="h1" component="h2">Sign Up</Typography>
      <TextField label="Email" type="email" onChange={emailChangeHandler} value={email} variant="outlined"/>
      <TextField label="Password" type="password" onChange={passwordChangeHandler} value={password} variant="outlined"/>
      <Button type="button" onClick={createInHandler} variant="outlined" color="default" size="large">Sign Up</Button>
      <Button type="button" onClick={signInHandler}>Sign In</Button>
    </Container>
  )
}

export const CreateUserWithEmailAndPassword = withRouter(_CreateUserWithEmailAndPassword)