import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import Layout from '../Layout/Layout';

const ContactContainer = styled.div`
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

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 60px;
  width: 100%;
`;

const ContactCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
`;

const ContactLabel = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 10px;
`;

const ContactValue = styled.a`
  color: ${props => props.theme.colors.lightText};
  text-decoration: none;
  transition: color 0.2s ease;
  display: block;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 60px;
  justify-content: center;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.text};
  font-size: 2rem;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const Contact = () => {
  return (
    <Layout id="contact">
      <ContactContainer>
        <SectionTitle>Get in Touch</SectionTitle>
        <ContactInfo>
          <ContactCard>
            <ContactIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </ContactIcon>
            <ContactLabel>Email</ContactLabel>
            <ContactValue href="mailto:fl0323@hotmail.com">
              fl0323@hotmail.com
            </ContactValue>
          </ContactCard>

          <ContactCard>
            <ContactIcon>
              <FontAwesomeIcon icon={faPhone} />
            </ContactIcon>
            <ContactLabel>Phone</ContactLabel>
            <ContactValue href="tel:+55429994159867">
              +55 42 99941-5987
            </ContactValue>
          </ContactCard>

          <ContactCard>
            <ContactIcon>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </ContactIcon>
            <ContactLabel>Location</ContactLabel>
            <ContactValue as="span">
              Ponta Grossa, Parana, Brazil
            </ContactValue>
          </ContactCard>
        </ContactInfo>

        <SocialLinks>
          <SocialLink
            href="https://github.com/Falcao1303"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
          >
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/lucasfalcao429858a1"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
        </SocialLinks>
      </ContactContainer>
    </Layout>
  );
};

export default Contact;