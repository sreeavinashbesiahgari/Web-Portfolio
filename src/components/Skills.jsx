import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker } from 'react-icons/fa';

const SkillsSection = styled.section`
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
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background-color: ${props => props.theme === 'dark' ? '#2a2a2a' : '#f8f9fa'};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #4ecdc4;
`;

const SkillTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 0.5rem;
  color: ${props => props.theme === 'dark' ? '#a0a0a0' : '#666666'};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '•';
    color: #4ecdc4;
  }
`;

const skills = [
  {
    category: 'Frontend',
    icon: <FaReact />,
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Streamlit']
  },
  {
    category: 'Backend',
    icon: <FaNodeJs />,
    skills: ['Node.js','Flask', 'Python', 'Django', 'REST APIs', 'FastAPI']
  },
  {
    category: 'Database',
    icon: <FaDatabase />,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL','MS SQL']
  },
  {
    category: 'DataScience',
    icon: <FaDatabase />,
    skills: ['Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'Keras']
  }
];

const Skills = ({ theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SkillsSection id="skills" theme={theme}>
      <Container>
        <Title
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </Title>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.category}
              theme={theme}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillTitle theme={theme}>{skill.category}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem key={item} theme={theme}>
                    {item}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 