// pages/Home.tsx
import React from 'react';
import BasePage from './Base';
import FrostedGlassPane from '../components/FrostedPane';
import '../assets/fonts/fonts.css'
import HeroSection from '../components/HeroImage';

const HomePage: React.FC = () => {
  return (
    <BasePage title="">
      <FrostedGlassPane>
        <HeroSection
          title="Game On"
          subtitle="Hong Kong Cantonese Cover Band"
          backgroundImage="/image/Band_hero.jpg"
          heightClasses="min-h-[45vh] sm:min-h-[77vh] lg:h-[70vh]"
          contentMaxWidth="max-w-xl"
          contentPositionClasses="items-start justify-start pt-53 sm:pt-20 md:pt-32 px-6 text-left"
        />
      </FrostedGlassPane>
    </BasePage>
  );
};

export default HomePage;
