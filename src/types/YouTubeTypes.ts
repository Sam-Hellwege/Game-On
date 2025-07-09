// /types/YouTubeSearchResult.ts
export interface YouTubeSearchResult {
  snippet: {
    channelId: string;
  };
}

// /types/YouTubeChannelResult.ts
export interface YouTubeChannelResult {
  contentDetails: {
    relatedPlaylists: {
      uploads: string;
    };
  };
}

// /types/PlaylistItem.ts
export interface PlaylistItem {
  snippet: {
    title: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    resourceId: {
      videoId: string;
    };
  };
}

// /types/VideoDetailsItem.ts
export interface VideoDetailsItem {
  id: string;
  contentDetails: {
    duration: string; // ISO 8601 duration format (e.g., PT4M13S)
  };
}

// /types/VideoItem.ts
export interface VideoItem {
  title: string;
  id: string;
  url: string;
  thumbnail: string;
  channel: string;
  duration: string;
  publishedAt?: string;
}
