import theme from 'utils/theme';
import { halfSpacer, spacer } from 'utils/size';
import { fontSizeBase } from 'utils/typography';

const cssReset = `
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  min-height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  font-size: ${fontSizeBase};
}

body {
  font-size: 1rem;
  line-height: 1.5;
  min-height: 100%;
  color: ${theme.colors.black};
  background-color: ${theme.colors.background};
  margin: 0;
  display: flex;
  flex-direction: column;
}

#root {
  min-height: 100%;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

[hidden],
template {
  display: none;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: 1px dotted;
}

b,
strong {
  font-weight: bold;
}

dfn {
  font-style: italic;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

mark {
  background: #ff0;
  color: #000;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

img {
  border: 0;
}

svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 1em 40px;
}

hr {
  box-sizing: content-box;
  height: 0;
}

pre {
  overflow: auto;
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

button {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}

button[disabled],
html input[disabled] {
  cursor: not-allowed;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

input {
  line-height: normal;
}

input[type="text"],
input[type="password"],
input[type="email"],
input[type="url"],
textarea {
  appearance: none;
}

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

input[type="search"] {
  -webkit-appearance: textfield;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

legend {
  border: 0;
  padding: 0;
}

textarea {
  overflow: auto;
}

optgroup {
  font-weight: bold;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

@-moz-viewport {
  width: device-width;
}
@-ms-viewport {
  width: device-width;
}
@-o-viewport {
  width: device-width;
}
@-webkit-viewport {
  width: device-width;
}
@viewport {
  width: device-width;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: ${halfSpacer};
}

p {
  margin-top: 0;
  margin-bottom: ${spacer};
}

abbr[title] {
  cursor: help;
  border-bottom: 1px dotted ${theme.colors.white};
}

address {
  margin-bottom: ${spacer};
  font-style: normal;
  line-height: inherit;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: ${spacer};
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: bold;
}

dd {
  margin-bottom: ${halfSpacer};
  margin-left: 0;
}

blockquote {
  margin: 0 0 ${spacer};
}

a {
  color: ${theme.colors.black};
  text-decoration: none;
}

pre {
  margin-top: 0;
  margin-bottom: ${spacer};
}

figure {
  margin: 0 0 ${spacer};
}

img {
  vertical-align: middle;
}

[role="button"] {
  cursor: pointer;
}


table {
  background-color: white;
}

th {
  text-align: left;
}

label {
  display: block;
  margin-bottom: ${halfSpacer};
}

input,
button,
select,
textarea {
  margin: 0;
  line-height: inherit;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: ${halfSpacer};
  font-size: 1.5rem;
  line-height: inherit;
}

input[type="search"] {
  -webkit-appearance: none;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
}

::-moz-selection {
    color: ${theme.colors.white};
    background: ${theme.colors.black};
}

::selection {
    color: ${theme.colors.white};
    background: ${theme.colors.black};
}
`;
export default cssReset;
