import React from 'react';
import"./video.css";

// Video Komponente
interface VideoProps {
  src: string;
  width: string;
  height: string;
}

const Video: React.FC<VideoProps> = ({ src, width, height }) => {
  const videoId = src.split('v=')[1];
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <iframe 
      width={width} 
      height={height} 
      src={videoSrc} 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    />
  );
};

// Übergeordnete Komponente
interface VideoGalleryProps {
  
    src: string;
    width: string;
    height: string;
  
}

const VideoGallery1: React.FC<VideoGalleryProps> = ( { src, width, height } ) => {
  return (
    
    
    <Video  src={src} width={width} height={height} />
     
   
  );
};

export default VideoGallery1;
