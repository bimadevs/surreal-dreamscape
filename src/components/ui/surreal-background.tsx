"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { getRandomFloat } from '@/lib/utils';

interface FloatingOrbProps {
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  color: string;
}

const FloatingOrb: React.FC<FloatingOrbProps> = ({ size, x, y, delay, duration, color }) => {
  return (
    <motion.div
      className="absolute rounded-full opacity-30 blur-xl"
      style={{
        width: size,
        height: size,
        background: color,
        left: `${x}%`,
        top: `${y}%`,
      }}
      initial={{ scale: 0.8, opacity: 0.2 }}
      animate={{
        y: [0, -30, 0],
        scale: [0.8, 1, 0.8],
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
};

interface SurrealBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
}

const SurrealBackground: React.FC<SurrealBackgroundProps> = ({ intensity = 'medium' }) => {
  const orbCount = intensity === 'low' ? 5 : intensity === 'medium' ? 10 : 15;
  const orbs = useRef<Array<{
    id: number;
    size: number;
    x: number;
    y: number;
    delay: number;
    duration: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const colors = [
      'radial-gradient(circle, rgba(138, 43, 226, 0.7) 0%, rgba(138, 43, 226, 0) 70%)',
      'radial-gradient(circle, rgba(0, 191, 255, 0.7) 0%, rgba(0, 191, 255, 0) 70%)',
      'radial-gradient(circle, rgba(255, 107, 107, 0.7) 0%, rgba(255, 107, 107, 0) 70%)',
    ];

    orbs.current = Array.from({ length: orbCount }, (_, i) => ({
      id: i,
      size: getRandomFloat(100, 300),
      x: getRandomFloat(0, 100),
      y: getRandomFloat(0, 100),
      delay: getRandomFloat(0, 5),
      duration: getRandomFloat(5, 15),
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [orbCount]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="surreal-bg" />
      <div className="surreal-stars" />
      
      {orbs.current.map((orb) => (
        <FloatingOrb
          key={orb.id}
          size={orb.size}
          x={orb.x}
          y={orb.y}
          delay={orb.delay}
          duration={orb.duration}
          color={orb.color}
        />
      ))}
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient-vignette pointer-events-none" />
    </div>
  );
};

export default SurrealBackground; 