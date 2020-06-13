import React from 'react'
import { FirebaseAuthContext } from '../provider/FirebaseAuthProvider'

export const SignOut:React.FC = () => {
  const firebaseAuth = React.useContext(FirebaseAuthContext)

  const signOutHandler = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (firebaseAuth.signOut) {
        firebaseAuth.signOut()
      }
    },
    [firebaseAuth]
  )

  return (
    <div>
      <button type="button" onClick={signOutHandler}>Sign Out</button>
      {JSON.stringify(firebaseAuth.signIned)}
    </div>
  )
}