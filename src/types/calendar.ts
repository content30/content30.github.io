export type Platform =
  | 'instagram'
  | 'tiktok'
  | 'youtube'
  | 'x'
  | 'linkedin'
  | 'pinterest'
  | 'threads'
  | 'facebook';

export type PostStatus =
  | 'idea'
  | 'scripting'
  | 'in_progress'
  | 'ready'
  | 'published';

export type ContentType =
  | 'reel'
  | 'carousel'
  | 'single_image'
  | 'long_video'
  | 'text_thread'
  | 'story'
  | 'article';

export interface DayPost {
  id: string;
  day: number; // 1 to 30
  date?: string; // Optional calendar date (e.g., "2026-10-01")
  title: string;
  platform: Platform;
  secondaryPlatforms?: Platform[];
  contentType: ContentType;
  status: PostStatus;
  notes: string; // Hook, outline, or script
  caption?: string; // Full caption text
  hashtags?: string; // Hashtags
  time?: string; // Target posting time e.g., "10:00 AM"
  completed?: boolean;
  updatedAt?: number;
}

export interface CalendarState {
  version: number;
  monthTitle: string;
  startDate: string;
  posts: DayPost[];
  lastSaved?: number;
}

export type Locale = 'en' | 'es' | 'fr' | 'pt' | 'ja';
