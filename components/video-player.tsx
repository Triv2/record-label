"use client";
import React from "react";
import ReactPlayer from "react-player/lazy";
import { urlForImage } from "@/sanity/lib/utils";
import ImageContainer from "./image-container";
import VideoImage from "./video-image";

interface VideoPlayerProps {
  videoUrl: string;
  image?: { asset?: any };

}

const VideoPlayer = ({
  videoUrl,
  image,

}: VideoPlayerProps) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const [light, setLight] = React.useState(true);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  const imageUrl =
    image && urlForImage(image)?.fit("crop").url();

  const handleHoverEnter = () => {
    setLight(false);
    setPlaying(true);
  };
  const handleHoverExit = () => {
    setLight(true);
    setPlaying(false);
  };

  return (
    <div
      id="video"
      onMouseEnter={() => handleHoverEnter()}
      onMouseLeave={() => handleHoverExit()}
      className=" relative pt-[56.25%] w-full h-full"
    >
      {imageUrl !== "" && imageUrl ? (
        <div>
          {light ? (
            <ReactPlayer
              className=" absolute top-0 left-0"
              playIcon={<div />}
              width="100%"
              height="100%"
              url={videoUrl}
              controls={false}
              playing={playing}
              muted={true}
              light={
                <VideoImage
               
                  image={image}
                  imageClassName="object-cover"
                  classesWrapper="h-full bg-no-repeat bg-cover bg-fixed bg-center w-full flex items-center justify-center"
                />
              }
              pip={true}
            />
          ) : (
            <ReactPlayer
              className=" absolute top-0 left-0"
              playIcon={<div />}
              width="100%"
              height="100%"
              url={videoUrl}
              controls={false}
              playing={playing}
              muted={true}
              light={light}
              pip={true}
            />
          )}
        </div>
      ) : (
        <ReactPlayer
          className=" absolute top-0 left-0"
          width="100%"
          height="100%"
          url={videoUrl}
          controls={false}
          playing={playing}
          playIcon={<div />}
          muted={true}
          light={light}
          pip={true}
        />
      )}
      <source src={videoUrl} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;
