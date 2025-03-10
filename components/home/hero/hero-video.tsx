"use client";
import VideoPlayer from "@/components/video-player";
import { getSanityFileUrl } from "@/sanity/lib/fileUrl";

interface HeroVideoProps {
  videoUrl: string;
  video: any;
}

const HeroVideo = ({ videoUrl, video }: HeroVideoProps) => {
  const fileUrl = getSanityFileUrl(video) || null;
  const newUrl = fileUrl.url;

  return (
    <div>
      <VideoPlayer videoUrl={newUrl} videoLink={videoUrl} />
    </div>
  );
};
export default HeroVideo;