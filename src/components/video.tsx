import React from 'react';
import"./video.css";

// Video Komponente
interface VideoProps {
  src: string;
}

const Video: React.FC<VideoProps> = ({ src }) => {
  const videoId = src.split('v=')[1];
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <iframe 
      width="300" 
      height="200" 
      src={videoSrc} 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    />
  );
};

// Übergeordnete Komponente
interface VideoGalleryProps {
  videoSources: string[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videoSources }) => {
  return (
    <div className="video-gallery">
      {videoSources.map((src, index) => (
        <Video key={index} src={src} />
      ))}
    </div>
  );
};

export default VideoGallery;
