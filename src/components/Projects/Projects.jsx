import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Layout from '../Layout/Layout';

const ProjectsContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 60px;
  width: 100%;
`;

const ProjectCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
`;

const ProjectContent = styled.div`
  padding: 30px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.lightText};
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const ProjectLink = styled.a`
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'Enterprise Resource Management System',
      description: 'A comprehensive ERP system developed for MMTech, featuring modules for inventory management, HR, and financial tracking.',
      techStack: ['React', 'Laravel', 'PostgreSQL', 'Redis', 'Docker'],
      githubUrl: 'https://github.com/Falcao1303/erp-system',
      liveUrl: 'https://mmtech-erp.com',
    },
    {
      title: 'Secure Payment Gateway Integration',
      description: 'Developed a secure payment processing system with multiple payment provider integrations and strong encryption.',
      techStack: ['Node.js', 'TypeScript', 'MongoDB', 'AWS Lambda'],
      githubUrl: 'https://github.com/Falcao1303/payment-gateway',
      liveUrl: 'https://secure-payments.mmtech.com',
    },
    {
      title: 'Angular-based CRM Platform',
      description: 'A modern CRM solution featuring customer management, sales tracking, and real-time data visualization.',
      techStack: ['Angular', 'PHP', 'MySQL', 'Chart.js'],
      githubUrl: 'https://github.com/Falcao1303/crm-platform',
      liveUrl: 'https://mmtech-crm.com',
    },
  ];

  return (
    <Layout alternate id="projects">
      <ProjectsContainer>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.title}>
              <ProjectImage>📱</ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.techStack.map(tech => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </ProjectLink>
                  <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </Layout>
  );
};

export default Projects;