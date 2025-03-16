"use client";

import React from 'react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import SurrealBackground from '@/components/ui/surreal-background';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <SurrealBackground />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout; 