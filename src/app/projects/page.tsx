"use client";

import React from 'react';
import MainLayout from '@/components/layout/main-layout';
import ProjectCard, { ProjectGrid } from '@/components/ui/project-card';
import { motion } from 'framer-motion';
import { GradientText } from '@/components/ui/animated-text';
import { Button } from '@/components/ui/button';
import { FaFilter } from 'react-icons/fa';

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
  {
    title: 'Nebula Social',
    description: 'Platform media sosial dengan antarmuka yang futuristik dan fitur interaksi yang unik.',
    imageSrc: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070',
    tags: ['React', 'Firebase', 'Styled Components'],
    href: '/projects/nebula-social',
  },
  {
    title: 'Quantum Portfolio',
    description: 'Template portofolio dengan animasi quantum-inspired dan efek paralaks yang memukau.',
    imageSrc: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070',
    tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    href: '/projects/quantum-portfolio',
  },
  {
    title: 'Aurora Music',
    description: 'Aplikasi musik dengan visualisasi audio yang terinspirasi dari aurora borealis.',
    imageSrc: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070',
    tags: ['React', 'Web Audio API', 'Canvas'],
    href: '/projects/aurora-music',
  },
];

const categories = [
  'Semua',
  'Web App',
  'Mobile',
  'UI/UX',
  'Animasi',
  '3D',
];

export default function ProjectsPage() {
  return (
    <MainLayout>
      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-sm font-medium text-primary uppercase tracking-wider"
              >
                Portofolio
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <GradientText
                  text="Proyek Kreatif"
                  gradient="primary"
                  animationType="wave"
                  duration={0.03}
                />
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-text-secondary text-lg"
              >
                Jelajahi koleksi proyek kreatif saya yang menggabungkan desain yang memukau dengan teknologi modern.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      index === 0
                        ? 'bg-primary text-white'
                        : 'bg-foreground/5 border border-border-light text-foreground hover:border-primary/50'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  leftIcon={<FaFilter />}
                >
                  Filter
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
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

            <div className="flex justify-center mt-16">
              <Button
                variant="primary"
                size="lg"
                glowEffect="primary"
              >
                Muat Lebih Banyak
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm" />
          </div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-4 text-sm font-medium text-primary uppercase tracking-wider"
              >
                Tertarik?
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <GradientText
                  text="Mari Berkolaborasi"
                  gradient="secondary"
                  animationType="wave"
                  duration={0.03}
                />
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-text-secondary text-lg mb-8"
              >
                Punya ide proyek yang ingin diwujudkan? Saya siap membantu mewujudkan visi kreatif Anda menjadi kenyataan.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  glowEffect="primary"
                >
                  Hubungi Saya
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 