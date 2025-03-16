"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AnimatedText } from '@/components/ui/animated-text';
import { FaPaperPlane, FaMapMarkerAlt, FaEnvelope, FaPhone, FaUser, FaCommentAlt, FaTag } from 'react-icons/fa';
import Notification from '@/components/ui/notification';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementasi pengiriman form akan ditambahkan di sini
    console.log('Form submitted:', formState);
    // Reset form setelah submit
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    // Tampilkan notifikasi sukses
    setShowNotification(true);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Notification */}
      <Notification
        type="success"
        message="Pesan Anda telah berhasil dikirim! Kami akan segera menghubungi Anda."
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[150px]" />
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
            Hubungi Saya
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <AnimatedText
              text="Mari Berkolaborasi"
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
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui formulir di bawah ini atau melalui informasi kontak yang tersedia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-foreground/5 backdrop-blur-sm border border-border-light rounded-xl p-6 md:p-8 overflow-hidden"
          >
            {/* Decorative elements for form */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-[60px] opacity-60" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-secondary/10 blur-[60px] opacity-60" />
            
            <h3 className="text-xl font-semibold mb-8 relative z-10">
              <span className="text-gradient-primary">Kirim Pesan</span>
            </h3>
            
            <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
              <div className="relative input-surreal">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 text-lg transition-all duration-300 ${focusedField === 'name' ? 'text-primary' : 'text-foreground/50'}`}>
                  <FaUser />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  className={`w-full pl-12 pr-4 py-4 bg-foreground/5 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                    focusedField === 'name' 
                      ? 'border-primary shadow-glow-sm shadow-primary/20' 
                      : 'border-border-light hover:border-primary/30'
                  }`}
                  placeholder="Nama Anda"
                  required
                />
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === 'name' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary"
                />
              </div>
              
              <div className="relative input-surreal">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 text-lg transition-all duration-300 ${focusedField === 'email' ? 'text-primary' : 'text-foreground/50'}`}>
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className={`w-full pl-12 pr-4 py-4 bg-foreground/5 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                    focusedField === 'email' 
                      ? 'border-primary shadow-glow-sm shadow-primary/20' 
                      : 'border-border-light hover:border-primary/30'
                  }`}
                  placeholder="email@example.com"
                  required
                />
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === 'email' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary"
                />
              </div>
              
              <div className="relative input-surreal">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 text-lg transition-all duration-300 ${focusedField === 'subject' ? 'text-primary' : 'text-foreground/50'}`}>
                  <FaTag />
                </div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  className={`w-full pl-12 pr-4 py-4 bg-foreground/5 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                    focusedField === 'subject' 
                      ? 'border-primary shadow-glow-sm shadow-primary/20' 
                      : 'border-border-light hover:border-primary/30'
                  }`}
                  placeholder="Subjek pesan"
                  required
                />
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === 'subject' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary"
                />
              </div>
              
              <div className="relative input-surreal">
                <div className={`absolute left-4 top-6 text-lg transition-all duration-300 ${focusedField === 'message' ? 'text-primary' : 'text-foreground/50'}`}>
                  <FaCommentAlt />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  rows={5}
                  className={`w-full pl-12 pr-4 py-4 bg-foreground/5 border-2 rounded-xl transition-all duration-300 focus:outline-none resize-none ${
                    focusedField === 'message' 
                      ? 'border-primary shadow-glow-sm shadow-primary/20' 
                      : 'border-border-light hover:border-primary/30'
                  }`}
                  placeholder="Tulis pesan Anda di sini..."
                  required
                />
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary"
                />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="relative overflow-hidden rounded-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full relative overflow-hidden group"
                  rightIcon={
                    <motion.div
                      animate={{ 
                        x: [0, 5, 0],
                        y: [0, -5, 0]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <FaPaperPlane />
                    </motion.div>
                  }
                  glowEffect="primary"
                >
                  <span className="relative z-10">Kirim Pesan</span>
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-8">
              <span className="text-gradient-secondary">Informasi Kontak</span>
            </h3>
            
            <div className="space-y-8">
              <ContactInfoItem
                icon={<FaMapMarkerAlt />}
                title="Lokasi"
                content="Jakarta, Indonesia"
                delay={0.1}
              />
              
              <ContactInfoItem
                icon={<FaEnvelope />}
                title="Email"
                content="hello@surrealdreamscape.com"
                isLink
                href="mailto:hello@surrealdreamscape.com"
                delay={0.2}
              />
              
              <ContactInfoItem
                icon={<FaPhone />}
                title="Telepon"
                content="+62 123 4567 890"
                isLink
                href="tel:+6212345678890"
                delay={0.3}
              />
            </div>
            
            <div className="mt-12 bg-foreground/5 backdrop-blur-sm border border-border-light rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-glow-sm hover:shadow-primary/10">
              <h3 className="text-xl font-semibold mb-6">Jam Kerja</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                    Senin - Jumat:
                  </span>
                  <span className="bg-foreground/10 px-3 py-1 rounded-full text-sm">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary flex items-center">
                    <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                    Sabtu:
                  </span>
                  <span className="bg-foreground/10 px-3 py-1 rounded-full text-sm">10:00 - 15:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary flex items-center">
                    <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
                    Minggu:
                  </span>
                  <span className="bg-foreground/10 px-3 py-1 rounded-full text-sm">Tutup</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  isLink?: boolean;
  href?: string;
  delay?: number;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  title,
  content,
  isLink = false,
  href = '#',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex items-start gap-4 group"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground/5 border border-border-light flex items-center justify-center text-primary transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-glow-sm group-hover:shadow-primary/20">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
      </div>
      <div>
        <h4 className="text-lg font-medium mb-1">{title}</h4>
        {isLink ? (
          <a
            href={href}
            className="text-text-secondary hover:text-primary transition-colors duration-300 relative group-hover:pl-2"
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-primary group-hover:w-1 transition-all duration-300"></span>
            {content}
          </a>
        ) : (
          <p className="text-text-secondary group-hover:text-foreground/80 transition-colors duration-300">{content}</p>
        )}
      </div>
    </motion.div>
  );
};

export default ContactSection; 