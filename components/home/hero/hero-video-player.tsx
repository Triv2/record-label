"use client";
import React from "react";
import ReactPlayer from "react-player";
import { getSanityFileUrl } from "@/sanity/lib/fileUrl";
import Link from "next/link";

interface HeroVideoPlayerProps {
  videoUrl: string;
  video: any;
}

const HeroVideoPlayer = ({ videoUrl, video }: HeroVideoPlayerProps) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const fileUrl = getSanityFileUrl(video) || null;
  const newUrl = fileUrl.url;

  return (
    <Link href={videoUrl} rel="noopener noreferrer" target="_blank">
      <ReactPlayer
        playsinline={true}
        playing={true}
        autoPlay={true}
        className=" h-full w-full object-cover"
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
    </Link>
  );
};

export default HeroVideoPlayer;