import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Container, Typography, Button, TableContainer, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core'

interface iHome extends RouteComponentProps<{}> {}

const _Home:React.FC<iHome> = props => {
  // const { history } = props

  const jampToCounter = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      props.history.push('/counter')
    },
    [props.history]
  )

  return (
    <Container>
      <Typography variant="h3" component="h3" gutterBottom>概要</Typography>
      <Typography variant="body1" gutterBottom>
        「React Firebase Provider」は、Firebase のReact WEBアプリケーションとして、以下の機能を提供します
      </Typography>
      <ul>
        <li>Firebase アプリケーションの初期化</li>
        <li>Firebase Auth の機能</li>
      </ul>
      <Typography variant="body2" gutterBottom>
        本モジュールは開発中のもので、エラーハンドリングなどほとんど未完です。
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>機能</TableCell>
              <TableCell>例</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Firebase App の初期化</TableCell>
              <TableCell>自動</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>firebaseApp.auth()</TableCell>
              <TableCell>const [AUTH] = React.useContext(FirebaseAuthContext)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email/Password でのユーザー作成</TableCell>
              <TableCell>[AUTH].createUserWithEmailAndPassword(email, password)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email/Password でのログイン</TableCell>
              <TableCell>[AUTH].signInWithEmailAndPassword(email, password)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ログアウト</TableCell>
              <TableCell>[AUTH].signOut()</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>パスワードリセット</TableCell>
              <TableCell>[AUTH].sendPasswordResetEmail(email)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>メール認証</TableCell>
              <TableCell>[AUTH].sendEmailVerification()</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ユーザー削除</TableCell>
              <TableCell>[AUTH].delete()</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ユーザー</TableCell>
              <TableCell>[AUTH].firebaseUser</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ログイン状態</TableCell>
              <TableCell>[AUTH].signIned</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h4" component="h4" gutterBottom>使い方</Typography>
      <pre>
        {`
<FirebaseProvider>
  <FirebaseAuthProvider languageCode="ja">
    ...
  </FirebaseAuthProvider>
<FirebaseProvider>
        `}
      </pre>
      <Typography variant="body1" gutterBottom>
        ↑配下のコンポーネントで FirebaseAuthContext を取得し各機能を実行します
      </Typography>
    </Container>
  )
}

export const Home = withRouter(_Home) 