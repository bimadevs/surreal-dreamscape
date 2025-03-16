"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/ui/animated-text';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-sm font-medium text-primary uppercase tracking-wider"
            >
              404 Error
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <GradientText
                text="Halaman Tidak Ditemukan"
                gradient="primary"
                animationType="wave"
                duration={0.03}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 text-text-secondary text-lg max-w-2xl"
            >
              Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah dipindahkan, dihapus, atau tidak pernah ada.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/">
                <Button
                  variant="primary"
                  size="lg"
                  glowEffect="primary"
                  leftIcon={<FaHome />}
                >
                  Kembali ke Beranda
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 