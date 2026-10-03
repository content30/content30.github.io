import React from 'react';
import type { DayPost, Locale } from '../types/calendar';
import { translations } from '../i18n/translations';
import { 
  Clock, 
  Sparkles, 
  Edit3, 
  Layers, 
  CheckCircle2, 
  FileText,
  Video
} from 'lucide-react';
import {
  InstagramIcon,
  TikTokIcon,
  YoutubeIcon,
  XIcon,
  LinkedInIcon,
  PinterestIcon,
  ThreadsIcon,
  FacebookIcon
} from './SocialIcons';

interface DayCardProps {
  post: DayPost;
  locale: Locale;
  onClick: () => void;
  isTimelineView?: boolean;
}

export const DayCard: React.FC<DayCardProps> = ({
  post,
  locale,
  onClick,
  isTimelineView = false
}) => {
  const t = translations[locale] || translations.en;
  
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />;
      case 'tiktok': return <TikTokIcon className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100" />;
      case 'youtube': return <YoutubeIcon className="w-3.5 h-3.5 text-[#FF0000]" />;
      case 'x': return <XIcon className="w-3.5 h-3.5 text-zinc-800 dark:text-zinc-200" />;
      case 'linkedin': return <LinkedInIcon className="w-3.5 h-3.5 text-[#0A66C2]" />;
      case 'pinterest': return <PinterestIcon className="w-3.5 h-3.5 text-[#BD081C]" />;
      case 'threads': return <ThreadsIcon className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100" />;
      case 'facebook': return <FacebookIcon className="w-3.5 h-3.5 text-[#1877F2]" />;
      default: return <Video className="w-3.5 h-3.5 text-[#1D4533]" />;
    }
  };

  const getStatusBadge = (status: DayPost['status']) => {
    switch (status) {
      case 'ready':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-[#1D4533] text-[#F7EAE0] dark:bg-[#F9D2BA] dark:text-[#1D4533] shadow-xs">
            <CheckCircle2 className="w-3 h-3" />
            {t.status.ready}
          </span>
        );
      case 'scripting':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[#5E3122]/15 text-[#5E3122] dark:bg-[#F9D2BA]/20 dark:text-[#F9D2BA] border border-[#5E3122]/20 dark:border-[#F9D2BA]/30">
            <FileText className="w-3 h-3" />
            {t.status.scripting}
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[#1D4533]/15 text-[#1D4533] dark:bg-[#2A5E46]/40 dark:text-[#A7D7C5] border border-[#1D4533]/20 dark:border-[#2A5E46]">
            <Layers className="w-3 h-3" />
            {t.status.in_progress}
          </span>
        );
      case 'published':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-[#5E3122] text-[#F7EAE0] dark:bg-[#7E422F] dark:text-[#F7EAE0]">
            ✓ {t.status.published}
          </span>
        );
      case 'idea':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#F9D2BA]/60 text-[#5E3122] dark:bg-[#1F3A2E] dark:text-[#F9D2BA] border border-[#F9D2BA] dark:border-[#2A4E3E]">
            <Sparkles className="w-3 h-3 text-[#5E3122] dark:text-[#F9D2BA]" />
            {t.status.idea}
          </span>
        );
    }
  };

  const hasContent = Boolean(post.title || post.notes || post.caption);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className={`group relative text-left rounded-2xl transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4533] dark:focus-visible:ring-[#F9D2BA] ${
        isTimelineView
          ? 'p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/70 dark:bg-[#162C22] border border-[#1D4533]/10 dark:border-[#2A4E3E] hover:border-[#1D4533]/30 dark:hover:border-[#F9D2BA]/40 shadow-xs hover:shadow-md'
          : `p-3.5 sm:p-4 flex flex-col justify-between min-h-[175px] sm:min-h-[190px] border ${
              hasContent
                ? 'bg-[#F9D2BA]/30 hover:bg-[#F9D2BA]/50 dark:bg-[#172C22] dark:hover:bg-[#1F3A2E] border-[#1D4533]/15 dark:border-[#2A4E3E]'
                : 'bg-white/40 hover:bg-[#F9D2BA]/25 dark:bg-[#12221A] dark:hover:bg-[#172C22] border-dashed border-[#1D4533]/20 dark:border-[#2A4E3E]/60'
            } hover:shadow-md hover:-translate-y-0.5`
      }`}
    >
      {/* Top Header Row: Day Label on Left, Status Badge on Right */}
      <div className="flex items-center justify-between gap-1.5 mb-2 w-full">
        <span className="inline-flex items-center justify-center font-black text-xs px-2 py-0.5 rounded-lg bg-[#1D4533] text-[#F7EAE0] dark:bg-[#F9D2BA] dark:text-[#1D4533] shadow-xs shrink-0">
          {t.dayCard.dayPrefix} {String(post.day).padStart(2, '0')}
        </span>

        <div className="shrink-0 flex items-center">
          {getStatusBadge(post.status)}
        </div>
      </div>

      {/* Platform & Format Tag Row */}
      <div className="flex items-center gap-1.5 mb-2.5 flex-wrap">
        <span 
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/80 dark:bg-[#1F3A2E] text-[#1D4533] dark:text-[#F7EAE0] border border-[#1D4533]/10 dark:border-[#2A4E3E] capitalize max-w-full truncate"
          title={post.platform}
        >
          {getPlatformIcon(post.platform)}
          <span className="capitalize truncate">{post.platform}</span>
        </span>
        
        <span className="text-[11px] font-medium text-[#5E3122]/70 dark:text-[#F7EAE0]/60 capitalize truncate">
          • {t.contentType[post.contentType] || post.contentType}
        </span>
      </div>

      {/* Main Content Body */}
      <div className="flex-1 my-0.5 w-full">
        {post.title ? (
          <h4 className="font-bold text-sm text-[#1D4533] dark:text-[#F7EAE0] line-clamp-2 leading-snug group-hover:text-[#5E3122] dark:group-hover:text-[#F9D2BA] transition-colors">
            {post.title}
          </h4>
        ) : (
          <p className="text-xs italic text-[#5E3122]/60 dark:text-[#F7EAE0]/40 flex items-center gap-1">
            <Edit3 className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{t.dayCard.untitled}</span>
          </p>
        )}

        {post.notes ? (
          <p className="mt-1 text-xs text-[#5E3122]/80 dark:text-[#F7EAE0]/70 line-clamp-2 leading-relaxed">
            {post.notes}
          </p>
        ) : (
          <p className="mt-1 text-[11px] text-[#5E3122]/40 dark:text-[#F7EAE0]/30 line-clamp-1">
            {t.dayCard.noNotes}
          </p>
        )}
      </div>

      {/* Footer Meta Row */}
      <div className="pt-2 mt-2 border-t border-[#1D4533]/10 dark:border-[#2A4E3E] flex items-center justify-between text-[11px] text-[#5E3122]/70 dark:text-[#F7EAE0]/60 w-full">
        {post.time ? (
          <span className="flex items-center gap-1 font-medium text-[#5E3122] dark:text-[#F9D2BA]">
            <Clock className="w-3 h-3" />
            {post.time}
          </span>
        ) : (
          <span className="text-[10px] text-[#5E3122]/40 dark:text-[#F7EAE0]/30">
            {t.modal.timeLabel}
          </span>
        )}

        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-semibold text-[#1D4533] dark:text-[#F9D2BA]">
          {t.dayCard.clickToEdit} →
        </span>
      </div>
    </div>
  );
};
