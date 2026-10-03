import React, { useState, useEffect, useMemo, useRef } from 'react';
import type { DayPost, CalendarState, Locale, Platform, PostStatus } from '../types/calendar';
import { 
  loadCalendarFromStorage, 
  saveCalendarToStorage, 
  exportCalendarToCSV, 
  exportCalendarToJSON, 
  loadSampleCalendarStrategy,
  createEmptyCalendar,
  PLATFORMS,
  STATUS_LIST
} from '../utils/calendarStorage';
import { translations } from '../i18n/translations';
import { DayCard } from './DayCard';
import { DayModal } from './DayModal';
import { 
  Search, 
  Filter, 
  Download, 
  FileSpreadsheet, 
  Image as ImageIcon, 
  Printer, 
  Sparkles, 
  RotateCcw, 
  Upload, 
  FileJson, 
  LayoutGrid, 
  ListFilter, 
  Calendar as CalendarIcon,
  CheckCircle2,
  Clock,
  Check,
  AlertCircle
} from 'lucide-react';
import { toPng } from 'html-to-image';
import confetti from 'canvas-confetti';

interface ContentGridProps {
  locale: Locale;
}

export const ContentGrid: React.FC<ContentGridProps> = ({ locale }) => {
  const [calendar, setCalendar] = useState<CalendarState>(() => createEmptyCalendar());
  const [selectedPost, setSelectedPost] = useState<DayPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // View mode: 'grid' or 'timeline'. Mobile defaults to timeline view, desktop to grid
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');
  
  // Filter and Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  
  // Export status
  const [isExportingImage, setIsExportingImage] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const gridContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const t = translations[locale] || translations.en;

  // Initialize from LocalStorage and handle responsive view mode
  useEffect(() => {
    const data = loadCalendarFromStorage();
    setCalendar(data);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setViewMode('timeline');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show auto-dismissing toast
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Update a single day's post (Auto-saved on every keystroke)
  const handleUpdatePost = (updatedPost: DayPost) => {
    if (!calendar) return;
    const newPosts = calendar.posts.map((p) => (p.day === updatedPost.day ? updatedPost : p));
    const newCalendar: CalendarState = {
      ...calendar,
      posts: newPosts,
      lastSaved: Date.now()
    };
    setCalendar(newCalendar);
    setSelectedPost(updatedPost);
    saveCalendarToStorage(newCalendar);
  };

  // Clear single day
  const handleClearPost = (dayNumber: number) => {
    if (!calendar) return;
    const newPosts = calendar.posts.map((p) => {
      if (p.day === dayNumber) {
        return {
          id: `day-${dayNumber}`,
          day: dayNumber,
          title: '',
          platform: 'instagram' as Platform,
          contentType: 'reel',
          status: 'idea' as PostStatus,
          notes: '',
          caption: '',
          hashtags: '',
          time: '10:00 AM'
        };
      }
      return p;
    });
    const newCalendar: CalendarState = {
      ...calendar,
      posts: newPosts,
      lastSaved: Date.now()
    };
    setCalendar(newCalendar);
    setSelectedPost(newPosts.find((p) => p.day === dayNumber) || null);
    saveCalendarToStorage(newCalendar);
    showToast(`Day ${dayNumber} cleared`);
  };

  // Duplicate to next day
  const handleDuplicateNext = (currentPost: DayPost) => {
    if (!calendar || currentPost.day >= 30) return;
    const nextDay = currentPost.day + 1;
    const duplicatedPost: DayPost = {
      ...currentPost,
      id: `day-${nextDay}`,
      day: nextDay,
      title: currentPost.title ? `${currentPost.title} (Part 2)` : '',
      updatedAt: Date.now()
    };

    const newPosts = calendar.posts.map((p) => (p.day === nextDay ? duplicatedPost : p));
    const newCalendar: CalendarState = {
      ...calendar,
      posts: newPosts,
      lastSaved: Date.now()
    };
    setCalendar(newCalendar);
    saveCalendarToStorage(newCalendar);
    setSelectedPost(duplicatedPost);
    showToast(`Copied to Day ${nextDay}`);
  };

  // Load sample strategy
  const handleLoadSample = () => {
    const sample = loadSampleCalendarStrategy(locale);
    setCalendar(sample);
    saveCalendarToStorage(sample);
    showToast('Loaded 30-day creator strategy!');
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  // Reset entire calendar
  const handleResetCalendar = () => {
    if (window.confirm(t.toolbar.resetConfirm)) {
      const empty = createEmptyCalendar();
      setCalendar(empty);
      saveCalendarToStorage(empty);
      showToast('Calendar cleared');
    }
  };

  // Restore from JSON backup file
  const handleJSONFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed && Array.isArray(parsed.posts) && parsed.posts.length === 30) {
          setCalendar(parsed);
          saveCalendarToStorage(parsed);
          showToast('JSON backup restored successfully!');
          confetti({
            particleCount: 70,
            spread: 70,
            origin: { y: 0.6 }
          });
        } else {
          alert('Invalid Content30 JSON backup format.');
        }
      } catch (err) {
        alert('Could not parse JSON file.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Export as PNG Image
  const handleExportImage = async () => {
    if (!gridContainerRef.current) return;
    try {
      setIsExportingImage(true);
      showToast('Generating high-resolution image...');
      
      // Temporarily ensure high contrast background during capture
      const isDark = document.documentElement.classList.contains('dark');
      const dataUrl = await toPng(gridContainerRef.current, {
        cacheBust: true,
        quality: 0.95,
        backgroundColor: isDark ? '#0E1B15' : '#F7EAE0',
        pixelRatio: 2
      });

      const link = document.createElement('a');
      link.download = `content30-calendar-${new Date().toISOString().split('T')[0]}.png`;
      link.href = dataUrl;
      link.click();
      
      showToast('Image downloaded successfully!');
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch (error) {
      console.error('Failed to export image:', error);
      alert('Could not render image export. You can still export as CSV or Print!');
    } finally {
      setIsExportingImage(false);
    }
  };

  // Stats calculation
  const stats = useMemo(() => {
    if (!calendar) return { planned: 0, ready: 0, scripting: 0, ideas: 0, published: 0, percent: 0 };
    let planned = 0;
    let ready = 0;
    let scripting = 0;
    let ideas = 0;
    let published = 0;

    calendar.posts.forEach((p) => {
      if (p.title || p.notes || p.caption) {
        planned++;
      }
      if (p.status === 'ready') ready++;
      else if (p.status === 'scripting') scripting++;
      else if (p.status === 'in_progress') scripting++;
      else if (p.status === 'published') published++;
      else ideas++;
    });

    const percent = Math.round((planned / 30) * 100);
    return { planned, ready, scripting, ideas, published, percent };
  }, [calendar]);

  // Filtered posts based on query, platform, and status
  const filteredPosts = useMemo(() => {
    if (!calendar) return [];
    return calendar.posts.filter((post) => {
      // Platform filter
      if (selectedPlatform !== 'all' && post.platform !== selectedPlatform) {
        return false;
      }
      // Status filter
      if (selectedStatus !== 'all' && post.status !== selectedStatus) {
        return false;
      }
      // Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = post.title.toLowerCase().includes(q);
        const matchesNotes = post.notes.toLowerCase().includes(q);
        const matchesCaption = (post.caption || '').toLowerCase().includes(q);
        const matchesTags = (post.hashtags || '').toLowerCase().includes(q);
        const matchesDay = `day ${post.day}`.includes(q) || `${post.day}` === q;
        return matchesTitle || matchesNotes || matchesCaption || matchesTags || matchesDay;
      }
      return true;
    });
  }, [calendar, searchQuery, selectedPlatform, selectedStatus]);

  return (
    <div className="w-full space-y-6">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1D4533] text-[#F7EAE0] dark:bg-[#F9D2BA] dark:text-[#1D4533] px-4 py-2.5 rounded-xl shadow-xl font-bold text-xs sm:text-sm flex items-center gap-2 animate-in slide-in-from-bottom-4 duration-150">
          <CheckCircle2 className="w-4 h-4" />
          {toastMessage}
        </div>
      )}

      {/* Hidden File Input for JSON Restore */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleJSONFileChange}
        accept=".json"
        className="hidden"
      />

      {/* Hero / Header Section */}
      <section className="text-center max-w-4xl mx-auto pt-4 sm:pt-8 pb-2 px-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#1D4533]/10 dark:bg-[#F9D2BA]/15 text-[#1D4533] dark:text-[#F9D2BA] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          {t.hero.badge}
        </div>
        
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1D4533] dark:text-[#F7EAE0] leading-tight sm:leading-none">
          {t.hero.heading}{' '}
          <span className="text-[#5E3122] dark:text-[#F9D2BA] block sm:inline">
            {t.hero.headingHighlight}
          </span>
        </h1>

        <p className="mt-4 text-sm sm:text-lg text-[#5E3122]/80 dark:text-[#F7EAE0]/80 max-w-2xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>
      </section>

      {/* Quick Stats Summary Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-4 sm:p-5 rounded-2xl bg-white/60 dark:bg-[#162C22] border border-[#1D4533]/15 dark:border-[#2A4E3E] shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Progress Bar & Planned Count */}
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#1D4533] dark:text-[#F7EAE0] mb-2">
                <span>{t.stats.progress} ({stats.percent}%)</span>
                <span>{stats.planned} / 30 {t.stats.planned}</span>
              </div>
              
              <div className="w-full h-3 rounded-full bg-[#1D4533]/10 dark:bg-[#2A4E3E] overflow-hidden">
                <div 
                  className="h-full rounded-full bg-linear-to-r from-[#1D4533] via-[#5E3122] to-[#F9D2BA] transition-all duration-500"
                  style={{ width: `${stats.percent}%` }}
                />
              </div>
            </div>

            {/* Status Breakdown Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold">
              <span className="px-3 py-1.5 rounded-xl bg-[#1D4533] text-[#F7EAE0] dark:bg-[#F9D2BA] dark:text-[#1D4533] shadow-xs">
                {stats.ready} {t.stats.ready}
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-[#5E3122]/15 text-[#5E3122] dark:bg-[#F9D2BA]/20 dark:text-[#F9D2BA] border border-[#5E3122]/20">
                {stats.scripting} {t.stats.scripting}
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-[#F9D2BA]/60 text-[#5E3122] dark:bg-[#1F3A2E] dark:text-[#F9D2BA] border border-[#F9D2BA]">
                {stats.ideas} {t.stats.ideas}
              </span>
              {stats.published > 0 && (
                <span className="px-3 py-1.5 rounded-xl bg-[#5E3122] text-[#F7EAE0]">
                  {stats.published} {t.stats.published}
                </span>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Main Interactive Controls Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-[#162C22] border border-[#1D4533]/15 dark:border-[#2A4E3E] shadow-sm space-y-3">
          
          {/* Top Row: Search & Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1 min-w-[240px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5E3122]/60 dark:text-[#F9D2BA]/60" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.toolbar.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-[#1A3327] border border-[#1D4533]/15 dark:border-[#2A4E3E] text-xs sm:text-sm font-medium text-[#1D4533] dark:text-[#F7EAE0] placeholder-[#5E3122]/40 dark:placeholder-[#F7EAE0]/40 focus:outline-none focus:ring-2 focus:ring-[#1D4533] dark:focus:ring-[#F9D2BA]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#5E3122] dark:text-[#F9D2BA] hover:underline"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Dropdowns & View Switcher */}
            <div className="flex flex-wrap items-center gap-2">
              
              {/* Platform Filter */}
              <div className="flex items-center gap-1.5">
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-white dark:bg-[#1A3327] border border-[#1D4533]/15 dark:border-[#2A4E3E] text-xs sm:text-sm font-medium text-[#1D4533] dark:text-[#F7EAE0] focus:outline-none focus:ring-2 focus:ring-[#1D4533]"
                >
                  <option value="all">{t.toolbar.allPlatforms}</option>
                  {PLATFORMS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-1.5">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-white dark:bg-[#1A3327] border border-[#1D4533]/15 dark:border-[#2A4E3E] text-xs sm:text-sm font-medium text-[#1D4533] dark:text-[#F7EAE0] focus:outline-none focus:ring-2 focus:ring-[#1D4533]"
                >
                  <option value="all">{t.toolbar.allStatuses}</option>
                  {STATUS_LIST.map((s) => (
                    <option key={s.id} value={s.id}>
                      {t.status[s.labelKey]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Grid / Timeline View Toggle Button */}
              <div className="flex items-center bg-[#1D4533]/10 dark:bg-[#1A3327] p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    viewMode === 'grid'
                      ? 'bg-[#1D4533] text-[#F7EAE0] dark:bg-[#F9D2BA] dark:text-[#1D4533] shadow-xs'
                      : 'text-[#1D4533] dark:text-[#F7EAE0] hover:text-[#5E3122]'
                  }`}
                  title={t.toolbar.viewCalendar}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t.toolbar.viewCalendar}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('timeline')}
                  className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    viewMode === 'timeline'
                      ? 'bg-[#1D4533] text-[#F7EAE0] dark:bg-[#F9D2BA] dark:text-[#1D4533] shadow-xs'
                      : 'text-[#1D4533] dark:text-[#F7EAE0] hover:text-[#5E3122]'
                  }`}
                  title={t.toolbar.viewTimeline}
                >
                  <ListFilter className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t.toolbar.viewTimeline}</span>
                </button>
              </div>

            </div>

          </div>

          {/* Bottom Row: Action Buttons (CSV, Image, JSON, Sample, Reset, Print) */}
          <div className="pt-2 border-t border-[#1D4533]/10 dark:border-[#2A4E3E] flex flex-wrap items-center justify-between gap-2">
            
            {/* Left: Export Actions */}
            <div className="flex flex-wrap items-center gap-2">
              {/* CSV Export */}
              <button
                type="button"
                onClick={() => {
                  exportCalendarToCSV(calendar);
                  showToast('CSV downloaded!');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#1D4533] text-[#F7EAE0] hover:bg-[#163628] dark:bg-[#F9D2BA] dark:text-[#1D4533] dark:hover:bg-[#F4BE9F] shadow-xs transition-all"
                title="Download 30 days as a CSV spreadsheet"
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                {t.toolbar.exportCsv}
              </button>

              {/* Image PNG Export */}
              <button
                type="button"
                onClick={handleExportImage}
                disabled={isExportingImage}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#5E3122] text-[#F7EAE0] hover:bg-[#4C271B] dark:bg-[#2A5E46] dark:text-[#F7EAE0] shadow-xs transition-all disabled:opacity-50"
                title="Render and download full calendar as PNG image"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                {isExportingImage ? t.toolbar.exportingImage : t.toolbar.exportImage}
              </button>

              {/* Print Plan */}
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/70 dark:bg-[#1A3327] text-[#1D4533] dark:text-[#F7EAE0] border border-[#1D4533]/15 dark:border-[#2A4E3E] hover:bg-white transition-all"
                title="Print or Save as PDF via browser"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.toolbar.print}</span>
              </button>
            </div>

            {/* Right: Management Actions (Sample, Backup, Restore, Reset) */}
            <div className="flex flex-wrap items-center gap-2">
              
              {/* Load Sample Plan */}
              <button
                type="button"
                onClick={handleLoadSample}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#1D4533] dark:text-[#F9D2BA] bg-[#1D4533]/10 dark:bg-[#1D3B2E] hover:bg-[#1D4533]/20 transition-all"
                title="Populate with high-performing 30-day creator strategy"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.toolbar.loadSample}</span>
              </button>

              {/* Backup JSON */}
              <button
                type="button"
                onClick={() => {
                  exportCalendarToJSON(calendar);
                  showToast('JSON backup saved!');
                }}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium text-[#5E3122] dark:text-[#F7EAE0] hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                title="Backup full calendar data to JSON file"
              >
                <FileJson className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{t.toolbar.backupJson}</span>
              </button>

              {/* Restore JSON */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium text-[#5E3122] dark:text-[#F7EAE0] hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                title="Restore from JSON file"
              >
                <Upload className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{t.toolbar.restoreJson}</span>
              </button>

              {/* Clear / Reset */}
              <button
                type="button"
                onClick={handleResetCalendar}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium text-rose-700 dark:text-rose-400 hover:bg-rose-500/10 transition-all"
                title="Reset all days"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{t.toolbar.resetPlan}</span>
              </button>

            </div>

          </div>

        </div>
      </div>

      {/* Filter Warning if zero matches */}
      {filteredPosts.length === 0 && (
        <div className="max-w-md mx-auto text-center p-8 bg-white/50 dark:bg-[#162C22] rounded-2xl border border-[#1D4533]/15">
          <AlertCircle className="w-8 h-8 mx-auto text-[#5E3122] dark:text-[#F9D2BA] mb-2" />
          <h4 className="font-bold text-sm text-[#1D4533] dark:text-[#F7EAE0]">No posts match your filters</h4>
          <p className="text-xs text-[#5E3122]/70 dark:text-[#F7EAE0]/70 mt-1">
            Try resetting your search query or platform/status filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedPlatform('all');
              setSelectedStatus('all');
            }}
            className="mt-3 px-3 py-1.5 text-xs font-bold bg-[#1D4533] text-[#F7EAE0] dark:bg-[#F9D2BA] dark:text-[#1D4533] rounded-xl"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* 30-Day Grid / Timeline Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div 
          ref={gridContainerRef}
          className="print-container p-2 sm:p-4 rounded-3xl transition-all"
        >
          {viewMode === 'grid' ? (
            /* Responsive Adaptive Calendar Grid: never squishes cards below ~240px */
            <div className="calendar-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 w-full">
              {filteredPosts.map((post) => (
                <DayCard
                  key={post.id}
                  post={post}
                  locale={locale}
                  onClick={() => {
                    setSelectedPost(post);
                    setIsModalOpen(true);
                  }}
                  isTimelineView={false}
                />
              ))}
            </div>
          ) : (
            /* Seamless Vertical Timeline / Stacked List (Mobile & Tablet optimized) */
            <div className="space-y-3 max-w-4xl mx-auto">
              {filteredPosts.map((post) => (
                <DayCard
                  key={post.id}
                  post={post}
                  locale={locale}
                  onClick={() => {
                    setSelectedPost(post);
                    setIsModalOpen(true);
                  }}
                  isTimelineView={true}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Features Value Proposition Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6 border-t border-[#1D4533]/10 dark:border-[#2A4E3E]/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-white/40 dark:bg-[#162C22]/50 border border-[#1D4533]/10 dark:border-[#2A4E3E]">
            <div className="w-10 h-10 rounded-xl bg-[#1D4533] dark:bg-[#F9D2BA] text-[#F7EAE0] dark:text-[#1D4533] flex items-center justify-center font-bold mb-3 shadow-xs">
              🔒
            </div>
            <h3 className="font-extrabold text-base text-[#1D4533] dark:text-[#F7EAE0] mb-1">
              {t.features.f1Title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5E3122]/80 dark:text-[#F7EAE0]/70 leading-relaxed">
              {t.features.f1Desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/40 dark:bg-[#162C22]/50 border border-[#1D4533]/10 dark:border-[#2A4E3E]">
            <div className="w-10 h-10 rounded-xl bg-[#5E3122] dark:bg-[#F9D2BA] text-[#F7EAE0] dark:text-[#1D4533] flex items-center justify-center font-bold mb-3 shadow-xs">
              ⚡
            </div>
            <h3 className="font-extrabold text-base text-[#1D4533] dark:text-[#F7EAE0] mb-1">
              {t.features.f2Title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5E3122]/80 dark:text-[#F7EAE0]/70 leading-relaxed">
              {t.features.f2Desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/40 dark:bg-[#162C22]/50 border border-[#1D4533]/10 dark:border-[#2A4E3E]">
            <div className="w-10 h-10 rounded-xl bg-[#2A5E46] dark:bg-[#F9D2BA] text-[#F7EAE0] dark:text-[#1D4533] flex items-center justify-center font-bold mb-3 shadow-xs">
              🎯
            </div>
            <h3 className="font-extrabold text-base text-[#1D4533] dark:text-[#F7EAE0] mb-1">
              {t.features.f3Title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5E3122]/80 dark:text-[#F7EAE0]/70 leading-relaxed">
              {t.features.f3Desc}
            </p>
          </div>

        </div>
      </section>

      {/* Click-to-Edit Modal */}
      <DayModal
        post={selectedPost}
        locale={locale}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={handleUpdatePost}
        onClear={handleClearPost}
        onDuplicateNext={handleDuplicateNext}
      />

    </div>
  );
};
