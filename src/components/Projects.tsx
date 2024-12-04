import React, {FC} from 'react';
import { Section, SectionTitle } from '../styles/PageStyles';
import styled from 'styled-components';
import PROJECTS from '../data/projects';

interface ProjectInfo {
  title: string;	// Name of the project
	link: string;		// The deployed site (if applicable)
	src: string;		// Source code	(if applicable)
	desc: string;		// Brief descroption
}

const Project: FC<ProjectInfo> = ({ title, link, src, desc }) => {
  return (<div style={{marginBottom: '30px'}}>
		<ProjectTitle href={link}>{title}</ProjectTitle>
		<ProjectDesc>
			<p>{desc}</p>
			{src !== '' && <a href={src} style={{marginTop: '10px'}}> Source code</a>}
		</ProjectDesc>
		More coming soon...
	</div>);
};

const Projects: React.FC = () => {
  return (
    <Section>
			<SectionTitle>Projects</SectionTitle>
			{/* <p>Here are a few cool projects I have been working on...</p> */}
			{PROJECTS.map(({title, link, src, desc}) => 
				<Project title={title} link={link} src={src} desc={desc}/>
			)}
    </Section>
  );
};

const ProjectTitle = styled.a`
  font-size: 28px;
  margin: 0;
	transition: 0.3s ease;

	/* &:hover {
		text-shadow: 0px 0px 20px #24a7ff;
		color: #24a7ff;
	} */
`;

const ProjectDesc = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

export default Projects;
