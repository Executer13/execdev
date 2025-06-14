"use client";
import React, { useRef, useState, useEffect } from 'react';
import { 
  Typography, 
  Box, 
  Button, 
  IconButton, 
  Container 
} from '@mui/material';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
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

// Simplified Static Profile Image component
const ProfileImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ 
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }
      }}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.3 }
      }}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '12px',
      }}
    >
      {/* Main Image Container */}
      <motion.div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformOrigin: 'center',
        }}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={imageUrl}
          alt="Profile Picture"
          layout="fill"
          objectFit="cover"
          priority
          className="unselectable"
        />

        {/* Dynamic Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              linear-gradient(
                45deg,
                rgba(135, 0, 255, 0.15) 0%,
                rgba(0, 212, 255, 0.15) 100%
              )
            `,
            mixBlendMode: 'soft-light',
          }}
        />

        {/* Subtle Noise Texture */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/noise.png")',
          opacity: 0.03,
          mixBlendMode: 'overlay',
          pointerEvents: 'none'
        }} />
      </motion.div>

      {/* Modern Border Animation */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: '12px',
        border: '1px solid transparent',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ 
            scale: 1.02, 
            opacity: 1,
            transition: {
              duration: 4,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: "easeInOut"
            }
          }}
          style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            right: '-50%',
            bottom: '-50%',
            background: `
              conic-gradient(
                from 230deg at 50% 50%,
                rgba(255,255,255,0) 0deg,
                rgba(255,255,255,0.15) 70deg,
                rgba(255,255,255,0) 160deg
              )
            `,
            mixBlendMode: 'soft-light',
          }}
        />
      </div>
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

        {/* Right: Profile Image without 3D animation */}
        <Box
          ref={profileRef}
          sx={{
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            justifyContent: { xs: 'flex-end', md: 'flex-end' },
            alignItems: 'flex-start',
            height: { xs: 'auto', md: '100%' },
            mt: { xs: 2, md: 0 },
            mb: { xs: 4, md: 0 },
            perspective: '1000px',
        
          }}
        >
          <motion.div
            style={{ 
              width: '100%', 
              height: '100%', 
              transformStyle: 'preserve-3d',
              display: 'flex',
              justifyContent: 'flex-end'
            }}
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              rotateY: 0,
              transition: { 
                duration: 0.8, 
                delay: 0.6,
                ease: [0.33, 1, 0.68, 1] 
              }
            }}
            whileHover={{
              rotateY: -2,
              translateZ: 20,
              transition: { duration: 0.4 }
            }}
          >
            <Box 
              sx={{
                width: { xs: '380px', md: '480px' },
                height: { xs: '380px', md: '560px' },
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '12px',
                  padding: '1px',
                  background: 'transparent',
                  WebkitMask: 'unset',
                  mask: 'unset',
                }
              }}
            >
              <ProfileImage imageUrl="/dp.jpeg" />
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