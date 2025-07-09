// pages/Media.tsx
import React from 'react';
import BasePage from './Base';
import FrostedGlassPane from '../components/FrostedPane';
import '../assets/fonts/fonts.css'
import VideoGallery from '../components/MediaLoader';

const MediaPage: React.FC = () => {
  return (
    <BasePage title="Media">
      <FrostedGlassPane>
        <VideoGallery />
      </FrostedGlassPane>

    </BasePage>
  );
};

export default MediaPage;
