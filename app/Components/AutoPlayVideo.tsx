'use client';

import { useEffect, useState, useRef } from 'react';
import YouTube from 'react-youtube';

const YOUTUBE_VIDEO_ID = 'EtrlgIV1Zas';

export default function AutoPlayVideo() {
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) setShouldPlay(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const socialLinks = [
    { name: 'YouTube', url: 'https://youtube.com/@team_ramp' },
    { name: 'Facebook', url: 'https://www.facebook.com/ramp.parkour' },
    { name: 'Instagram', url: 'https://www.instagram.com/team_ramp/' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@team_ramp' },
  ];

  return (
    <div className="fixed inset-0 z-0 flex flex-col items-center justify-center gap-4 md:gap-8 py-6 md:py-12 px-4 md:px-6 overflow-auto">
      {/* Street vibe background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Concrete texture - subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
        {/* Diagonal urban lines */}
        <div className="absolute inset-0 opacity-[0.02] overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] -rotate-12" style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 80px, #fff 80px, #fff 81px)`,
          }} />
        </div>
        {/* Film grain */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {shouldPlay && (
        <>
          <p className="relative font-[var(--font-bebas)] text-xs md:text-base tracking-[0.2em] md:tracking-[0.4em] text-white/60 uppercase z-10 text-center max-w-full">
            Run. Jump. Own the street.
          </p>
          <div className="relative w-full max-w-4xl aspect-video shrink-0 z-10">
            <div className="w-full h-full bg-black border-4 border-white rounded-xl shadow-lg">
              <YouTube
                videoId={YOUTUBE_VIDEO_ID}
                className="w-full h-full rounded-xl"
                opts={{
                  width: '100%',
                  height: '100%',
                  playerVars: {
                    autoplay: 1,
                    mute: 1,
                    rel: 0,
                    controls: 0,
                    showinfo: 0,
                    modestbranding: 1,
                    loop: 1,
                    playlist: YOUTUBE_VIDEO_ID,
                  },
                }}
                onEnd={(e) => e.target.playVideo()}
              />
            </div>
          </div>
          <p className="relative text-white/40 text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.3em] uppercase z-10 text-center max-w-full">
            No walls. No limits.
          </p>
          <div className="relative flex flex-wrap gap-4 md:gap-6 justify-center items-center z-10">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white text-xs md:text-sm tracking-[0.2em] md:tracking-widest uppercase transition-colors border-b border-transparent hover:border-white/60 pb-1 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
