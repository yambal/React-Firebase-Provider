import { createGlobalStyle } from 'styled-components'
import theme from 'styled-theming'
/**
 * https://styled-components.com/docs/advanced#theming
 */

const GlobalFontFamily = theme('font', {
  sys: "'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif",
  ja: "'Noto Sans JP', sans-serif;",
  en: "'Roboto', sans-serif;",
})

export const ScGlobalStyleBuilder = (baseFontSize: number) => {

  return createGlobalStyle`
    html {
      font-size: ${baseFontSize}px;
    }
    body {
      font-family: ${GlobalFontFamily};
      font-size: 1rem;
    } 
  `
}