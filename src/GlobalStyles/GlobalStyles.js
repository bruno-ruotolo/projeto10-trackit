import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* RESET */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}


/* GLOBAL CSS */
* {
  box-sizing: border-box;
}

body {
  background-color: #FFFFFF;
  font-family: 'Lexend Deca', sans-serif;
}

button {
  display:flex;
  align-items:center;
  justify-content: center;
  border-radius: 4.63636px;
  border: none;
  font-family: 'Lexend Deca', sans-serif;
  color: #FFFFFF;
  background-color: #52B6FF;
}

input {
  font-family: 'Lexend Deca', sans-serif;
  margin-bottom: 6px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  font-family: 'Lexend Deca';
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  padding-left: 11px;
}

input::placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #DBDBDB;
}

`

export default GlobalStyle;