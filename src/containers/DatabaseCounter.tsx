import React from 'react'
import { FirebaseAuthContext } from '../provider/FirebaseAuthProvider'
import { FirebaseDatabaseContext } from '../provider/FirebaseDatabaseProvider'
import { Container, Typography } from '@material-ui/core'

export const DatabaseCounter:React.FC = () => {
  const firebaseAuth = React.useContext(FirebaseAuthContext)
  const FirebaseDatabase = React.useContext(FirebaseDatabaseContext)
  const [count, setCount] = React.useState(0)

  React.useEffect(
    () => {
      if (firebaseAuth.signIned && FirebaseDatabase.firebaseDatabase) {
        /**
         * 本来はここにビジネスロジックを書くべきではない
         */
        const db = FirebaseDatabase.firebaseDatabase
        const ref = db.ref('testCounter')
        ref.once('value')
          .then((snapshot: firebase.database.DataSnapshot) => {
            const count = snapshot.val() || 0
            ref.set(count + 1)
            setCount(count + 1)
          })
      }
    },
    [firebaseAuth, FirebaseDatabase]
  )

  return (
    <Container>
      <Typography variant="h1" component="h2">Database Counter</Typography>
      <Typography variant="body1" gutterBottom>{count}</Typography>
      <Typography variant="body2" gutterBottom>
        この数字は、ログインユーザーにのみ機能しており、表示のたびに+1されます<br />
        この数字は、Realtime Database に保存されています。
      </Typography>
    </Container>
  )
}