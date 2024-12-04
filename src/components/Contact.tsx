import { Section, SectionTitle } from '../styles/PageStyles';

const Contact: React.FC = () => {
  return (
    <Section>
    <SectionTitle>Contact</SectionTitle>
    <p><a onClick={() => {navigator.clipboard.writeText('shafi.rafiq85@gmail.com')}} style={{cursor: 'pointer'}}>Email: shafi.rafiq85@gmail.com</a></p>
    <p><a href='https://www.linkedin.com/in/shafirafiq/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>
  </Section>
  );
};

export default Contact;
