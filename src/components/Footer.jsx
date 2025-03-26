import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: ${props => props.theme === 'dark' ? '#1a1a1a' : '#f8f9fa'};
  color: ${props => props.theme === 'dark' ? '#a0a0a0' : '#666666'};
  transition: all 0.3s ease;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialIcon = styled(motion.a)`
  color: inherit;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #4ecdc4;
  }
`;

const Footer = ({ theme }) => {
  return (
    <FooterContainer theme={theme}>
      <FooterContent>
        <Copyright>
          © {new Date().getFullYear()} Sreeavinash Besiahgari. All rights reserved.
        </Copyright>
        <SocialLinks>
          <SocialIcon
            href="https://github.com/sreeavinashbesiahgari"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            href="https://linkedin.com/in/sreeavinashbesiahgari"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </SocialIcon>
          
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 