import React from 'react';
import rawData from '../data/videos.json';
import type { VideoItem } from '../types/YouTubeTypes';
import '../assets/fonts/fonts.css';

const videos = rawData as VideoItem[];

const parseDuration = (duration: string) => {
  const parts = duration.split(':').map(Number);
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return parseInt(duration, 10) || 0;
};

const shorts = videos.filter((v) => parseDuration(v.duration ?? '0') <= 60);
const regularVideos = videos.filter((v) => parseDuration(v.duration ?? '0') > 60);

const formatDate = (isoDate?: string) => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const ShortsSection = ({ title, items }: { title: string; items: VideoItem[] }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-white mb-4 px-4 neon-title">{title}</h2>
    <div className="flex gap-4 overflow-x-auto px-4 scrollbar-hide">
      {items.map((video) => (
        <div
          key={video.id}
          className="min-w-[180px] flex-shrink-0 rounded-lg overflow-hidden bg-white/5 hover:bg-white/10 transition shadow-md"
        >
          <div className="aspect-[9/16] w-full">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allowFullScreen
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-lg text-gray-400 neon-ice-blue-small">
            <span>• {video.channel}</span>
            <span>• {video.duration}</span>
            <span>• {formatDate(video.publishedAt)}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Section = ({ title, items }: { title: string; items: VideoItem[] }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-white mb-4 px-4 neon-title">{title}</h2>
    <div className="grid gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((video) => (
        <div
          key={video.id}
          className="bg-white/5 hover:bg-white/10 transition rounded-lg shadow-md overflow-hidden flex flex-col"
        >
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allowFullScreen
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-4">
            <h3 className="text-2xl font-semibold text-white neon-ice-blue-small">{video.title}</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-lg text-gray-400 neon-ice-blue-small">
              <span>• {video.channel}</span>
              <span>• {video.duration}</span>
              <span>• {formatDate(video.publishedAt)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const VideoGallery: React.FC = () => (
  <div>
    {shorts.length > 0 && <ShortsSection title="Shorts ← →" items={shorts} />}
    {regularVideos.length > 0 && <Section title="Videos ↑↓" items={regularVideos} />}
  </div>
);

export default VideoGallery;
