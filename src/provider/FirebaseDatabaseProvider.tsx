import * as React from 'react'
import 'firebase/database'
import { FirebaseContext } from './FirebaseProvider'

interface iFirebaseDatabaseProvider {
}

interface iFirebaseDatabaseContext {
  firebaseDatabase: firebase.database.Database | undefined
}

export const FirebaseDatabaseContext = React.createContext<iFirebaseDatabaseContext>({
  firebaseDatabase: undefined
});

export const FirebaseDatabaseProbider: React.FC<iFirebaseDatabaseProvider> = props => {

  const firebaseApp = React.useContext(FirebaseContext)
  const [firebaseDatabase, setFirebaseDatabase] = React.useState<firebase.database.Database | undefined>(undefined)

  React.useEffect(
    () => {
      if (firebaseApp) {
        const database = firebaseApp.database()
        setFirebaseDatabase(database)
      }
    },
    [firebaseApp]
  )

  return (
    <FirebaseDatabaseContext.Provider value={{
      firebaseDatabase
    }}>
      {props.children}
    </FirebaseDatabaseContext.Provider>
  )
} 