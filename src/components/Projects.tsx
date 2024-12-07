import { Section, SectionTitle } from '../styles/PageStyles';
import styled from 'styled-components';
import PROJECTS from '../data/projects';

const Projects: React.FC = () => {
  return (
    <Section>
			<SectionTitle>Projects</SectionTitle>
			{PROJECTS.map(({title, link, src, desc}) => 
				<div style={{marginBottom: '30px'}}>
					<ProjectTitle href={link}>{title}</ProjectTitle>
					<ProjectDesc>
						<p>{desc}</p>
						{src !== '' && <a href={src} style={{marginTop: '10px'}}> Source code</a>}
					</ProjectDesc>
				</div>
			)}
			More coming soon...
    </Section>
  );
};

const ProjectTitle = styled.a`
  font-size: 28px;
  margin: 0;
	transition: 0.3s ease;
`;

const ProjectDesc = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

export default Projects;
