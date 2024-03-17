"use client";
import VideoPlayer from "@/components/video-player";
import { getSanityFileUrl } from "@/sanity/lib/fileUrl";

interface ArtistMusicVideoProps {
  videoUrl: string;
  video: any;
}

const ArtistMusicVideo = ({
  videoUrl,

  video,
}: ArtistMusicVideoProps) => {
  const fileUrl = getSanityFileUrl(video) || null;
  const newUrl = fileUrl.url;

  return <VideoPlayer videoUrl={newUrl} videoLink={videoUrl} />;
};
export default ArtistMusicVideo;