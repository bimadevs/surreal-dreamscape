"use client";

import React from 'react';
import MainLayout from '@/components/layout/main-layout';
import ContactSection from '@/components/sections/contact-section';
import { motion } from 'framer-motion';
import { GradientText } from '@/components/ui/animated-text';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
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
                Hubungi Saya
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <GradientText
                  text="Mari Berkolaborasi"
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
                Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <ContactSection />

        {/* Map Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-4 text-sm font-medium text-primary uppercase tracking-wider"
              >
                Lokasi
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                <GradientText
                  text="Temukan Saya"
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
                className="text-text-secondary text-center max-w-2xl mb-12"
              >
                Saya berbasis di Jakarta, Indonesia. Namun, saya bekerja dengan klien dari seluruh dunia.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-border-light"
            >
              <div className="absolute inset-0 bg-foreground/5 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <FaMapMarkerAlt className="text-primary text-xl" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Jakarta, Indonesia</h3>
                  <p className="text-text-secondary">
                    Peta interaktif akan dimuat di sini
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 overflow-hidden">
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
                FAQ
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                <GradientText
                  text="Pertanyaan Umum"
                  gradient="primary"
                  animationType="wave"
                  duration={0.03}
                />
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center max-w-2xl mb-12"
              >
                Berikut adalah beberapa pertanyaan yang sering ditanyakan. Jika Anda memiliki pertanyaan lain, jangan ragu untuk menghubungi saya.
              </motion.p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <FaqItem
                question="Bagaimana proses kerja Anda?"
                answer="Proses kerja saya dimulai dengan diskusi mendalam tentang kebutuhan dan visi Anda. Kemudian saya akan membuat rencana dan timeline, dilanjutkan dengan fase desain dan pengembangan. Sepanjang proses, saya akan berkomunikasi secara teratur untuk memastikan hasil akhir sesuai dengan harapan Anda."
                index={0}
              />
              <FaqItem
                question="Berapa lama waktu yang dibutuhkan untuk menyelesaikan sebuah proyek?"
                answer="Durasi proyek bervariasi tergantung pada kompleksitas dan ruang lingkup. Proyek sederhana bisa selesai dalam 2-4 minggu, sementara proyek yang lebih kompleks mungkin membutuhkan 2-3 bulan. Saya selalu berusaha memberikan estimasi waktu yang akurat di awal proyek."
                index={1}
              />
              <FaqItem
                question="Apakah Anda menerima proyek dari luar negeri?"
                answer="Ya, saya bekerja dengan klien dari seluruh dunia. Dengan teknologi komunikasi modern, jarak bukan lagi hambatan untuk berkolaborasi secara efektif."
                index={2}
              />
              <FaqItem
                question="Bagaimana cara pembayaran untuk proyek?"
                answer="Saya biasanya menggunakan sistem pembayaran bertahap: 30% di awal sebagai deposit, 30% di tengah proyek, dan 40% setelah proyek selesai. Metode pembayaran yang diterima termasuk transfer bank, PayPal, dan cryptocurrency."
                index={3}
              />
              <FaqItem
                question="Apakah Anda menyediakan layanan pemeliharaan setelah proyek selesai?"
                answer="Ya, saya menawarkan paket pemeliharaan untuk memastikan proyek Anda tetap berjalan dengan baik. Paket ini mencakup pembaruan, perbaikan bug, dan dukungan teknis."
                index={4}
              />
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-foreground/5 backdrop-blur-sm border border-border-light rounded-xl p-6 md:p-8"
    >
      <h3 className="text-xl font-semibold mb-4">{question}</h3>
      <p className="text-text-secondary">{answer}</p>
    </motion.div>
  );
}; 