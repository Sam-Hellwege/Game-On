import axios from 'axios';
import fs from 'fs';
import path from 'path';
import type {
  YouTubeSearchResult,
  YouTubeChannelResult,
  PlaylistItem,
  VideoDetailsItem,
  VideoItem
} from '../types/YouTubeTypes';

const API_KEY = 'AIzaSyAwn7YpgRMBNK7TY2vs7HUy-ZJ-IPFbHwc'; // Replace with your real key if needed
const CHANNEL_HANDLE = 'GameOn-n7o';

async function getChannelId(): Promise<string> {
  const res = await axios.get<{ items: YouTubeSearchResult[] }>(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${CHANNEL_HANDLE}&key=${API_KEY}`
  );
  return res.data.items[0].snippet.channelId;
}

async function getUploadsPlaylistId(channelId: string): Promise<string> {
  const res = await axios.get<{ items: YouTubeChannelResult[] }>(
    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${API_KEY}`
  );
  return res.data.items[0].contentDetails.relatedPlaylists.uploads;
}

async function getVideoDetails(videoIds: string[]): Promise<Record<string, string>> {
  const ids = videoIds.join(',');
  const res = await axios.get<{ items: VideoDetailsItem[] }>(
    `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${ids}&key=${API_KEY}`
  );

  const durationMap: Record<string, string> = {};
  res.data.items.forEach(item => {
    durationMap[item.id] = item.contentDetails.duration;
  });
  return durationMap;
}

function iso8601DurationToReadable(duration: string): string {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return duration;

  const hours = parseInt(match[1] ?? '0', 10);
  const minutes = parseInt(match[2] ?? '0', 10);
  const seconds = parseInt(match[3] ?? '0', 10);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  } else {
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}

async function getPlaylistVideos(playlistId: string): Promise<VideoItem[]> {
  const res = await axios.get<{ items: PlaylistItem[] }>(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${playlistId}&key=${API_KEY}`
  );

  const videoIds = res.data.items.map(item => item.snippet.resourceId.videoId);
  const durations = await getVideoDetails(videoIds);

  return res.data.items.map((item): VideoItem => {
    const videoId = item.snippet.resourceId.videoId;
    return {
      title: item.snippet.title,
      id: videoId,
      url: `https://www.youtube.com/watch?v=${videoId}`,
      thumbnail: item.snippet.thumbnails.medium.url,
      channel: item.snippet.channelTitle,
      duration: iso8601DurationToReadable(durations[videoId] ?? 'PT0S'),
      publishedAt: item.snippet.publishedAt,
    };
  });
}

async function scrape(): Promise<void> {
  try {
    const channelId = await getChannelId();
    console.log('Channel ID:', channelId);

    const playlistId = await getUploadsPlaylistId(channelId);
    console.log('Uploads Playlist ID:', playlistId);

    const videos = await getPlaylistVideos(playlistId);
    console.log('Number of videos fetched:', videos.length);

    const outputPath = path.resolve('src/data/videos.json');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(videos, null, 2));
    console.log(`✅ Saved ${videos.length} videos to ${outputPath}`);
  } catch (err) {
    console.error('❌ Error inside scrape function:', err);
    throw err;
  }
}

scrape().catch(err => {
  console.error('❌ Failed to scrape videos:', err);
  process.exit(1);
});
