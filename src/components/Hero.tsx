import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePhoto from '../assets/profile.jpg';

function useTypewriter(text, speed = 45, delay = 500) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeoutId;
    let index = 0;

    setDisplayText('');

    timeoutId = setTimeout(function type() {
      setDisplayText(text.slice(0, index + 1));
      index += 1;

      if (index < text.length) {
        timeoutId = setTimeout(type, speed);
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay]);

  return displayText;
}

export function Hero() {
  const headlinePrefix = 'Frontend Developer crafting ';
  const headlineHighlight = 'fast, accessible, and responsive';
  const headlineSuffix = ' web experiences.';

  const fullHeadline = `${headlinePrefix}${headlineHighlight}${headlineSuffix}`;
  const typedHeadline = useTypewriter(fullHeadline, 42, 500);

  const prefixText = typedHeadline.slice(0, headlinePrefix.length);
  const highlightText = typedHeadline.slice(
    headlinePrefix.length,
    headlinePrefix.length + headlineHighlight.length
  );
  const suffixText = typedHeadline.slice(
    headlinePrefix.length + headlineHighlight.length
  );

  return (
    <section className="hero" id="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <span className="hero__badge-dot" />
            Available for freelance & full-time
          </motion.div>

          <motion.h1
            className="hero__title"
            aria-label={fullHeadline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span aria-hidden="true">
              {prefixText}
              {highlightText && <em>{highlightText}</em>}
              {suffixText}
              <span className="hero__typing-cursor" />
            </span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            I build high-performance interfaces with 3+ years of experience in React,
            JavaScript, and modern frontend technologies, turning designs into
            scalable, user-friendly products.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.4 }}
          >
            <a href="#featured-work" className="btn btn--primary btn--lg">
              View My Work
            </a>

            <a href="#contact" className="btn btn--outline btn--lg">
              <HiOutlineMail size={18} />
              Get in Touch
            </a>

            <a
              href="https://github.com/riya-goyal279"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-btn"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/riyagoyal279/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-btn"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.55 }}
        >
          <img
            src={profilePhoto}
            alt="Riya Goyal — Frontend Developer"
            className="hero__photo"
          />
        </motion.div>
      </div>
    </section>
  );
}