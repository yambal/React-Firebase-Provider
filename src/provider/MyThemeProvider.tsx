import React from 'react'
import { ThemeProvider as MuiThemeProvider, createMuiTheme, ThemeOptions } from '@material-ui/core/styles'
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { CssBaseline } from '@material-ui/core'
import { ScGlobalStyleBuilder } from './ScGlobalStyleBuilder'
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

type tFontType = 'sys' | 'en' | 'ja'

interface iMyThemeProvider {
  fontType?: tFontType,
  baseFontSize?: number
}

/**
 * Material-UI と styled-component を併用
 * Global の styling について、Mui でも可能だけど SC を使う方針
 * @param props 
 */

export const MyThemeProvider: React.FC<iMyThemeProvider> = props => {
  const { fontType = 'sys', baseFontSize = 16 } = props

  /** Material-UI Theme Option */
  const muiThemeOption = React.useMemo(
    () => {
      /**
       * https://material-ui.com/customization/palette/
       */
      const palette: PaletteOptions = {
        type: 'dark'
      }

      const base: ThemeOptions = {
        overrides: {
          MuiCssBaseline: {
            '@global': {
              html: {
                fontFamily: 'inherit',
              },
              body: {
                fontSize: 'inherit'
              }
            }
          }
        },
        typography: {
          fontFamily: 'inherit'
        },
        palette
      }
      return base
    },
    []
  )

  /** styled-component global style */
  const ScGlobalStyle = React.useMemo(
    () => {
      return ScGlobalStyleBuilder(baseFontSize)
    },
    [baseFontSize]
  )

  return (
    <SCThemeProvider theme={{font: fontType}}>
      <MuiThemeProvider theme={createMuiTheme(muiThemeOption)}>
        <CssBaseline />
        <ScGlobalStyle />
        {props.children}
      </MuiThemeProvider>
     </SCThemeProvider>
  )
}