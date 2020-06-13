import * as React from 'react'
import * as firebase from "firebase/app"
// import 'firebase/database'

const dotenv = require('dotenv')
dotenv.config({ debug: true })

interface FirebaseProvider {
  
}

type tFirebaseContext = firebase.app.App | undefined

export const FirebaseContext = React.createContext<tFirebaseContext>(undefined);

export const FirebaseProvider: React.FC<FirebaseProvider> = props => {
  
  const firebaseApp: firebase.app.App = React.useMemo(
    () => {
      const config = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STRAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      }
      // console.log(config)
      return firebase.initializeApp(config)
    },
    []
  )

  return (
    <FirebaseContext.Provider value={firebaseApp}>
      {props.children}
    </FirebaseContext.Provider>
  )
} 