"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  href: string;
  className?: string;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  tags,
  href,
  className,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        'group relative overflow-hidden rounded-xl border border-border-light bg-foreground/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-glow-primary',
        className
      )}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <Link href={href} className="block h-full">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <p className="mb-4 text-sm text-text-secondary line-clamp-2">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full bg-foreground/10 px-2.5 py-0.5 text-xs font-medium text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
      
      {/* Decorative elements */}
      <div className="absolute top-2 right-2 h-20 w-20 rounded-full bg-primary/5 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-2 left-2 h-16 w-16 rounded-full bg-secondary/5 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
};

interface ProjectGridProps {
  children: React.ReactNode;
  className?: string;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ children, className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6', className)}>
      {children}
    </div>
  );
};

export default ProjectCard; 