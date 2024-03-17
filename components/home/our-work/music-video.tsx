"use client";
import VideoPlayer from "@/components/video-player";
import { getSanityFileUrl } from "@/sanity/lib/fileUrl";
import { Image as SanityImage } from "sanity";


interface MusicVideoProps {
  videoUrl: string;
  artist?: string;
  title?: string;
  count?: number;
  video: any;
  image: SanityImage;

  file?:boolean;
}

const MusicVideo = ({
  videoUrl,
  artist,
  title,
  count,
  image,
  video,

  file,
}: MusicVideoProps) => {
  const index = String(count).padStart(2, "0");

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
    <div className="flex flex-col h-full w-auto gap-2">
      <div className="uppercase flex gap-6 tracking-tighter text-xs sm:text-sm">
        <span>{index}</span>
        <span className="truncate">
          {artist} - {title}{" "}
        </span>
      </div>
      <VideoPlayer videoUrl={newUrl} image={image}  />
    </div>
  );
};
export default MusicVideo;
