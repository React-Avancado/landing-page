import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  ${({ theme }) => css`
    html {
      font-family: ${theme.fontFamily};
      font-size: 62.5%;
    }

    body {
      background-color: ${theme.colors.mainBg};
      color: ${theme.colors.white};
    }
  `}
`

export default GlobalStyle
