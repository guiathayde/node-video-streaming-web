import { useRef, useEffect } from 'react';

interface VideoPlayerProps {
  videoId: string;
}

export function VideoPlayer({ videoId }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute('src');
      videoRef.current.load();
    }
  });
  return (
    <video
      ref={videoRef}
      width={window.innerWidth * 0.8}
      height={window.innerHeight * 0.9}
      controls
      autoPlay
    >
      <source
        src={`${import.meta.env.VITE_API_URL}/${videoId}`}
        type="video/mp4"
      ></source>
      Your browser does not support the video tag.
    </video>
  );
}
