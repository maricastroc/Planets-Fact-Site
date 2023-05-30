import { createGlobalStyle } from 'styled-components'
import AntonioMedium from '../../public/fonts/Antonio-Medium.ttf'
import SpartanBold from '../../public/fonts/Spartan-Bold.ttf'
import SpartanRegular from '../../public/fonts/Spartan-Regular.ttf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Antonio';
    src: url(${AntonioMedium});
    font-weight: 500;
  }

  @font-face {
    font-family: 'Spartan';
    src: url(${SpartanBold});
    font-weight: 700;
  }

  @font-face {
    font-family: 'Spartan';
    src: url(${SpartanRegular});
    font-weight: 400;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['base-text']};
  }

  body {
    background: ${(props) => props.theme['bg-color']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Antonio', sans-serif;
    font-weight: 500;
    font-size: 1rem;
  }
`
