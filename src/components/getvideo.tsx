import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoGallery from './video';
import { sortAndDeduplicateDiagnostics } from 'typescript';


export interface Keyword {
  '@id': string;
  '@type': string[];
  'skos:prefLabel': string;
  'sdo:termCode': string;
}

export interface CategoryCode {
  '@id': string;
  '@type': string;
  'sdo:codeValue': string;
}

export interface Video {
  '@id': string;
  '@type': string[];
  'sdo:description': string;
  'sdo:duration': number;
  'sdo:hasCategoryCode': CategoryCode;
  'sdo:identifier': string;
  'sdo:keywords': Keyword[];
  'sdo:publishedOn': {
    '@type': string;
    '@value': string;
  };
  'sdo:title': string;
  'sdo:url': string;
  '@context': object;
}



interface GetVideoProps {
  link: string;
}

function GetVideo({ link }: GetVideoProps) {
  const [video, setVideo] = useState<Video | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const response = await axios.get(link);
        console.log("HTTP status code:", response.status); 
        setVideo(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error); 
        setIsLoading(false);
      }
    }
    
    fetchVideo();
  }, [link]);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (!video) {
    return <p>No video found</p>;
  }

  return (
    <div>
        
        <VideoGallery 
        videoSources={[
          video['sdo:url'],
        ]}
      />
      
     
     
      
      
     
    </div>
  );
}

export default GetVideo;
