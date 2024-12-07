import { FC } from 'react';
import styled from 'styled-components';
import {SKILLS} from '../data/data';
import { Section, SectionTitle } from '../styles/PageStyles';

interface SkillButtonProps {
  skill: string;
  category: string;
}

interface ButtonProps {
  bg_color: string;
}

const SkillButton: FC<SkillButtonProps> = ({ skill, category }) => {
  let bg_color;
  if (category === 'frontend') bg_color = '#19a1e0';
  else if (category === 'backend') bg_color = '#e03a19';
  else bg_color = '#0bb40b';

  return (
    <Button bg_color={bg_color}>
      {skill}
    </Button>
  );
};

const Skills: React.FC = () => {
  return (
  <Section>
    <SectionTitle>Skills</SectionTitle>
    <SkillsList>
      {Object.entries(SKILLS).map(([category, skills]) => (
        skills.map(skill => 
          <SkillButton key={skill} skill={skill} category={category}/>
        )
      ))}
    </SkillsList>
    <div style={{margin: "30px 0"}}>
      <div style={{marginBottom: "10px", fontWeight: '600'}}>Legend: </div>
      {['Frontend', 'Backend', 'Other'].map(type => 
        <SkillButton key={type} skill={type} category={type.toLocaleLowerCase()}/>
      )}
    </div>
  </Section>
  );
};

export default Skills;

const Button = styled.button<ButtonProps>`
  /* background-color: ${props => props.bg_color}; */
  /* border: none; */
  border: 2px solid ${props => props.bg_color};
  background-color: transparent;
  color: ${props => props.bg_color};
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.bg_color};
    color: white;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  /* justify-content: space-around; */
`;
