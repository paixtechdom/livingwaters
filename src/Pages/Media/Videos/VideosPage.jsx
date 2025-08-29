import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

/** Single video card with:
 *  - Lazy mount (IntersectionObserver)
 *  - Poster thumbnail (Cloudinary frame at 1s)
 *  - Pauses itself when not the active card
 *  - 90vh height on small screens; dark gray letterboxing via object-contain
 */
const LazyVideo = ({ src, poster, isActive, onPlay }) => {
  const containerRef = useRef(null); // observed wrapper
  const videoRef = useRef(null);     // actual <video>

  const [isVisible, setIsVisible] = useState(false);

  // Lazy-mount when card enters viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // If it scrolls out while playing, pause it
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // If this card isn't the active one, pause it
  useEffect(() => {
    if (!isActive && videoRef.current) {
      // guard: only call pause on <video> elements
      if (typeof videoRef.current.pause === "function") {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  return (
    <div
      ref={containerRef}
      className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full mx-auto"
      /* 90vh on small screens; smaller on larger screens for a nice feed look */
      style={{ height: "90vh" }}
    >
      {isVisible ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full h-full object-contain bg-neutral-900"
          controls
          preload="metadata"
          playsInline
          onPlay={onPlay}
        />
      ) : (
        // skeleton while not visible/mounted
        <div className="w-full h-full bg-neutral-800 animate-pulse" />
      )}
    </div>
  );
};

const VideosPage = () => {
  const { language } = useSelector((state) => state.appslice);
  
  const cloudName = "dqlalired";
  const videoData = [
  "v1755301688/VID-20250803-WA0007_rogt0b.mp4",
  "v1755301688/VID-20250802-WA0006_mt4kym.mp4",
  "v1755301686/VID-20250728-WA0129_qcy6lt.mp4",
  "v1755301685/VID-20250728-WA0124_dqpwce.mp4",
  "v1755301681/VID-20250714-WA0013_kutord.mp4",
    "v1755297050/WhatsApp_Video_2025-07-05_at_17.54.43_b891d567_w6gh1z.mp4",
    "v1755297048/WhatsApp_Video_2025-07-05_at_18.14.22_41a93227_vsq0mx.mp4",
    "v1755297046/WhatsApp_Video_2025-07-04_at_22.49.03_e2fe6529_m28zks.mp4",
    "v1755297042/WhatsApp_Video_2025-07-04_at_16.05.18_70971e21_qyfbhx.mp4",
    "v1755297042/WhatsApp_Video_2025-07-05_at_17.16.06_cc5c8518_yubtmj.mp4",
    "v1755297042/WhatsApp_Video_2025-07-05_at_15.44.01_958a7e4c_xod1kn.mp4",
    "v1755297042/WhatsApp_Video_2025-07-04_at_16.31.19_138d7fd9_hklyf4.mp4",
  ];

  // Track which index is currently playing so we can pause others
  const [activeIndex, setActiveIndex] = useState(-1);

  // Build Cloudinary URLs
  const buildVideoUrl = (publicId) =>
    `https://res.cloudinary.com/${cloudName}/video/upload/f_auto,q_auto/${publicId}`;

  // Use a frame at 1s as the poster (thumbnail). We request an image format.
  const buildPosterUrl = (publicId) => {
    const jpgPublicId = publicId.replace(/\.mp4$/i, ".jpg");
    return `https://res.cloudinary.com/${cloudName}/video/upload/so_1,f_auto/${jpgPublicId}`;
  };

  return (
    <main className="bg-gray-950 min-h-screen text-white">
      {/* Hero */}
      <section className="w-full relative h-[50vh] bg-no-repeat bg-fixed bg-cover bg-messagesBg">
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
          <h1 className="font-extrabold text-4xl md:text-5xl text-blue-300 tracking-wide">
            {language === "eng" ? "Videos" : "Photos"}
          </h1>
        </div>
      </section>

      {/* Feed (single column like Reels/TikTok) */}
      <section className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-8">
        {videoData.map((publicId, i) => (
          <LazyVideo
            key={publicId}
            src={buildVideoUrl(publicId)}
            poster={buildPosterUrl(publicId)}
            isActive={activeIndex === i}
            onPlay={() => setActiveIndex(i)}
          />
        ))}
      </section>
    </main>
  );
};

export default VideosPage;
