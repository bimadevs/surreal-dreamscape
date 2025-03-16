"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AnimatedText, GradientText } from '@/components/ui/animated-text';
import { FaDownload } from 'react-icons/fa';

const skills = [
  'UI/UX Design',
  'Frontend Development',
  'React & Next.js',
  'TypeScript',
  'TailwindCSS',
  'Framer Motion',
  'Three.js',
  'GSAP',
];

const AboutSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl border border-border-light">
              <Image
                src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1974"
                alt="Profile"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-5 -left-5 w-24 h-24 border border-primary rounded-full" />
            <div className="absolute -bottom-5 -right-5 w-32 h-32 border border-secondary rounded-full" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -left-10 bg-foreground/5 backdrop-blur-sm border border-border-light rounded-lg p-4 shadow-lg"
            >
              <p className="text-sm font-medium">
                <span className="text-primary">5+</span> Tahun Pengalaman
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -top-10 -right-10 bg-foreground/5 backdrop-blur-sm border border-border-light rounded-lg p-4 shadow-lg"
            >
              <p className="text-sm font-medium">
                <span className="text-secondary">50+</span> Proyek Selesai
              </p>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 text-sm font-medium text-primary uppercase tracking-wider">
              Tentang Saya
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <GradientText
                text="Kreator Digital & Developer"
                gradient="primary"
                animationType="wave"
                duration={0.03}
              />
            </h2>

            <div className="space-y-4 text-text-secondary mb-8">
              <p>
                Saya adalah seorang kreator digital dan developer yang berfokus pada menciptakan pengalaman web yang imersif dan memukau. Dengan latar belakang dalam desain dan pengembangan, saya menggabungkan keduanya untuk membuat karya yang tidak hanya indah secara visual tetapi juga fungsional.
              </p>
              <p>
                Pendekatan saya dalam berkarya adalah menggabungkan elemen surreal dengan teknologi modern untuk menciptakan pengalaman digital yang unik dan tak terlupakan. Saya percaya bahwa web adalah kanvas tak terbatas untuk kreativitas dan inovasi.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Keahlian</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center rounded-full bg-foreground/5 border border-border-light px-3 py-1 text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              leftIcon={<FaDownload />}
              glowEffect="primary"
            >
              Unduh CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 