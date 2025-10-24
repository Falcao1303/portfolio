import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Layout from '../Layout/Layout';

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.xxl};
  min-height: 100vh;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.text};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.25rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.lightText};
  margin-bottom: ${props => props.theme.spacing.xl};
  max-width: 600px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin: 0 auto;
    margin-bottom: ${props => props.theme.spacing.xl};
  }
`;

const CtaButton = styled(motion.button)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border-radius: 4px;
  font-weight: 600;
  transition: background-color ${props => props.theme.transitions.default};
  
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 350px;
  height: 480px;
  border-radius: 0px;
  object-fit: cover;
  border: none;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.15),
    0 0 1px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 30px 80px rgba(0, 0, 0, 0.2),
      0 0 1px rgba(0, 0, 0, 0.05);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 280px;
    height: 380px;
  }
`;

const Hero = () => {
  return (
    <Layout fullHeight id="home">
      <HeroContainer>
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm Lucas Falcão
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full Stack Developer
          </Subtitle>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A results-oriented developer with 5+ years of experience in web and mobile applications.
            Specializing in React, Node.js, PHP, and Laravel. Let's build something amazing together!
          </Description>
          <Link to="contact" smooth duration={500}>
            <CtaButton
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </CtaButton>
          </Link>
        </HeroContent>
        <ImageContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProfileImage src="/profile.jpg" alt="Lucas Falcão" />
        </ImageContainer>
      </HeroContainer>
    </Layout>
  );
};

export default Hero;