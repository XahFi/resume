import styled from 'styled-components';
import { Section, SectionTitle } from '../styles/PageStyles';

const Education: React.FC = () => {
  return (
    <Section>
      <SectionTitle>Education</SectionTitle>
      <ExperienceItem>
        <Certificate>Master of Information Technology</Certificate>
        <Institute>University of New South Wales</Institute>
        <Duration>2022 - 2024</Duration>
      </ExperienceItem>
      <ExperienceItem>
        <Certificate>Bachelor of Science (Computer Science)</Certificate>
        <Institute>University of New South Wales</Institute>
        <Duration>2019 - 2022</Duration>
      </ExperienceItem>
      <ExperienceItem>
        <Certificate>Higher School Certificate</Certificate>
        <Institute>Hurlstone Agricultural High School</Institute>
        <Duration>2013 - 2018</Duration>
      </ExperienceItem>
    </Section>
  );
};

const ExperienceItem = styled.div`
  margin-bottom: 20px;
`;

const Certificate = styled.h3`
  font-size: 20px;
  margin: 0;
`;

const Institute = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

const Duration = styled.p`
  font-size: 14px;
  color: gray;
  margin: 0;
`;

export default Education;
