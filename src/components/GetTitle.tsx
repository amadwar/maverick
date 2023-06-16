import React, { useEffect, useState } from "react";
import axios from "axios";




export interface Video {
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
   
   interface GetVideoProps {
     link: string;
     
   }


function Gettitle({ link }: GetVideoProps){

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


      return(

       <div>

        <p>{video['sdo:title']}</p>



       </div>



      );




}
export default Gettitle;