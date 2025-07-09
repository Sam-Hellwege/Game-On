// pages/HonkingStuff.tsx
import React from 'react';
import BasePage from './Base';
import FrostedGlassPane from '../components/FrostedPane';
import '../assets/fonts/fonts.css'

const HonkingStuffPage: React.FC = () => {
  return (
    <BasePage title="Honking Stuff">
      <FrostedGlassPane>
        <div className='neon-ice-blue'>
          <h2>Hello world!</h2>
          <p>This content pane looks like frosted glass.</p>
        </div>
      </FrostedGlassPane>

    </BasePage>
  );
};

export default HonkingStuffPage;
