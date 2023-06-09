import React, { useState, useEffect } from 'react';
import axios from 'axios';

export interface LearningResource {
    '@id': string;
    '@type': string;
    'sdo:cosineSimilarity': {
      '@type': string;
      '@value': string;
    };
    'sdo:identifier': string;
    'sdo:teaches': {
      '@id': string;
      'sdo:termCode': string;
    };
    'sdo:thumbnailUrl': {
      '@type': string;
      '@value': string;
    };
    'sdo:title': string;
    'sdo:Article': {
      '@type': string;
      '@value': string;
    };
    'sdo:url': {
      '@type': string;
      '@value': string;
    };
    '@context': {
      'rdf': string;
      'ent': string;
      'sdo': string;
    };
  }
  

interface GetLearningResourceProps {
  link: string;
}

function GetLearningResource({ link }: GetLearningResourceProps) {
  const [resource, setResource] = useState<LearningResource | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchResource() {
      try {
        const response = await axios.get(link);
        console.log("HTTP status code:", response.status); 
        setResource(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error); 
        setIsLoading(false);
      }
    }
    
    fetchResource();
  }, [link]);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (!resource) {
    return <p>No resource found</p>;
  }

  return (
    <div>
      
      <img className="img" src={resource['sdo:thumbnailUrl']['@value']} alt="thumbnailUrl" />
      <h6 style={{whiteSpace: "pre-line"}}>{resource['sdo:title']}</h6>
      
    </div>
  );
};

export default GetLearningResource;
