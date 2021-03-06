import * as React from 'react'
import 'firebase/auth'
import { FirebaseContext } from './FirebaseProvider'

const dotenv = require('dotenv')
dotenv.config({ debug: true })

interface iFirebaseAuthProvider {
  languageCode?: string
}

interface iFirebaseAuthContext {
  firebaseUser: firebase.User | null
  signIned: boolean
  createUserWithEmailAndPassword?: (email: string, password: string) => Promise<firebase.User | null>
  signInWithEmailAndPassword?: (email: string, password: string) => Promise<firebase.User | null>
  sendPasswordResetEmail?: (email: string, url?: string) => Promise<void>
  sendEmailVerification?: (url?: string) => Promise<void>
  delete?: () => Promise<void>,
  signOut?: () => void
}

export const FirebaseAuthContext = React.createContext<iFirebaseAuthContext>({
  firebaseUser: null,
  signIned: false,
  createUserWithEmailAndPassword: undefined,
  signInWithEmailAndPassword: undefined,
  sendPasswordResetEmail: undefined,
  sendEmailVerification: undefined,
  delete: undefined,
  signOut: undefined
});

export const FirebaseAuthProvider: React.FC<iFirebaseAuthProvider> = props => {
  const { languageCode = 'en' } = props
  const firebaseApp = React.useContext(FirebaseContext)
  const [firebaseAuth, setFirebaseAuth] = React.useState<firebase.auth.Auth | undefined>(undefined)
  const [firebaseUser, setFirebaseUser] = React.useState<firebase.User | null>(null)
  const [signIned, setSignIned] = React.useState<boolean>(false)

  React.useEffect(
    () => {
      if (firebaseApp) {
        const firebaseAuth = firebaseApp.auth()
        firebaseAuth.languageCode = languageCode
        firebaseAuth.onAuthStateChanged(
          (firebaseUser: firebase.User | null) => {
            setSignIned(!!firebaseUser)
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
    (email: string, password: string): Promise<firebase.User | null> => {
      return new Promise((resolve, reject) => {
        if (firebaseAuth) {
          firebaseAuth.signOut()
          firebaseAuth.createUserWithEmailAndPassword(email, password)
            .then((credential: firebase.auth.UserCredential) => {
              resolve(credential.user)
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
  
              reject(error)
            })
          return
        }
        reject()
      })
    },
    [firebaseAuth]
  )

  /** signInWithEmailAndPassword **/
  const signInWithEmailAndPassword = React.useCallback(
    (email: string, password: string): Promise<firebase.User | null> => {
      return new Promise((resolve, reject) => {
        if (firebaseAuth) {
          firebaseAuth.signOut()
          firebaseAuth.signInWithEmailAndPassword(email, password)
            .then((credential: firebase.auth.UserCredential) => {
              resolve(credential.user)
            })
            .catch((error) => {
              console.log(error.code, error.message)
              // auth/quota-exceeded
              // Exceeded quota for verifying passwords.

              reject(error)
            })
          return
        }
        reject()
      })
    },
    [firebaseAuth]
  )

  /** sendPasswordResetEmail **/
  const sendPasswordResetEmail = React.useCallback(
    (email: string, url?: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (firebaseAuth) {
          let option: firebase.auth.ActionCodeSettings | undefined = undefined
          if (url) {
            option = { url }
          }
          firebaseAuth.sendPasswordResetEmail(email, option)
            .then(() => {
              resolve()
            })
            .catch((error) => {
              console.log(error.code, error.message)
              // auth/invalid-email
              // The email address is badly formatted.

              // auth/user-not-found
              // There is no user record corresponding to this identifier. The user may have been deleted.
              reject(error)
            })
          return
        }
        reject()
      })
    },
    [firebaseAuth]
  )

  const sendEmailVerification = React.useCallback(
    (url?: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (firebaseAuth && firebaseAuth.currentUser) {
          let option: firebase.auth.ActionCodeSettings | undefined = undefined
          if (url) {
            option = { url }
          }
          firebaseAuth.currentUser.sendEmailVerification(option)
            .then(() => {
              resolve()
            })
            .catch((error) => {
              console.log(error.code, error.message)
              reject(error)
            })
          return
        }
        reject()
      })
    },
    [firebaseAuth]
  )

  const deleteUser = React.useCallback(
    (): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (firebaseAuth && firebaseAuth.currentUser) {
          firebaseAuth.currentUser.delete()
            .then(() => {
              resolve()
            })
            .catch((error) => {
              console.log(error.code, error.message)
              // auth/requires-recent-login
              // This operation is sensitive and requires recent authentication. Log in again before retrying this request.
              reject(error)
            })
          return
        }
        reject()
      })
    },
    [firebaseAuth]
  )

  const signOut = React.useCallback(
    () => {
      if (firebaseAuth) {
        firebaseAuth.signOut()
      }
    },
    [firebaseAuth]
  )

  return (
    <FirebaseAuthContext.Provider value={{
      firebaseUser,
      signIned,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      sendPasswordResetEmail,
      sendEmailVerification,
      delete: deleteUser,
      signOut
    }}>
      {props.children}
    </FirebaseAuthContext.Provider>
  )
} 