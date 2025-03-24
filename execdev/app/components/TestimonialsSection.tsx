"use client";
import React, { useRef, useEffect } from 'react';
import { 
  Typography, 
  Box, 
  Container,
  Grid,
  Divider,
  Avatar
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';

// Testimonial data - replace with actual client testimonials
const testimonialData = [
  {
    id: 1,
    name: "Fahad Saleem",
    title: "CEO",
    company: "Navigrated",
    quote: "Working with Yasan transformed our complex application into something our users genuinely enjoy using — 40% increase in user retention.",
    avatar: "",
  },
  {
    id: 2,
    name: "Hashaam D Khan",
    title: "Product Manager",
    company: "Superb",
    quote: "Rare combination of technical expertise and user empathy. His approach meant our platform handled our 3x growth with zero issues.",
    avatar: "",
  },
  {
    id: 3,
    name: "Jibran Khalil",
    title: "Founder",
    company: "SILA School",
    quote: "As a designer, I appreciate developers who care about details. Yasan's implementation was pixel-perfect and improved our original designs.",
    avatar: "",
  },
  {
    id: 4,
    name: "Mujobie Pierre Paul",
    title: "Founder",
    company: "Travel Hotline | Luxe Canine Stays",
    quote: "Yasan stands out for his commitment to accessibility. Made our application fully compliant with WCAG without sacrificing aesthetics.",
    avatar: "",
  },
  {
    id: 5,
    name: "Anna Friend",
    title: "Community Manager",
    company: "NextChapters",
    quote: "Ability to translate complex technical concepts into understandable language made collaboration incredibly smooth for our non-technical team.",
    avatar: "",
  },
  {
    id: 6,
    name: "Mabrelle",
    title: "CEO",
    company: "Olaphase SDN",
    quote: "The product Yasan built for us directly contributed to a 45% increase in conversion rate. Focus on UX and performance made all the difference.",
    avatar: "",
  }
];

// Component for a single testimonial card
const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonialData[0], index: number }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Staggered animation - delay based on index
          setTimeout(() => {
            controls.start({ opacity: 1, y: 0 });
          }, index * 200); // 200ms delay between each card
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box
        sx={{
          height: 320, // Fixed height for all cards
          p: 4,
          borderRadius: '12px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.07)',
          }
        }}
      >
        {/* Testimonial quote */}
        <Typography 
          variant="body1" 
          sx={{ 
            fontStyle: 'italic',
            color: 'rgba(255, 255, 255, 0.8)',
            mb: 3,
            flex: 1,
            fontSize: '1.05rem',
            lineHeight: 1.6,
            fontFamily: 'var(--font-roboto-serif)',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 5,
            WebkitBoxOrient: 'vertical',
          }}
        >
          "{testimonial.quote}"
        </Typography>
        
        <Box>
          <Divider sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            my: 2.5 
          }} />
          
          {/* Person info with avatar */}
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
          }}>
            <Avatar 
              src={testimonial.avatar} 
              alt={testimonial.name}
              sx={{ 
                width: 60, 
                height: 60,
                mr: 2,
                border: '2px solid rgba(255, 255, 255, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}
            >
              {testimonial.name.charAt(0)}
            </Avatar>
            <Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  color: 'white',
                  fontFamily: 'var(--font-roboto-serif)',
                  mb: 0.5
                }}
              >
                {testimonial.name}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-roboto-serif)',
                }}
              >
                {testimonial.title} <Box component="span" sx={{ mx: 0.5, display: 'inline-block', fontSize: '0.6rem', position: 'relative', top: '-0.1em' }}>●</Box> {testimonial.company}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <Box sx={{ 
      backgroundColor: '#121212', 
      py: { xs: 10, md: 12 },
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Static grid background - same as other sections */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.65,
          zIndex: 0,
          pointerEvents: 'none',
          backgroundColor: '#121212',
          backgroundImage: `
            linear-gradient(rgba(40, 40, 40, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(40, 40, 40, 0.5) 1px, transparent 1px),
            linear-gradient(rgba(40, 40, 40, 0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(40, 40, 40, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 10px 10px, 10px 10px',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at center, rgba(25, 25, 25, 0) 0, #121212 100%)',
            zIndex: 1
          }
        }}
      />
      
      <Container id="testimonials" maxWidth={false} sx={{ maxWidth: '1600px', mx: 'auto', position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            variant="overline"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.9rem',
              letterSpacing: '1.5px',
              mb: 1,
              display: 'block',
              fontFamily: 'var(--font-roboto-serif)',
            }}
          >
            TESTIMONIALS
          </Typography>
          <Box 
            sx={{ 
              width: '60px', 
              height: '4px', 
              backgroundColor: 'rgba(255, 255, 255, 0.3)', 
              mx: 'auto',
              mb: 3
            }} 
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontFamily: 'var(--font-roboto-serif)',
            }}
          >
            Client Feedback
          </Typography>
        </Box>
        
        {/* Testimonials Grid - 3 columns on desktop, 1 on mobile */}
        <Grid container spacing={3}>
          {testimonialData.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection; 