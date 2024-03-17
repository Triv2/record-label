"use client";
import VideoPlayer from "@/components/video-player";
import { getSanityFileUrl } from "@/sanity/lib/fileUrl";
import { Image as SanityImage } from "sanity";

interface HeroVideoProps {
  videoUrl: string;
  video: any;
  image: SanityImage;

  file?:boolean;
}

const HeroVideo = ({ videoUrl, video, image,file }: HeroVideoProps) => {
  let fileUrl;
 
  if (video) {
    fileUrl = getSanityFileUrl(video) || null;
  }


  let newUrl = videoUrl;

  if(file === true){
    if (fileUrl) {
      newUrl = fileUrl.url;
    }
  } 

  return (
    <div>
      <VideoPlayer videoUrl={newUrl}  image={image} />
    </div>
  );
};
export default HeroVideo;
