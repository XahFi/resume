import { createGlobalStyle, keyframes } from 'styled-components';
import rainImg from '../assets/rain.jpg';

const rain = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 10px;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    /* background: linear-gradient(white, blue), url(${rainImg}); */
    /* background-image: url(${rainImg}); */
    background-size: cover;
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    /* overflow: hidden; */
    /* animation: ${rain} 120ms linear infinite; */

    a {
	    text-decoration: none;
      color: ${({ theme }) => theme.text};
      transition: 0.3s ease;

      &:hover {
        text-shadow: 0px 0px 20px #24a7ff;
        color: #24a7ff;
      }
    }
  }
`;