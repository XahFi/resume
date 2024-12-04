import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/LightDark';
import { GlobalStyles } from './styles/GlobalStyles';
import {Container, Section} from './styles/PageStyles';
import {
  ThemeButton,
  Education,
  Experience,
  Introduction,
  Skills,
  Projects,
  RainBackground
} from './components/components'


const App: React.FC = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (<>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <RainBackground theme={theme}/>
      <Container>
        <div style={{paddingBottom: '10px', display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${theme === 'dark' ? 'white' : 'black'}`}}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p style={{fontSize: '60px', fontWeight: '600', margin: '10px 0'}}>Shafi Rafiq</p>
            {/* <a href='' style={{fontSize: '16px'}}>GitHub</a>
            <a href='' style={{fontSize: '16px'}}>LinkedIn</a> */}
          </div>
          <ThemeButton theme={theme} onClick={toggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'}
          </ThemeButton>
        </div>
        <Section><Introduction /></Section>
        <Section><Experience /></Section>
        <Section><Education /></Section>
        <Section><Skills /></Section>
        <Section><Projects /></Section>
      </ Container>
    </ThemeProvider>
  </>);
};

export default App;
