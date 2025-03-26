import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${props => props.theme === 'dark' ? '#1a1a1a' : '#ffffff'};
  transition: all 0.3s ease;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme === 'dark' ? '#a0a0a0' : '#666666'};

  svg {
    font-size: 1.5rem;
    color: #4ecdc4;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialIcon = styled(motion.a)`
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #4ecdc4;
  }
`;

const ContactForm = styled.form`
  background-color: ${props => props.theme === 'dark' ? '#2a2a2a' : '#f8f9fa'};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
  }

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid ${props => props.theme === 'dark' ? '#3a3a3a' : '#ddd'};
    border-radius: 5px;
    background-color: ${props => props.theme === 'dark' ? '#1a1a1a' : '#ffffff'};
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #4ecdc4;
      box-shadow: 0 0 0 2px rgba(78,205,196,0.2);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const Contact = ({ theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_USER_ID'
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <ContactSection id="contact" theme={theme}>
      <Container>
        <ContactInfo
          ref={ref}
          as={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3>Get in Touch</h3>
          <ContactItem theme={theme}>
            <FaEnvelope />
            <span>avinash.besiahgari@gmail.com</span>
          </ContactItem>
          <ContactItem theme={theme}>
            <FaPhone />
            <span>+1 850 405 9167</span>
          </ContactItem>
          <ContactItem theme={theme}>
            <FaMapMarkerAlt />
            <span>Texas, USA</span>
          </ContactItem>
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
              href="https://www.linkedin.com/in/b-sree-avinash/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </SocialIcon>
            
          </SocialLinks>
        </ContactInfo>
        <ContactForm
          ref={ref}
          as={motion.form}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          theme={theme}
          onSubmit={handleSubmit}
        >
          <FormGroup theme={theme}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup theme={theme}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup theme={theme}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup theme={theme}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </SubmitButton>
          {status === 'success' && (
            <p style={{ color: '#4ecdc4', marginTop: '1rem' }}>
              Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#ff6b6b', marginTop: '1rem' }}>
              Error sending message. Please try again.
            </p>
          )}
        </ContactForm>
      </Container>
    </ContactSection>
  );
};

export default Contact; 