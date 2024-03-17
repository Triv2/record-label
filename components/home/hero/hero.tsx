import React from "react";

import HeroVideoPlayer from "./hero-video-player";

interface HeroProps {
  data: any;
}

const Hero = ({ data }: HeroProps) => {
  if (!data[0]) return null;
  return (
    <div className=" flex items-center justify-center h-full  w-full">
      <div className="h-full w-full">
        {data && (
          <HeroVideoPlayer
            video={data[0].musicVideo.video}
            videoUrl={data[0].musicVideo.link}
          />
        )}
      </div>
    </div>
  );
};

export default Hero;