import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components' 
import { CopyRight } from './Copyright'

const Wrapper = styled(AppBar)`
  top: auto;
  bottom: 0;
`

export const FooterBar:React.FC = () => {
  return (
  <Wrapper position="fixed" color="default">
    <Toolbar>
      <Typography variant="caption">
        <CopyRight />
      </Typography>
    </Toolbar>
  </Wrapper>
  )
}