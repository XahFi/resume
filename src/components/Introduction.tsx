import React from 'react';
import { Section, SectionTitle } from '../styles/PageStyles';

const Introduction: React.FC = () => {
  return (
    <Section>
    <SectionTitle>A Little About Me</SectionTitle>
    <p>
      Hi, I'm Shafi! I am a passionate software engineer with a comprehensive background in programming. During my Bachelor's degree, I have explored a variety of full stack development projects, working with several tech stacks along the way. In my Master's degree, I took a deeper dive into the realm of cybersecurity, focusing on low-level programming and security aspects. During my Master's degree, I also worked full-time as a Graduate Software Developer, more of which you can learn about below.
    </p>
    <p>
      I am currently very interested about the possibilities that the integration of AI can have in web applications, particularly in the aspect of creating uniquely tailored user experiences.
    </p>
    <p>
      A little side note, the animated background for this page has been made using React Three Fibre (ThreeJS). I recommend the dark mode!
    </p>
  </Section>
  );
};

export default Introduction;
