// src/components/ResponsiveBackground.tsx
import React, { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface ResponsiveBackgroundProps {
  children?: ReactNode;
}

const backgroundImages = [
  { width: 320, height: 568, src: '/image/bg_space/space_320x568.jpg' },
  { width: 375, height: 667, src: '/image/bg_space/space_375x667.jpg' },
  { width: 414, height: 896, src: '/image/bg_space/space_414x896.jpg' },
  { width: 480, height: 960, src: '/image/bg_space/space_480x960.jpg' },
  { width: 768, height: 1024, src: '/image/bg_space/space_768x1024.jpg' },
  { width: 1280, height: 800, src: '/image/bg_space/space_1280x800.jpg' },
  { width: 1366, height: 768, src: '/image/bg_space/space_1366x768.jpg' },
  { width: 1440, height: 900, src: '/image/bg_space/space_1440x900.jpg' },
  { width: 1536, height: 2048, src: '/image/bg_space/space_1536x2048.jpg' },
  { width: 1920, height: 1080, src: '/image/bg_space/space_1920x1080.jpg' },
  { width: 2560, height: 1080, src: '/image/bg_space/space_2560x1080.jpg' },
  { width: 2560, height: 1440, src: '/image/bg_space/space_2560x1440.jpg' },
  { width: 3840, height: 2160, src: '/image/bg_space/space_3840x2160.jpg' },
  { width: 6000, height: 3375, src: '/image/bg_space/space_6000x3375.jpg' },
];

const getBestMobileFirstImage = (width: number, height: number) => {
  for (const image of backgroundImages) {
    if (image.width >= width && image.height >= height) {
      return image;
    }
  }
  return backgroundImages[backgroundImages.length - 1];
};

const ResponsiveBackground: React.FC<ResponsiveBackgroundProps> = ({ children }) => {
  const [bgImage, setBgImage] = useState<string>();

  useEffect(() => {
    const updateBackground = () => {
      const { innerWidth: w, innerHeight: h } = window;
      const best = getBestMobileFirstImage(w, h);
      setBgImage(best.src);
    };

    updateBackground();
    window.addEventListener('resize', updateBackground);
    return () => window.removeEventListener('resize', updateBackground);
  }, []);

  useEffect(() => {
    if (!bgImage) return;

    const style = document.createElement('style');
    style.setAttribute('id', 'dynamic-bg-style');

    style.textContent = `
      body::before {
        content: '';
        position: fixed;
        inset: 0;
        background-image: url(${bgImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existing = document.getElementById('dynamic-bg-style');
      if (existing) document.head.removeChild(existing);
    };
  }, [bgImage]);

  return <>{children}</>;
};

export default ResponsiveBackground;
