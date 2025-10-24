import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faServer,
  faDatabase,
  faShieldAlt,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import Layout from '../Layout/Layout';

const SkillsContainer = styled.div`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 60px;
  width: 100%;
`;

const SkillCategory = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.text};
`;

const SkillName = styled.span`
  font-weight: 500;
`;

const ExperienceInfo = styled.span`
  color: ${props => props.theme.colors.lightText};
  font-size: 0.9rem;
`;

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: faCode,
      skills: [
        { name: 'React', experience: '5 years' },
        { name: 'JavaScript (ES6+)', experience: '5 years' },
        { name: 'TypeScript', experience: '5 years' },
        { name: 'HTML5', experience: '5 years' },
        { name: 'CSS3', experience: '5 years' },
        { name: 'Angular', experience: '5 years' },
        { name: 'Redux', experience: '4 years' },
      ],
    },
    {
      title: 'Backend',
      icon: faServer,
      skills: [
        { name: 'Node.js', experience: '3 years' },
        { name: 'PHP', experience: '5 years' },
        { name: 'Laravel', experience: '4 years' },
        { name: 'Express.js', experience: '3 years' },
        { name: 'REST APIs', experience: '5 years' },
        { name: 'Apache', experience: '5 years' },
      ],
    },
    {
      title: 'Databases',
      icon: faDatabase,
      skills: [
        { name: 'MySQL', experience: '4 years' },
        { name: 'PostgreSQL', experience: '4 years' },
        { name: 'MongoDB', experience: '1 year' },
      ],
    },
    {
      title: 'Tools & Methods',
      icon: faTools,
      skills: [
        { name: 'Git/GitHub', experience: '5 years' },
        { name: 'Docker', experience: '2 years' },
        { name: 'CI/CD', experience: '3 years' },
        { name: 'Agile/Scrum', experience: '5 years' },
        { name: 'Linux', experience: '5 years' },
        { name: 'AWS', experience: '1 year' },
      ],
    },
    {
      title: 'Security & Quality',
      icon: faShieldAlt,
      skills: [
        { name: 'App Security', experience: '3 years' },
        { name: 'Threat Modeling', experience: '3 years' },
        { name: 'SonarLint/Cloud', experience: '5 years' },
      ],
    },
  ];

  return (
    <Layout id="skills">
      <SkillsContainer>
        <SectionTitle>Skills & Expertise</SectionTitle>
        <SkillsGrid>
          {skillCategories.map((category) => (
            <SkillCategory key={category.title}>
              <CategoryTitle>
                <FontAwesomeIcon icon={category.icon} />
                {category.title}
              </CategoryTitle>
              <SkillList>
                {category.skills.map(skill => (
                  <SkillItem key={skill.name}>
                    <SkillName>{skill.name}</SkillName>
                    <ExperienceInfo>{skill.experience}</ExperienceInfo>
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </Layout>
  );
};

export default Skills;