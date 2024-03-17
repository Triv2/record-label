import React from "react";

import HeroVideoPlayer from "./hero-video-player";
import Icon from "@/components/icon";

interface HeroProps {
  data: any;
}

const Hero = ({ data }: HeroProps) => {
  if (!data[0]) return null;
  return (
    <div>
      <div className="border border-black/[0.2] dark:border-white/[0.2] relative  p-1">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        <div className="min-h-full ">
          {data && 
          <HeroVideoPlayer 
          video={data[0].musicVideo.video}
            videoUrl={data[0].musicVideo.link}
           
            file={data[0].musicVideo.file}
          />}
          </div>
      </div>
    </div>
  );
};

export default Hero;
