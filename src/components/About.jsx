import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload } from 'react-icons/fa';
import profilepic from '../assets/images/profilepic.jpg';
import resume from '../assets/resume/resume.pdf';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${props => props.theme === 'dark' ? '#1a1a1a' : '#f8f9fa'};
  transition: all 0.3s ease;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Content = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: ${props => props.theme === 'dark' ? '#e0e0e0' : '#333333'};
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`;

const InfoItem = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme === 'dark' ? '#a0a0a0' : '#666666'};
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255,107,107,0.2), rgba(78,205,196,0.2));
  }
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 500;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const About = ({ theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <AboutSection id="about" theme={theme}>
      <Container>
        <Content
          ref={ref}
          as={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>About Me</h2>
          <p>
            I am a Software Engineer with expertise in Web Development, Machine Learning, and GenAI, specializing in building scalable applications with intuitive interfaces and efficient backends.
          </p>
          <p>
            Passionate about solving real-world problems, I focus on writing clean, maintainable code and integrating AI models to enhance user experiences.
          </p>


          <InfoGrid>
            <InfoItem theme={theme}>
              <h3>Experience</h3>
              <p>3+ Years</p>
            </InfoItem>
            
            <InfoItem theme={theme}>
              <h3>Technologies</h3>
              <p>React, Python, DataScience</p>
            </InfoItem>
            <InfoItem theme={theme}>
              <h3>Education</h3>
              <p>M.S. Computer Science</p>
            </InfoItem>
          </InfoGrid>
          <DownloadButton
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Download Resume
          </DownloadButton>
        </Content>
        <ImageContainer
          as={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img src={profilepic} alt="Profile" />
        </ImageContainer>
      </Container>
    </AboutSection>
  );
};

export default About; 
