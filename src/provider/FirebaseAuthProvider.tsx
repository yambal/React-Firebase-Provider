import * as React from 'react'
import 'firebase/auth'
import { FirebaseContext } from './FirebaseProvider'
import { FirebaseError } from 'firebase'

const dotenv = require('dotenv')
dotenv.config({ debug: true })

interface iFirebaseAuthProvider {
  
}

interface iFirebaseAuthContext {
  firebaseUser: firebase.User | null
  createUserWithEmailAndPassword?: (email: string, password: string) => void,
  signInWithEmailAndPassword?: (email: string, password: string) => void,
}

export const FirebaseAuthContext = React.createContext<iFirebaseAuthContext>({
  firebaseUser: null,
  createUserWithEmailAndPassword: undefined,
  signInWithEmailAndPassword: undefined
});

export const FirebaseAuthProvider: React.FC<iFirebaseAuthProvider> = props => {
  const firebaseApp = React.useContext(FirebaseContext)
  const [firebaseAuth, setFirebaseAuth] = React.useState<firebase.auth.Auth | undefined>(undefined)
  const [firebaseUser, setFirebaseUser] = React.useState<firebase.User | null>(null)

  React.useEffect(
    () => {
      if (firebaseApp) {
        const firebaseAuth = firebaseApp.auth()
        firebaseAuth.onAuthStateChanged(
          (firebaseUser: firebase.User | null) => {
            setFirebaseUser(firebaseUser)
          }
        )
        setFirebaseAuth(firebaseAuth)
      }
    },
    [firebaseApp]
  )

  /* createUserWithEmailAndPassword */
  const createUserWithEmailAndPassword = React.useCallback(
    (email: string, password: string) => {
      if (firebaseAuth) {
        firebaseAuth.signOut()
        firebaseAuth.createUserWithEmailAndPassword(email, password)
          .then((credential: firebase.auth.UserCredential) => {
            console.log(`user created`)
          })
          .catch((error) => {
            console.log(error.code, error.message)
            // auth/operation-not-allowed
            // The given sign-in provider is disabled for this Fi…under the sign-in method tab of the Auth section.

            // auth/email-already-in-use
            // The email address is already in use by another account.

            // auth/invalid-email
            // The email address is badly formatted.

            // auth/weak-password
            // The password must be 6 characters long or more.
          })
      }
    },
    [firebaseAuth]
  )

  const signInWithEmailAndPassword = (email: string, password: string) => {
    if (firebaseAuth) {
      firebaseAuth.signOut()
      firebaseAuth.signInWithEmailAndPassword(email, password)
      .then((credential: firebase.auth.UserCredential) => {
        console.log(`logined`)
      })
      .catch((error) => {
        console.log(error.code, error.message)
        // auth/quota-exceeded
        // Exceeded quota for verifying passwords.
      })
    }
  }



  return (
    <FirebaseAuthContext.Provider value={{
      firebaseUser,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword
    }}>
      {props.children}
    </FirebaseAuthContext.Provider>
  )
} 