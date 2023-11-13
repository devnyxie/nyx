import { css } from '@emotion/react';

const globalStyles = (theme) => {
  console.log(theme);
  return css`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

    * {
      scroll-behavior: smooth;
      color: ${theme == 'light' ? '#222' : '#ccc'} !important;
    }

    :root {
      font-family: 'Lato', sans-serif;
    }

    body {
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      font-weight: 400;
      background-color: ${theme == 'light' ? 'white' : '#1a1a1a'} !important;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }

    .truncate-overflow {
      --max-lines: 1;
      position: relative;
      overflow: hidden;
    }

    a {
      color: ${theme == 'light' ? '#222' : '#ccc'};
      text-decoration: none;
      opacity: 0.75;
      transition: opacity 0.2s;
    }

    a:hover {
      opacity: 1;
      transition: opacity 0.2s;
    }

    a.active {
      opacity: 1;
      text-shadow: 0px 0px 5px
        ${theme == 'light' ? 'rgb(0, 0, 0, 0.1)' : 'rgb(255, 255, 255, 0.3)'};
    }

    .backdrop-blur {
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px); /* Safari 9+, Chrome 76+ */
      -moz-backdrop-filter: blur(15px); /* Firefox 70+ */
      -o-backdrop-filter: blur(15px); /* Opera 63+ */
      -ms-backdrop-filter: blur(15px); /* Edge 79+ */
    }

    .border-custom {
      border: 1px solid #64656d;
    }

    .border-custom-bottom {
      border-bottom: 1px solid #64656d;
    }

    .border-custom-top {
      border-top: 1px solid #64656d;
    }

    .visible-bg {
      background-color: ${theme == 'light'
        ? 'rgb(240, 244, 250, 0.5)'
        : 'rgb(13, 17, 23, 0.5)'} !important;
    }

    .rounded {
      border-radius: 5px !important;
    }

    .gallery-image {
      width: 100%;
    }

    /*MD-*/

    @media screen and (min-width: 768px) {
      .main {
        border-radius: 5px;
        border: 1px solid #64656d;
      }
      .gallery-image {
        width: 600px;
      }
    }

    * {
      transition:
        width 0.25s,
        height 0.25s;
    }

    th,
    td,
    thead {
      border-width: 1px !important;
      border-color: ${theme == 'dark'
        ? 'rgba(255, 255, 255, 0.178)'
        : 'rgba(0, 0, 0, 0.3)'} !important;
      border-style: solid !important;
      padding: 5px;
    }

    .cursor-zoom {
      cursor: zoom-in !important;
    }

    /* dark theme */

    .dark-theme-shadow {
      background-color: ${theme == 'dark'
        ? 'rgb(0, 0, 0, 0.5)'
        : 'rgb(0, 0, 0, 0)'};
    }
    .bg-visible-strong {
      background-color: ${theme == 'dark'
        ? 'rgb(0, 0, 0, 0.5)'
        : 'rgb(255, 255, 255, 0.4)'};
    }
    /* scrollbar */

    ::-webkit-scrollbar {
      width: 6px; /* Adjust the width as needed */
      height: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${theme == 'dark' ? '#64656d' : 'white'};
    }

    ::-webkit-scrollbar-track {
      background-color: rgb(0, 0, 0, 0.2); /* Adjust the color as needed */
      opacity: 0 !important;
    }

    *:focus:not(a) {
      outline: none !important;
      box-shadow: none !important;
    }
  `;
};

export default globalStyles;
