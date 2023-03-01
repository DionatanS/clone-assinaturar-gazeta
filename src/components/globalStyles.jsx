/**
 * Nosso componente que adiciona os estilos globais do site. Qualquer modificação no root do site deve ser efetuada aqui.
 */

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  html,
  body {
    color: #000000;
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.weights.regular};
    font-size: ${({ theme }) => theme.fonts.globalSize}px;
    overflow-x: hidden;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
