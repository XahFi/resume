import styled from "styled-components";
import { lightTheme, darkTheme } from "./LightDark";

interface ThemeButtonProps {
  theme: string;
}

const ThemeButton = styled.button<ThemeButtonProps>`
  /* background-color: ${({ theme }) => (theme === 'light' ? lightTheme.body : 'black')}; */
  background-color: transparent;
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  border: 2px solid ${({ theme }) => (theme === 'light' ? darkTheme.body : lightTheme.body)};
  border-radius: 36px;
  padding: 5px 10px;
  cursor: pointer;
  height: 30px;
  transition: all 0.3s ease;

  &:hover {
    /* background-color: ${({ theme }) => (theme === 'light' ? '#f0f0f0' : '#444')}; */
    box-shadow: 0 0 30px ${({ theme }) => (theme === 'light' ? '#3b5998' : '#FFDD99')};
  }
`;

export default ThemeButton;