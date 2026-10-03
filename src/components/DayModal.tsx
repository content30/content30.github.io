import React, { useEffect, useRef } from 'react';
import type { DayPost, Locale, Platform, PostStatus, ContentType } from '../types/calendar';
import { translations } from '../i18n/translations';
import { PLATFORMS, STATUS_LIST, CONTENT_TYPES } from '../utils/calendarStorage';
import { 
  X, 
  Trash2, 
  Copy, 
  Check, 
  Sparkles, 
  Clock, 
  Layers, 
  Tag, 
  FileText,
  Save
} from 'lucide-react';

interface DayModalProps {
  post: DayPost | null;
  locale: Locale;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (updatedPost: DayPost) => void;
  onClear: (day: number) => void;
  onDuplicateNext: (currentPost: DayPost) => void;
}

export const DayModal: React.FC<DayModalProps> = ({
  post,
  locale,
  isOpen,
  onClose,
  onUpdate,
  onClear,
  onDuplicateNext
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const t = translations[locale]?.modal || translations.en.modal;
  const statusT = translations[locale]?.status || translations.en.status;
  const contentT = translations[locale]?.contentType || translations.en.contentType;

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !post) return null;

  const handleChange = <K extends keyof DayPost>(field: K, value: DayPost[K]) => {
    onUpdate({
      ...post,
      [field]: value,
      updatedAt: Date.now()
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl bg-[#F7EAE0] dark:bg-[#12221A] text-[#1D4533] dark:text-[#F7EAE0] shadow-2xl border border-[#1D4533]/20 dark:border-[#2A4E3E] overflow-hidden animate-in zoom-in-95 duration-150"
      >
        {/* Modal Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-[#1D4533]/15 dark:border-[#2A4E3E] flex items-center justify-between bg-white/40 dark:bg-[#172C22]/50">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-xl font-black text-sm bg-[#1D4533] text-[#F7EAE0] dark:bg-[#F9D2BA] dark:text-[#1D4533] shadow-xs">
              {t.dayNumber} {String(post.day).padStart(2, '0')}
            </span>
            <h3 id="modal-title" className="font-extrabold text-lg sm:text-xl text-[#1D4533] dark:text-[#F7EAE0]">
              {t.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#2A5E46] dark:text-[#A7D7C5] font-medium bg-[#1D4533]/10 dark:bg-[#2A5E46]/30 px-2.5 py-1 rounded-full">
              <Save className="w-3 h-3 animate-pulse" />
              {t.autoSaveNotice}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl text-[#5E3122] dark:text-[#F7EAE0] hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5">
          
          {/* Post Title */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#5E3122] dark:text-[#F9D2BA] mb-1.5">
              {t.postTitleLabel}
            </label>
            <input
              type="text"
              value={post.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder={t.postTitlePlaceholder}
              autoFocus
              className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#1A3327] border border-[#1D4533]/20 dark:border-[#2A4E3E] text-[#1D4533] dark:text-[#F7EAE0] placeholder-[#5E3122]/40 dark:placeholder-[#F7EAE0]/30 font-medium focus:outline-none focus:ring-2 focus:ring-[#1D4533] dark:focus:ring-[#F9D2BA] transition-all"
            />
          </div>

          {/* Three-Column Meta: Platform, Format, Status */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* Platform Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5E3122] dark:text-[#F9D2BA] mb-1.5">
                {t.platformLabel}
              </label>
              <select
                value={post.platform}
                onChange={(e) => handleChange('platform', e.target.value as Platform)}
                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#1A3327] border border-[#1D4533]/20 dark:border-[#2A4E3E] text-[#1D4533] dark:text-[#F7EAE0] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1D4533] dark:focus:ring-[#F9D2BA]"
              >
                {PLATFORMS.map((plat) => (
                  <option key={plat.id} value={plat.id}>
                    {plat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Content Format */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5E3122] dark:text-[#F9D2BA] mb-1.5">
                {t.formatLabel}
              </label>
              <select
                value={post.contentType}
                onChange={(e) => handleChange('contentType', e.target.value as ContentType)}
                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#1A3327] border border-[#1D4533]/20 dark:border-[#2A4E3E] text-[#1D4533] dark:text-[#F7EAE0] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1D4533] dark:focus:ring-[#F9D2BA]"
              >
                {CONTENT_TYPES.map((type) => (
                  <option key={type.id} value={type.id}>
                    {contentT[type.labelKey] || type.id}
                  </option>
                ))}
              </select>
            </div>

            {/* Production Status */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5E3122] dark:text-[#F9D2BA] mb-1.5">
                {t.statusLabel}
              </label>
              <select
                value={post.status}
                onChange={(e) => handleChange('status', e.target.value as PostStatus)}
                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#1A3327] border border-[#1D4533]/20 dark:border-[#2A4E3E] text-[#1D4533] dark:text-[#F7EAE0] text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#1D4533] dark:focus:ring-[#F9D2BA]"
              >
                {STATUS_LIST.map((stat) => (
                  <option key={stat.id} value={stat.id}>
                    {statusT[stat.labelKey] || stat.id}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Posting Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5E3122] dark:text-[#F9D2BA] mb-1.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {t.timeLabel}
              </label>
              <input
                type="text"
                value={post.time || ''}
                onChange={(e) => handleChange('time', e.target.value)}
                placeholder="e.g. 10:00 AM"
                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#1A3327] border border-[#1D4533]/20 dark:border-[#2A4E3E] text-[#1D4533] dark:text-[#F7EAE0] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1D4533] dark:focus:ring-[#F9D2BA]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5E3122] dark:text-[#F9D2BA] mb-1.5 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" /> {t.hashtagsLabel}
              </label>
              <input
                type="text"
                value={post.hashtags || ''}
                onChange={(e) => handleChange('hashtags', e.target.value)}
                placeholder={t.hashtagsPlaceholder}
                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#1A3327] border border-[#1D4533]/20 dark:border-[#2A4E3E] text-[#1D4533] dark:text-[#F7EAE0] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1D4533] dark:focus:ring-[#F9D2BA]"
              />
            </div>
          </div>

          {/* Hook & Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#5E3122] dark:text-[#F9D2BA] mb-1.5 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> {t.notesLabel}
            </label>
            <textarea
              rows={3}
              value={post.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              placeholder={t.notesPlaceholder}
              className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#1A3327] border border-[#1D4533]/20 dark:border-[#2A4E3E] text-[#1D4533] dark:text-[#F7EAE0] text-sm leading-relaxed placeholder-[#5E3122]/40 dark:placeholder-[#F7EAE0]/30 font-normal focus:outline-none focus:ring-2 focus:ring-[#1D4533] dark:focus:ring-[#F9D2BA]"
            />
          </div>

          {/* Full Caption */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#5E3122] dark:text-[#F9D2BA] mb-1.5 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" /> {t.captionLabel}
            </label>
            <textarea
              rows={4}
              value={post.caption || ''}
              onChange={(e) => handleChange('caption', e.target.value)}
              placeholder={t.captionPlaceholder}
              className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#1A3327] border border-[#1D4533]/20 dark:border-[#2A4E3E] text-[#1D4533] dark:text-[#F7EAE0] text-sm leading-relaxed placeholder-[#5E3122]/40 dark:placeholder-[#F7EAE0]/30 font-normal focus:outline-none focus:ring-2 focus:ring-[#1D4533] dark:focus:ring-[#F9D2BA]"
            />
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="px-5 sm:px-6 py-4 border-t border-[#1D4533]/15 dark:border-[#2A4E3E] bg-white/40 dark:bg-[#172C22]/50 flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onClear(post.day)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-700 dark:text-rose-400 hover:bg-rose-500/10 transition-colors"
              title="Clear all fields for this day"
            >
              <Trash2 className="w-3.5 h-3.5" />
              {t.clearButton}
            </button>

            {post.day < 30 && (
              <button
                type="button"
                onClick={() => onDuplicateNext(post)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#5E3122] dark:text-[#F9D2BA] hover:bg-[#F9D2BA]/30 dark:hover:bg-[#1D3B2E] transition-colors"
                title="Copy current post parameters to next day"
              >
                <Copy className="w-3.5 h-3.5" />
                {t.duplicateNext}
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-bold bg-[#1D4533] text-[#F7EAE0] hover:bg-[#163628] dark:bg-[#F9D2BA] dark:text-[#1D4533] dark:hover:bg-[#F4BE9F] shadow-sm hover:shadow transition-all"
            >
              <Check className="w-4 h-4" />
              {t.doneButton}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
