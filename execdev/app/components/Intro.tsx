"use client";
import React, { useRef, useState, useEffect } from 'react';
import { 
  Typography, 
  Box, 
  Button, 
  IconButton, 
  Container 
} from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

interface IntroProps {
  scrollToProjects: () => void;
  scrollIconVisible: boolean;
}




// 3D Animated Image component with modern tile effect
const AnimatedProfileImage = ({ imageUrl }: { imageUrl: string }) => {
  const [hovered, setHovered] = useState(false);
  const randomKey = useRef(Math.random());
  
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 25 }}
      animate={{ 
        opacity: 1, 
        rotateY: hovered ? 15 : 0,
        rotateX: hovered ? -5 : 0
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        duration: 0.5 
      }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ 
        width: '100%', 
        height: '100%',
        perspective: '1000px'
      }}
    >
      <motion.div
        animate={{ 
          rotateY: hovered ? [0, 2, 0] : 0
        }}
        transition={{ 
          repeat: hovered ? Infinity : 0, 
          duration: 3,
          ease: "easeInOut"
        }}
        style={{ 
          width: '100%', 
          height: '100%', 
          position: 'relative'
        }}
      >
        {/* Main image */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}
        >
          <Image
            src={imageUrl}
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            priority
          />
          
          {/* Overlay with modern gradient effect */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(45deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 40%, rgba(255,255,255,0.1) 60%, rgba(0,0,0,0.4) 100%)',
              opacity: hovered ? 0.7 : 0.2,
              transition: 'opacity 0.5s ease-in-out'
            }}
          />
        </Box>
        
        {/* Floating tech dots */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`${randomKey.current}-${i}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: hovered ? [0, 0.7, 0] : 0,
              x: hovered ? (Math.random() - 0.5) * 100 : 0,
              y: hovered ? (Math.random() - 0.5) * 100 : 0
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
              repeatType: 'reverse'
            }}
            style={{
              position: 'absolute',
              width: 4 + Math.random() * 8,
              height: 4 + Math.random() * 8,
              borderRadius: '50%',
              background: `rgba(${155 + Math.random() * 100}, ${155 + Math.random() * 100}, 255, 0.8)`,
              filter: 'blur(1px)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

const Intro = ({ scrollToProjects, scrollIconVisible }: IntroProps) => {
  const profileRef = useRef(null);
  const isInView = useInView(profileRef);
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const scrollToNextSection = () => {
    // Scroll to the next screen (the container height is 90vh)
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
 
      
      {/* Hero Section - 80% height */}
      <Container
        maxWidth={false}
        sx={{
          height: '90vh',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          py: { xs: 4, md: 6 },
          px: { xs: 1, md: 2 },
          maxWidth: '1600px',
          mx: 'auto',
          position: 'relative',
          flex: '1 0 auto',
          mt: { xs: 0, md: 0 },
          zIndex: 1
        }}
      >
        {/* Left: Text */}
        <Box sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
          {/* Badge - appears first */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }} 
              >
                <Box 
                  sx={{ 
                    width: 12, 
                    height: 12, 
                    borderRadius: '50%', 
                    backgroundColor: '#2ecc71',
                    mr: 1,
                  }} 
                />
                <Typography 
                  variant='body2' 
                  sx={{ 
                    fontSize: '1rem',
                    fontWeight: 500,
                    fontFamily: 'var(--font-roboto-serif)'
                  }}
                >
                  Available for Projects
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* Name and title - appears second */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Typography variant='h1' sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '3.2rem', md: '5.2rem' }, fontFamily: 'var(--font-roboto-serif)' }}>
              Yasan Malik
            </Typography>
            <Typography variant='h6' sx={{ mb: 3, fontWeight: 'normal', fontSize: { xs: '1.6rem', md: '2rem' }, fontFamily: 'var(--font-roboto-serif)' }}>
              Full-Stack Developer & UX Designer
            </Typography>
          </motion.div>

          {/* Description - appears third */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Typography variant='body1' sx={{ mb: 3, lineHeight: 1.7, fontSize: '1.35rem', fontFamily: 'var(--font-roboto-serif)' }}>
              I design and build clean, functional products that solve real problems.
              From concept to launch - focused on usability, performance, and
              results.
            </Typography>
          </motion.div>

          {/* Buttons - appear fourth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Box sx={{ display: 'flex', mt: 4 }}>
              <Button
                variant='contained'
                endIcon={<ArrowForwardIcon fontSize="small" />}
                sx={{ 
                  backgroundColor: '#fff', 
                  color: '#000', 
                  mr: 3,
                  borderRadius: '4px',
                  padding: '0.7rem 1.5rem',
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  fontWeight: 500,
                  fontFamily: 'var(--font-roboto-serif)',
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                  }
                }}
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
              <Button 
                variant='outlined' 
                sx={{ 
                  borderColor: '#fff', 
                  color: '#fff',
                  borderRadius: '4px',
                  padding: '0.7rem 1.5rem',
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  fontWeight: 500,
                  fontFamily: 'var(--font-roboto-serif)',
                  '&:hover': {
                    borderColor: '#f0f0f0',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                  }
                }}
              >
                Get In Touch
              </Button>
            </Box>
          </motion.div>
            
          {/* Social Media Icons - appear fifth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <Box sx={{ display: 'flex', mt: 5 }}>
              <IconButton 
                sx={{ 
                  color: '#fff', 
                  mr: 2.5,
                  width: '48px',
                  height: '48px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '50%',
                  padding: '0.8rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
                component="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon fontSize="medium" />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: '#fff', 
                  mr: 2.5,
                  width: '48px',
                  height: '48px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '50%',
                  padding: '0.8rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <TwitterIcon fontSize="medium" />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: '#fff',
                  mr: 2.5,
                  width: '48px',
                  height: '48px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '50%',
                  padding: '0.8rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
                component="a"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon fontSize="medium" />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: '#fff',
                  width: '48px',
                  height: '48px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '50%',
                  padding: '0.8rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
                component="a"
                href="mailto:yasanmalikofficial@gmail.com"
                aria-label="Email"
              >
                <EmailIcon fontSize="medium" />
              </IconButton>
            </Box>
          </motion.div>
        </Box>

        {/* Right: Profile Image with 3D animation - appears last */}
        <Box
          ref={profileRef}
          sx={{
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
            alignItems: 'flex-start',
            height: { xs: 'auto', md: '100%' },
            mt: { xs: 2, md: 0 },
            mb: { xs: 4, md: 0 }
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'flex-end' }}
          >
            <Box 
              sx={{
                width: { xs: '380px', md: '480px' },
                marginRight: { md: 0 }, // Ensure there's no margin on the right on desktop
                height: { xs: '380px', md: '560px' },
                position: 'relative',
                borderRadius: { xs: '10px', md: '10px 0 0 10px' }, // Rounded corners only on left side for desktop
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                backgroundColor: 'transparent'
              }}
            >
              <AnimatedProfileImage imageUrl="/dp.jpeg" />
            </Box>
          </motion.div>
        </Box>
        
        {/* Scroll Down Indicator - 10% height */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: scrollIconVisible ? 1 : 0,
            y: scrollIconVisible ? 0 : 20 
          }}
          transition={{ 
            opacity: { duration: 0.5, delay: 2.0 },
            y: { duration: 0.5, delay: 2.0 }
          }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            textAlign: 'center',
            height: '10vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            cursor: 'pointer',
            zIndex: 3
          }}
          onClick={scrollToNextSection}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {/* Mouse shape */}
            <Box
              sx={{
                width: '26px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '20px',
                position: 'relative',
                mb: 1
              }}
            >
              {/* Mouse wheel/scroll animation */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut" 
                }}
                style={{
                  width: '4px',
                  height: '4px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '8px'
                }}
              />
            </Box>
            
            <Typography 
              variant="caption" 
              sx={{ 
                display: 'block',
                fontSize: '0.7rem',
                letterSpacing: '1px',
                opacity: 0.7,
                fontFamily: 'var(--font-roboto-serif)'
              }}
            >
              SCROLL DOWN
            </Typography>

            {/* AI-inspired data elements */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.7, 0],
                  scale: [0.5, 1, 0.5],
                  x: Math.sin(i * 45 * Math.PI / 180) * 60,
                  y: Math.cos(i * 45 * Math.PI / 180) * 60 - 20
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: i * 0.5,
                  repeatType: 'loop'
                }}
                style={{
                  position: 'absolute',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: `${10 + Math.random() * 4}px`,
                  fontFamily: 'monospace'
                }}
              >
                {Math.random() > 0.5 ? Math.floor(Math.random() * 10) : ['<', '>', '/', '{', '}', '[', ']'][Math.floor(Math.random() * 7)]}
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </>
  );
};

export default Intro; 