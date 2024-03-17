"use client";
import React from "react";
import ReactPlayer from "react-player/lazy";
import Link from "next/link";

import VideoImage from "./video-image";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  videoUrl: string;
  videoLink: string;
  image?: { asset?: any };
  className?: string;
}

const VideoPlayer = ({ videoUrl, videoLink, image, className }: VideoPlayerProps) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const [looping, setLooping] = React.useState(false);
  const [light, setLight] = React.useState(true);

  React.useEffect(() => {
    setIsMounted(true);
  }, [playing, looping, light]);

  if (!isMounted) {
    return null;
  }

  const handleHoverEnter = () => {
    setPlaying(true);
    setLooping(true);
    setLight(false);
  };
  const handleHoverExit = () => {
    setPlaying(false);
    setLooping(false);
    setLight(true);
  };

  const applyThumbnail = (light:boolean) => {
    if (light) {
      return (
        <VideoImage
          image={image}
          imageClassName="object-cover block"
          classesWrapper="h-full bg-no-repeat bg-cover bg-fixed bg-center w-full flex items-center justify-center"
        />
      );
    } else {
      return false;
    }
  };

  return (
    <div
      id="video"
      onMouseEnter={() => handleHoverEnter()}
      onMouseLeave={() => handleHoverExit()}
      className="  border border-black m-0  dark:border-white h-full w-full p-[0.05rem]"
    >
      <Link href={videoLink} rel="noopener noreferrer" target="_blank" className="aspect-video h-full w-full ">
        <ReactPlayer
          className={cn("aspect-video  h-full w-full", className)}
          playIcon={<div />}
          width="100%"
          height="100%"
          url={videoUrl}
          controls={false}
          looping={looping}
          playing={playing}
          muted={true}
          light={false}
          pip={true}
        />
      </Link>
      {/* <source src={videoUrl} type="video/mp4" /> */}
    </div>
  );
};

export default VideoPlayer;