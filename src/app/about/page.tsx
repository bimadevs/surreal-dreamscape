"use client";

import React from 'react';
import MainLayout from '@/components/layout/main-layout';
import AboutSection from '@/components/sections/about-section';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        <AboutSection />
        
        <section className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Pengalaman Kerja</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
                  <p className="text-purple-400">Dreamscape Technologies • 2020 - Sekarang</p>
                  <p className="mt-2">Memimpin pengembangan UI/UX untuk aplikasi web interaktif dengan fokus pada animasi dan pengalaman pengguna yang imersif.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold">Web Developer</h3>
                  <p className="text-blue-400">Creative Solutions Inc. • 2018 - 2020</p>
                  <p className="mt-2">Mengembangkan dan memelihara situs web responsif untuk berbagai klien menggunakan React dan Next.js.</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h3 className="text-xl font-semibold">Frontend Intern</h3>
                  <p className="text-pink-400">WebArt Studio • 2017 - 2018</p>
                  <p className="mt-2">Membantu dalam pengembangan komponen UI dan implementasi desain untuk proyek web.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Pendidikan & Keahlian</h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold">Sarjana Ilmu Komputer</h3>
                <p className="text-emerald-400">Universitas Digital • 2014 - 2018</p>
                <p className="mt-2">Fokus pada Pengembangan Web dan Desain Interaksi</p>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Keahlian Teknis</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-4 rounded-lg">
                  <h4 className="font-medium">Frontend</h4>
                  <p className="text-sm text-gray-300">React, Next.js, TypeScript, TailwindCSS</p>
                </div>
                <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 p-4 rounded-lg">
                  <h4 className="font-medium">UI/UX</h4>
                  <p className="text-sm text-gray-300">Figma, Framer Motion, CSS Animations</p>
                </div>
                <div className="bg-gradient-to-r from-pink-900/50 to-purple-900/50 p-4 rounded-lg">
                  <h4 className="font-medium">Backend</h4>
                  <p className="text-sm text-gray-300">Node.js, Express, MongoDB</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-900/50 to-blue-900/50 p-4 rounded-lg">
                  <h4 className="font-medium">Tools</h4>
                  <p className="text-sm text-gray-300">Git, VS Code, Vercel, Netlify</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </MainLayout>
  );
} 