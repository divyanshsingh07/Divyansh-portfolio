import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface HLSVideoProps {
  src: string;
  autoplay?: boolean;
  muted?: boolean;
  className?: string;
}

const HLSVideoPlayer = ({ src, autoplay = true, muted = true, className = "" }: HLSVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let hls: Hls;

    if (videoRef.current) {
      if (Hls.isSupported()) {
        hls = new Hls({
          startLevel: -1, // Auto quality
          capLevelToPlayerSize: true,
        });

        hls.loadSource(src);
        hls.attachMedia(videoRef.current);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (autoplay) {
            videoRef.current?.play().catch(e => console.log('Autoplay blocked:', e));
          }
        });
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        // Fallback for native HLS (Safari)
        videoRef.current.src = src;
        if (autoplay) {
          videoRef.current.addEventListener('loadedmetadata', () => {
            videoRef.current?.play().catch(e => console.log('Autoplay blocked:', e));
          });
        }
      }
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src, autoplay]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        muted={muted}
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HLSVideoPlayer;
