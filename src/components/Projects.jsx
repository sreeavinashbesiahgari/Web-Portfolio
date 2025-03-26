import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

import ragChatbotImage from '../assets/images/ragchatbot.png';
import ecomImage from '../assets/images/ecommerce.avif';
import sentimentImage from '../assets/images/multilanguage.jpg';

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${props => props.theme === 'dark' ? '#1a1a1a' : '#ffffff'};
  transition: all 0.3s ease;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#2d3436'};
  font-weight: 600;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: 0.5rem 1.5rem;
  border: 1px solid ${props => props.theme === 'dark' ? '#636e72' : '#dfe6e9'};
  border-radius: 20px;
  background-color: ${props => props.active ? '#2d3436' : 'transparent'};
  color: ${props => props.active ? '#ffffff' : props.theme === 'dark' ? '#ffffff' : '#2d3436'};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme === 'dark' ? '#636e72' : '#dfe6e9'};
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#2d3436'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${props => props.theme === 'dark' ? '#2d3436' : '#ffffff'};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid ${props => props.theme === 'dark' ? '#636e72' : '#dfe6e9'};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#2d3436'};
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme === 'dark' ? '#b2bec3' : '#636e72'};
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  padding: 0.2rem 0.8rem;
  background-color: ${props => props.theme === 'dark' ? '#636e72' : '#f5f6fa'};
  border-radius: 15px;
  font-size: 0.8rem;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#2d3436'};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme === 'dark' ? '#74b9ff' : '#0984e3'};
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme === 'dark' ? '#0984e3' : '#74b9ff'};
  }
`;

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
    image: ecomImage,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: 'https://github.com/yourusername/project1',
    category: 'fullstack'
  },
  {
    title: 'RAG-based QA Chatbot',
    description: 'A chatbot that uses RAG (Retrieval-Augmented Generation) to answer questions from given files.',
    image: ragChatbotImage,
    technologies: ['Python', 'Langchain', 'Streamlit','Hugging Face','OpenAI','RAG','NLP'],
    github: 'https://github.com/sreeavinashbesiahgari/RAG_QA_CHATBOT',
    category: 'DataScience'
  },
  {
    title: 'MultiLanguage sentiment analysis',
    description: 'A sentiment analysis model that can analyze text in multiple languages.',
    image: sentimentImage,
    technologies: ['Python', 'Hugging Face','Transformers','Streamlit','NLP'],
    github: 'https://github.com/sreeavinashbesiahgari/MultiLanguage_SentimentAnalysis',
    category: 'DataScience'
  }
];

const categories = ['all', 'DataScience','fullstack'];

const Projects = ({ theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <ProjectsSection id="projects" theme={theme}>
      <Container>
        <Title
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </Title>
        <FilterContainer>
          {categories.map(category => (
            <FilterButton
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </FilterButton>
          ))}
        </FilterContainer>
        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              theme={theme}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
                <ProjectDescription theme={theme}>
                  {project.description}
                </ProjectDescription>
                <TechStack>
                  {project.technologies.map(tech => (
                    <TechTag key={tech} theme={theme}>
                      {tech}
                    </TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </ProjectLink>
                  
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 