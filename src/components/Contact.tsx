import { Section, SectionTitle } from '../styles/PageStyles';

interface ContactProps {
  theme: string;
};

const Contact: React.FC<ContactProps> = ({theme = 'dark'}) => {
  return (
    <Section style={{borderTop: `1px solid ${theme === 'dark' ? 'white' : 'black'}`}}>
      <SectionTitle style={{marginTop: '20px'}}>Contact</SectionTitle>
      <p><a onClick={() => {navigator.clipboard.writeText('shafi.rafiq85@gmail.com')}} style={{cursor: 'pointer'}}>Email: shafi.rafiq85@gmail.com</a></p>
      <p><a href='https://www.linkedin.com/in/shafirafiq/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>
    </Section>
  );
};

export default Contact;
