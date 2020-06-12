import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Container, Typography, Button } from '@material-ui/core'

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
      <Typography variant="h1" component="h2">Home</Typography>
      <Button onClick={jampToCounter} variant="contained" color="primary">Counter</Button>
    </Container>
  )
}

export const Home = withRouter(_Home) 