"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  animationType?: 'wave' | 'typewriter' | 'fade' | 'bounce';
  delay?: number;
  duration?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  once = true,
  animationType = 'wave',
  delay = 0,
  duration = 0.05,
}) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
  };

  const getAnimationVariant = () => {
    switch (animationType) {
      case 'wave':
        return {
          hidden: { y: 20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              damping: 12,
              stiffness: 100,
            },
          },
        };
      case 'typewriter':
        return {
          hidden: { opacity: 0, x: -20 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              type: 'spring',
              damping: 12,
              stiffness: 100,
            },
          },
        };
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          },
        };
      case 'bounce':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              type: 'spring',
              damping: 8,
              stiffness: 100,
            },
          },
        };
      default:
        return {
          hidden: { y: 20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              damping: 12,
              stiffness: 100,
            },
          },
        };
    }
  };

  const child = getAnimationVariant();

  return (
    <motion.div
      className={cn('flex overflow-hidden', className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

interface GradientTextProps {
  text: string;
  className?: string;
  gradient?: 'primary' | 'secondary';
  animationType?: 'wave' | 'typewriter' | 'fade' | 'bounce';
  delay?: number;
  duration?: number;
}

export const GradientText: React.FC<GradientTextProps> = ({
  text,
  className,
  gradient = 'primary',
  animationType = 'wave',
  delay = 0,
  duration = 0.05,
}) => {
  const gradientClass = gradient === 'primary' ? 'text-gradient-primary' : 'text-gradient-secondary';

  return (
    <AnimatedText
      text={text}
      className={cn(gradientClass, className)}
      animationType={animationType}
      delay={delay}
      duration={duration}
    />
  );
};

interface SplitTextProps {
  text: string;
  className?: string;
  highlightIndices?: number[];
  highlightClassName?: string;
  animationType?: 'wave' | 'typewriter' | 'fade' | 'bounce';
  delay?: number;
  duration?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className,
  highlightIndices = [],
  highlightClassName = 'text-primary',
  animationType = 'wave',
  delay = 0,
  duration = 0.05,
}) => {
  const words = text.split(' ');

  return (
    <div className={cn('flex flex-wrap', className)}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <AnimatedText
            text={word}
            className={cn(
              highlightIndices.includes(i) && highlightClassName
            )}
            animationType={animationType}
            delay={delay + i * 0.1}
            duration={duration}
          />
          {i !== words.length - 1 && <span>&nbsp;</span>}
        </React.Fragment>
      ))}
    </div>
  );
}; 