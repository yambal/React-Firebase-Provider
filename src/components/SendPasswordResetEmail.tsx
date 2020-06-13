import React from 'react'
import { FirebaseAuthContext } from '../provider/FirebaseAuthProvider'
import { Container, TextField, Button, Typography } from '@material-ui/core'

export const SendPasswordResetEmail:React.FC = () => {
  const firebaseAuth = React.useContext(FirebaseAuthContext)
  const [email, setEmail] = React.useState('')

  const emailChangeHandler = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.currentTarget.value)
    },
    [email]
  )

  const resetInHandler = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log(firebaseAuth, firebaseAuth.firebaseUser)
      if (firebaseAuth.sendPasswordResetEmail && !firebaseAuth.firebaseUser) {
        firebaseAuth.sendPasswordResetEmail(email)
          .then(() => {
            console.log(21)
          })
      }
    },
    [email, firebaseAuth]
  )

  return (
    <Container>
      <Typography variant="h1" component="h2">Password Reset</Typography>
      <TextField label="Email" type="email" onChange={emailChangeHandler} value={email} variant="outlined"/>
      <Button type="button" onClick={resetInHandler} variant="outlined" color="default" size="large">Reset</Button>
    </Container>
  )
}