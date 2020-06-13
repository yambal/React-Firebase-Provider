import React from 'react'
import { FirebaseAuthContext } from '../provider/FirebaseAuthProvider'
import { Container, Typography, Button } from '@material-ui/core'

export const SendEmailVerification:React.FC = () => {
  const firebaseAuth = React.useContext(FirebaseAuthContext)

  const verificationHandler = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (firebaseAuth.sendEmailVerification && firebaseAuth.signIned) {
        firebaseAuth.sendEmailVerification()
          .then(() => {
            console.log(21)
          })
      }
    },
    [firebaseAuth]
  )

  const email = React.useMemo(
    () => {
      if (firebaseAuth?.firebaseUser?.email && firebaseAuth.firebaseUser.email.length > 0) {
        return firebaseAuth.firebaseUser.email
      }
      return '?'
    },
    [firebaseAuth]
  )

  return (
    <Container>
      <Typography variant="h1" component="h2">Email Verification</Typography>
      <Button type="button" onClick={verificationHandler} variant="outlined" color="default" size="large">Verification</Button>
      {email}
    </Container>
  )
}