"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub size={20} />, href: 'https://github.com', label: 'GitHub' },
  { icon: <FaTwitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FaInstagram size={20} />, href: 'https://instagram.com', label: 'Instagram' },
];

const footerLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang' },
  { href: '/projects', label: 'Proyek' },
  { href: '/contact', label: 'Kontak' },
];

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[150px] h-[150px] rounded-full bg-secondary/5 blur-[80px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[100px] h-[100px] rounded-full bg-accent/5 blur-[60px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 border-b border-border-light pb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gradient-primary mb-4"
            >
              Surreal<span className="text-gradient-secondary">Dreamscape</span>
            </motion.div>
            <p className="text-text-secondary text-sm mb-6">
              Portofolio surreal yang menampilkan karya-karya kreatif dan imajinatif dalam dunia digital.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 rounded-full bg-foreground/5 border border-border-light flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      window.open(link.href, '_blank');
                    }
                  }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Saya</h3>
            <ul className="space-y-2 text-text-secondary">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <span className="text-primary">Email:</span>
                <a
                  href="mailto:hello@surrealdreamscape.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  hello@surrealdreamscape.com
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <span className="text-primary">Lokasi:</span>
                <span>Jakarta, Indonesia</span>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="text-center text-text-tertiary text-sm">
          <p>
            &copy; {new Date().getFullYear()} SurrealDreamscape. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 