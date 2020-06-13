import React from 'react'
import { FirebaseAuthContext } from '../provider/FirebaseAuthProvider'
import { Container, Typography, TextField, Button } from '@material-ui/core'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface iSignInWithEmailAndPassword extends RouteComponentProps<{}> {

}

const _SignInWithEmailAndPassword:React.FC<iSignInWithEmailAndPassword> = props => {
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

  const signInHandler = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log(firebaseAuth, firebaseAuth.firebaseUser)
      if (firebaseAuth.signInWithEmailAndPassword && !firebaseAuth.firebaseUser) {
        firebaseAuth.signInWithEmailAndPassword(email, password)
          .then(() => {
            console.log(29)
          })
          .catch((error) => {
            console.log(32)
          })
      }
    },
    [email, password, firebaseAuth]
  )

  const resetPwdHandler = React.useCallback(
    () => {
      history.push('/pwd-reset')
    },
    []
  )

  return (
    <Container>
      <Typography variant="h1" component="h2">Sign In</Typography>
      <TextField label="Email" type="email" onChange={emailChangeHandler} value={email} variant="outlined"/>
      <TextField label="Password" type="password" onChange={passwordChangeHandler} value={password} variant="outlined"/>
      <Button type="button" onClick={signInHandler} variant="outlined" color="default" size="large">Sign In</Button>
      <Button type="button" onClick={resetPwdHandler}>Reset Password</Button>
    </Container>
  )
}

export const SignInWithEmailAndPassword = withRouter(_SignInWithEmailAndPassword)