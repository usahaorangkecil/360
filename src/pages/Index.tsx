
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DemoSection from '@/components/DemoSection';
import UseCases from '@/components/UseCases';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <DemoSection />
        <Features />
        <UseCases />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
