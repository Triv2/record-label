import MediaSection from "@/components/sections/media-section";
import { getHeader, getMusicVideos } from "@/sanity/lib/query";
import { HeaderType, MusicVideoType } from "@/types";

export const revalidate = 5;

const MediaPage = async () => {
  const MediaData: HeaderType[] = await getHeader("Media");
  const videosData: MusicVideoType[] = await getMusicVideos();

  return <MediaSection mediaData={MediaData} videosData={videosData} />;
};

export default MediaPage;