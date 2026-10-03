import type { DayPost, CalendarState, Platform, PostStatus, ContentType, Locale } from '../types/calendar';

export const STORAGE_KEY = 'content30_calendar_data';

export const PLATFORMS: { id: Platform; label: string; iconName: string; color: string }[] = [
  { id: 'instagram', label: 'Instagram', iconName: 'Instagram', color: '#E1306C' },
  { id: 'tiktok', label: 'TikTok', iconName: 'Video', color: '#000000' },
  { id: 'youtube', label: 'YouTube', iconName: 'Youtube', color: '#FF0000' },
  { id: 'x', label: 'X (Twitter)', iconName: 'Twitter', color: '#000000' },
  { id: 'linkedin', label: 'LinkedIn', iconName: 'Linkedin', color: '#0A66C2' },
  { id: 'pinterest', label: 'Pinterest', iconName: 'Pin', color: '#BD081C' },
  { id: 'threads', label: 'Threads', iconName: 'AtSign', color: '#000000' },
  { id: 'facebook', label: 'Facebook', iconName: 'Facebook', color: '#1877F2' }
];

export const STATUS_LIST: { id: PostStatus; labelKey: keyof typeof import('../i18n/translations').translations.en.status; colorClass: string; bgClass: string; borderClass: string }[] = [
  { 
    id: 'idea', 
    labelKey: 'idea', 
    colorClass: 'text-[#8A624A] dark:text-[#E4B598]', 
    bgClass: 'bg-[#F9D2BA]/40 dark:bg-[#5E3122]/40',
    borderClass: 'border-[#8A624A]/30 dark:border-[#E4B598]/30'
  },
  { 
    id: 'scripting', 
    labelKey: 'scripting', 
    colorClass: 'text-[#5E3122] dark:text-[#F9D2BA]', 
    bgClass: 'bg-[#F9D2BA]/70 dark:bg-[#5E3122]/70',
    borderClass: 'border-[#5E3122]/30 dark:border-[#F9D2BA]/30'
  },
  { 
    id: 'in_progress', 
    labelKey: 'in_progress', 
    colorClass: 'text-[#2A5E46] dark:text-[#A7D7C5]', 
    bgClass: 'bg-[#2A5E46]/15 dark:bg-[#2A5E46]/40',
    borderClass: 'border-[#2A5E46]/30 dark:border-[#A7D7C5]/30'
  },
  { 
    id: 'ready', 
    labelKey: 'ready', 
    colorClass: 'text-[#1D4533] dark:text-[#F7EAE0]', 
    bgClass: 'bg-[#1D4533] text-[#F7EAE0] dark:bg-[#2A5E46] dark:text-[#F7EAE0]',
    borderClass: 'border-[#1D4533] dark:border-[#2A5E46]'
  },
  { 
    id: 'published', 
    labelKey: 'published', 
    colorClass: 'text-[#F7EAE0]', 
    bgClass: 'bg-[#5E3122] text-[#F7EAE0] dark:bg-[#1D4533]',
    borderClass: 'border-[#5E3122] dark:border-[#1D4533]'
  }
];

export const CONTENT_TYPES: { id: ContentType; labelKey: keyof typeof import('../i18n/translations').translations.en.contentType }[] = [
  { id: 'reel', labelKey: 'reel' },
  { id: 'carousel', labelKey: 'carousel' },
  { id: 'single_image', labelKey: 'single_image' },
  { id: 'long_video', labelKey: 'long_video' },
  { id: 'text_thread', labelKey: 'text_thread' },
  { id: 'story', labelKey: 'story' },
  { id: 'article', labelKey: 'article' }
];

export function createEmptyCalendar(): CalendarState {
  const posts: DayPost[] = Array.from({ length: 30 }, (_, index) => {
    const dayNumber = index + 1;
    return {
      id: `day-${dayNumber}`,
      day: dayNumber,
      title: '',
      platform: 'instagram',
      contentType: 'reel',
      status: 'idea',
      notes: '',
      caption: '',
      hashtags: '',
      time: '10:00 AM'
    };
  });

  return {
    version: 1,
    monthTitle: '30-Day Strategy',
    startDate: new Date().toISOString().split('T')[0],
    posts,
    lastSaved: Date.now()
  };
}

export function loadCalendarFromStorage(): CalendarState {
  if (typeof window === 'undefined') {
    return createEmptyCalendar();
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return createEmptyCalendar();
    }
    const parsed = JSON.parse(stored) as CalendarState;
    if (parsed && Array.isArray(parsed.posts)) {
      // Normalize posts to strictly guarantee 30 days (Day 1 to Day 30) in exact order
      const normalizedPosts: DayPost[] = Array.from({ length: 30 }, (_, index) => {
        const dayNumber = index + 1;
        const existing = parsed.posts.find((p) => p && p.day === dayNumber) || parsed.posts[index];
        return {
          id: `day-${dayNumber}`,
          day: dayNumber,
          title: existing?.title || '',
          platform: existing?.platform || 'instagram',
          secondaryPlatforms: existing?.secondaryPlatforms || [],
          contentType: existing?.contentType || 'reel',
          status: existing?.status || 'idea',
          notes: existing?.notes || '',
          caption: existing?.caption || '',
          hashtags: existing?.hashtags || '',
          time: existing?.time || '10:00 AM',
          updatedAt: existing?.updatedAt || Date.now()
        };
      });

      return {
        version: 1,
        monthTitle: parsed.monthTitle || '30-Day Strategy',
        startDate: parsed.startDate || new Date().toISOString().split('T')[0],
        posts: normalizedPosts,
        lastSaved: parsed.lastSaved || Date.now()
      };
    }
  } catch (e) {
    console.error('Failed to parse calendar from localStorage:', e);
  }

  return createEmptyCalendar();
}

export function saveCalendarToStorage(calendar: CalendarState): void {
  if (typeof window === 'undefined') return;
  try {
    const updated = {
      ...calendar,
      lastSaved: Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save calendar to localStorage:', e);
  }
}

export function exportCalendarToCSV(calendar: CalendarState): void {
  const headers = [
    'Day Number',
    'Post Title',
    'Platform',
    'Content Format',
    'Status',
    'Posting Time',
    'Hook & Production Notes',
    'Caption',
    'Hashtags'
  ];

  const escapeCSV = (value: string | undefined | null): string => {
    if (!value) return '""';
    const str = String(value).replace(/"/g, '""');
    return `"${str}"`;
  };

  const rows = calendar.posts.map((post) => [
    post.day,
    escapeCSV(post.title),
    escapeCSV(post.platform),
    escapeCSV(post.contentType),
    escapeCSV(post.status),
    escapeCSV(post.time || ''),
    escapeCSV(post.notes),
    escapeCSV(post.caption || ''),
    escapeCSV(post.hashtags || '')
  ]);

  const csvContent = [headers.join(','), ...rows.map((row) => row.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `content30-plan-${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function exportCalendarToJSON(calendar: CalendarState): void {
  const jsonStr = JSON.stringify(calendar, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `content30-backup-${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function loadSampleCalendarStrategy(locale: Locale = 'en'): CalendarState {
  const base = createEmptyCalendar();
  
  const sampleTopics = [
    { title: 'Behind the Scenes: How We Work', platform: 'instagram' as Platform, type: 'carousel' as ContentType, status: 'ready' as PostStatus, notes: 'Hook: You only see the final result, but here is what happens before.\nSlide 2: The messy desk\nSlide 3: Tool stack', time: '10:00 AM' },
    { title: 'The #1 Mistake Beginners Make', platform: 'tiktok' as Platform, type: 'reel' as ContentType, status: 'ready' as PostStatus, notes: 'Hook: If you are still doing X in 2026, stop right now.\nExplain why Y works 10x better.', time: '02:00 PM' },
    { title: 'Full Breakdown: Step-by-Step Tutorial', platform: 'youtube' as Platform, type: 'long_video' as ContentType, status: 'scripting' as PostStatus, notes: 'Deep dive into workflow optimization.\nChapters: 1. Intro 2. Setup 3. Execution 4. Results', time: '06:00 PM' },
    { title: '10 Tools I Can’t Live Without', platform: 'x' as Platform, type: 'text_thread' as ContentType, status: 'ready' as PostStatus, notes: 'Hook: I tested 50+ productivity apps. Here are the 10 that actually saved me 20h/week.', time: '09:00 AM' },
    { title: 'Case Study: 0 to 10k Followers in 90 Days', platform: 'linkedin' as Platform, type: 'article' as ContentType, status: 'in_progress' as PostStatus, notes: 'Focus on organic reach, consistent posting, and engaging in comments.', time: '11:30 AM' },
    { title: 'Inspirational Quote & Visual Graphic', platform: 'pinterest' as Platform, type: 'single_image' as ContentType, status: 'ready' as PostStatus, notes: 'Minimalist typography poster with brand cream & dark green colors.', time: '08:00 AM' },
    { title: 'Ask Me Anything / Q&A Session', platform: 'instagram' as Platform, type: 'story' as ContentType, status: 'idea' as PostStatus, notes: 'Put question sticker in morning story. Answer top 5 questions on video by evening.', time: '04:00 PM' },
    { title: '3 Underrated Hacks for Fast Growth', platform: 'tiktok' as Platform, type: 'reel' as ContentType, status: 'ready' as PostStatus, notes: 'Fast-paced edits, text on screen, sound trend.', time: '01:00 PM' },
    { title: 'My Content Creation Stack in 2026', platform: 'youtube' as Platform, type: 'reel' as ContentType, status: 'scripting' as PostStatus, notes: 'Camera, mic, lighting, editing software, and Content30 calendar planner.', time: '05:30 PM' },
    { title: 'Hot Take: Why Consistency Beats Talent', platform: 'threads' as Platform, type: 'text_thread' as ContentType, status: 'ready' as PostStatus, notes: 'Talent without discipline gets forgotten. Show up for 30 straight days.', time: '12:00 PM' },
    { title: 'Weekly Recap & Creator Insights', platform: 'linkedin' as Platform, type: 'carousel' as ContentType, status: 'idea' as PostStatus, notes: '5 big lessons learned this week while scaling our project.', time: '09:30 AM' },
    { title: 'How to Repurpose 1 Idea into 5 Posts', platform: 'instagram' as Platform, type: 'carousel' as ContentType, status: 'in_progress' as PostStatus, notes: 'Turn 1 YouTube script into a carousel, a TikTok reel, an X thread, and a newsletter.', time: '11:00 AM' },
    { title: 'Myth Busting: Do Hashtags Still Work?', platform: 'tiktok' as Platform, type: 'reel' as ContentType, status: 'scripting' as PostStatus, notes: 'Show actual analytics comparison between keyword-rich captions vs 30 hashtags.', time: '03:00 PM' },
    { title: 'Community Spotlight / Client Win', platform: 'facebook' as Platform, type: 'single_image' as ContentType, status: 'idea' as PostStatus, notes: 'Celebrate a student/user who reached their 30-day milestone.', time: '02:00 PM' },
    { title: 'Mid-Month Audit: What’s Working Best', platform: 'youtube' as Platform, type: 'long_video' as ContentType, status: 'idea' as PostStatus, notes: 'Analyze views, watch time, and conversion rate for Day 1-14.', time: '07:00 PM' }
  ];

  base.posts = base.posts.map((post, idx) => {
    const sample = sampleTopics[idx % sampleTopics.length];
    return {
      ...post,
      title: `${sample.title} (Part ${Math.floor(idx / sampleTopics.length) + 1})`,
      platform: sample.platform,
      contentType: sample.type,
      status: idx < 12 ? sample.status : (idx < 22 ? 'scripting' : 'idea'),
      notes: sample.notes,
      caption: `Day ${idx + 1} of our 30-day content challenge! ${sample.title}. What are your thoughts on this? Let me know below! 👇`,
      hashtags: '#contentcreator #socialmediastrategy #content30 #growthtips',
      time: sample.time,
      updatedAt: Date.now()
    };
  });

  return base;
}
