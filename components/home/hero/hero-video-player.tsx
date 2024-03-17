"use client";
import React from "react";
import ReactPlayer from "react-player";
import { getSanityFileUrl } from "@/sanity/lib/fileUrl";

 

interface HeroVideoPlayerProps {
  videoUrl: string;
  video:any;

  file?:boolean;

}

const HeroVideoPlayer = ({ videoUrl,  video, file }: HeroVideoPlayerProps) => {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
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
    <div className=" relative pt-[56.25%]  ">
     
        <ReactPlayer
        playing={true}
        autoPlay={true}
        className=" absolute top-0 left-0 "
        width="100%"
        height="100%"
        url={newUrl}
        controls={false}
        light={false}
        pip={true}
        loop={true}
        muted={true}
      />
     
      <source src={newUrl} type="video/mp4" />
    </div>
  );
};

export default HeroVideoPlayer;
