import styled from 'styled-components';
import { Section, SectionTitle } from '../styles/PageStyles';

// Future change: each experience item should be mapped from a list of experience items imported from data
const Experience = () => (
  <Section>
    <SectionTitle>Professional Experience</SectionTitle>
    <ExperienceItem>
      <Role>Graduate Software Developer</Role>
      <Company>Police Bank</Company>
      <Duration>2022 - 2024</Duration>
      <JobDescription>
        <JobRequirements>Developed multiple new features to existing applications to streamline data management processes, and in the process of doing so, created various reusable React components</JobRequirements>
        <JobRequirements>Created multiple web pages using React and React Redux, interacting directly with stakeholders to provide UI/UX insights and then deployed and maintained those using WordPress CMS</JobRequirements>
        <JobRequirements>Developed automated E2E and integrated tests for front end applications using Cypress to make a more efficient testing process</JobRequirements>
        <JobRequirements>Working effectively in an agile team environment to present digital solutions for stakeholders in a systematic manner</JobRequirements>
      </JobDescription>
    </ExperienceItem>
  </Section>
);

const JobRequirements = styled.div`
  margin: 12px;
`;

const ExperienceItem = styled.div`
  margin-bottom: 20px;
`;

const Role = styled.h3`
  font-size: 20px;
  margin: 0;
`;

const Company = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

const Duration = styled.p`
  font-size: 14px;
  color: gray;
  margin: 5px 0;
`;

const JobDescription = styled.ul`
  /* margin: 10px 0 0 20px; */
  display: flex;
  flex-direction: column;
`;

export default Experience;
