import { Section } from '../styles/PageStyles';
import { ThemeButton } from './components';

interface TitleProps {
  theme: string;
  toggleTheme(): void;
};

const TitleSection: React.FC<TitleProps> = ({theme = 'dark', toggleTheme}) => {
  return (
    <Section>
      <div style={{paddingBottom: '10px', display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${theme === 'dark' ? 'white' : 'black'}`}}>
				<div style={{display: 'flex', flexDirection: 'column'}}>
					<p style={{fontSize: '60px', fontWeight: '600', margin: '10px 0'}}>Shafi Rafiq</p>
				</div>
				<ThemeButton theme={theme} onClick={toggleTheme}>
					{theme === 'light' ? 'Dark' : 'Light'}
				</ThemeButton>
			</div>
    </Section>
  );
};

export default TitleSection;
