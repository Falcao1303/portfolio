import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '../Layout/Layout';

const AboutContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
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

const AboutContent = styled.div`
  max-width: 800px;
  margin: 50px auto 0;
`;

const AboutText = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.lightText};
  margin-bottom: 20px;
  line-height: 1.8;
  text-align: left;
`;

const EducationSection = styled.div`
  margin-top: 60px;
`;

const EducationItem = styled.div`
  margin-bottom: 30px;
`;

const EducationTitle = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
`;

const EducationDetails = styled.p`
  color: ${props => props.theme.colors.lightText};
  font-size: 1rem;
`;

const About = () => {
  return (
    <Layout alternate id="about">
      <AboutContainer>
        <SectionTitle>About Me</SectionTitle>
        <AboutContent>
          <AboutText>
            A results-oriented Full Stack Developer with over 5 years of hands-on experience in designing, 
            developing, and maintaining web and mobile applications. Proficient in the entire development lifecycle, 
            with a strong command of modern technologies including React, Node.js, PHP, and Laravel.
          </AboutText>
          <AboutText>
            Currently working at MMTech in Ponta Grossa, Brazil as a Full Stack Developer, where I develop and 
            maintain web and mobile applications using React, Angular, PHP, Laravel, Node.js, and TypeScript. 
            Experienced in working with both PostgreSQL and MySQL databases.
          </AboutText>
          <AboutText>
            Experienced in Agile/Scrum methodologies and with a postgraduate background in Information Security
            and Multiplatform Projects, I am dedicated to delivering secure, scalable, and high-quality solutions.
            I am currently seeking a challenging developer role in an international company to contribute to
            innovative projects.
          </AboutText>
        </AboutContent>
        
        <EducationSection>
          <SectionTitle style={{ marginBottom: '40px' }}>Education</SectionTitle>
          <div style={{ marginTop: '60px' }}>
            <EducationItem>
              <EducationTitle>Postgraduate Specialization in Multiplatform Project Development</EducationTitle>
              <EducationDetails>Descomplica | Rio de Janeiro, Brazil (2022)</EducationDetails>
            </EducationItem>
            
            <EducationItem>
              <EducationTitle>Bachelor of Science in Information Systems</EducationTitle>
              <EducationDetails>Unicesumar | Ponta Grossa, Brazil (2019 - 2021)</EducationDetails>
            </EducationItem>
          </div>
        </EducationSection>
      </AboutContainer>
    </Layout>
  );
};

export default About;