import React from 'react'
import { FirebaseAuthContext } from '../provider/FirebaseAuthProvider'

export const DeleteUser:React.FC = () => {
  const firebaseAuth = React.useContext(FirebaseAuthContext)

  const deleteHandler = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (firebaseAuth.delete && firebaseAuth.signIned) {
        firebaseAuth.delete()
          .then(() => {
            console.log(21)
          })
      }
    },
    [firebaseAuth]
  )

  return (
    <div>
      <button type="button" onClick={deleteHandler}>Delete</button>
    </div>
  )
}