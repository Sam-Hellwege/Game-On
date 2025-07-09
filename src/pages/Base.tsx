// pages/Base.tsx
import React from 'react';
import ResponsiveBackground from '../components/ResponsiveBG';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface BasePageProps {
  title?: string;
  children: React.ReactNode;
}

const BasePage: React.FC<BasePageProps> = ({ title, children }) => {
  return (
    <ResponsiveBackground>
      <div className="flex flex-col min-h-screen">
        <Header title={title} />
        <main className="flex-grow p-6">{children}</main>
        <Footer />
      </div>
    </ResponsiveBackground>
  );
};



export default BasePage;