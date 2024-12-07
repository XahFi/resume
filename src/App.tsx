import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/LightDark';
import { GlobalStyles } from './styles/GlobalStyles';
import {Container} from './styles/PageStyles';
import {
  Education,
  Experience,
  Introduction,
  Skills,
  Projects,
  RainBackground,
  Contact,
  WindyBG,
  TitleSection
} from './components/components'

const App: React.FC = () => {
  // The dark/light mode state handler
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (<>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {theme === 'light' ? <WindyBG /> : <RainBackground theme={theme}/>}
      <Container>
        <TitleSection theme={theme} toggleTheme={toggleTheme}/>
        <Introduction />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact theme={theme}/>
      </ Container>
    </ThemeProvider>
  </>);
};

export default App;
