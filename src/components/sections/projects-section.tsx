"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { ProjectGrid } from '@/components/ui/project-card';
import { Button } from '@/components/ui/button';
import { AnimatedText } from '@/components/ui/animated-text';
import { FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    title: 'Dreamscape Gallery',
    description: 'Galeri seni digital dengan efek visual yang memukau dan interaktif.',
    imageSrc: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2070',
    tags: ['React', 'Three.js', 'GSAP'],
    href: '/projects/dreamscape-gallery',
  },
  {
    title: 'Ethereal Commerce',
    description: 'Platform e-commerce dengan pengalaman belanja yang surreal dan imersif.',
    imageSrc: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974',
    tags: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    href: '/projects/ethereal-commerce',
  },
  {
    title: 'Cosmic Dashboard',
    description: 'Dashboard analitik dengan visualisasi data yang dinamis dan interaktif.',
    imageSrc: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2071',
    tags: ['React', 'D3.js', 'TypeScript'],
    href: '/projects/cosmic-dashboard',
  },
];

const ProjectsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-medium text-primary uppercase tracking-wider"
          >
            Portofolio
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <AnimatedText
              text="Proyek Terbaru"
              animationType="wave"
              className="text-foreground"
            />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-text-secondary text-center max-w-2xl mb-8"
          >
            Eksplorasi koleksi proyek kreatif saya yang menggabungkan desain yang memukau dengan teknologi modern untuk menciptakan pengalaman digital yang tak terlupakan.
          </motion.p>
        </div>

        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              tags={project.tags}
              href={project.href}
            />
          ))}
        </ProjectGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Button
            variant="ghost"
            size="lg"
            rightIcon={<FaArrowRight />}
          >
            Lihat Semua Proyek
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection; 