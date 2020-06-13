import React from 'react'
import { FirebaseAuthContext } from '../provider/FirebaseAuthProvider'

export const Test:React.FC = () => {
  const firebaseAuth = React.useContext(FirebaseAuthContext)

  React.useEffect(
    () => {
      if (firebaseAuth.signInWithEmailAndPassword && !firebaseAuth.firebaseUser) {
        firebaseAuth.signInWithEmailAndPassword('gomi@yambal.net', 'p1490062')
      }
    },
    [firebaseAuth]
  )

  return (
    <div>
      firebaseUser:
      <pre>{JSON.stringify(firebaseAuth.firebaseUser, null, 2)}</pre>
    </div>
  )
}