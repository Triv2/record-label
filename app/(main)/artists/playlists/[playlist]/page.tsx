import PlaylistSection from "@/components/sections/playlist-section";

import { getPlaylist } from "@/sanity/lib/query";
import { PlaylistType } from "@/types";

export const revalidate = 5;
interface PlaylistIdPageProps {
  params: {
    playlist: string;
  };
}

const PlaylistIdPage = async ({
  params: { playlist },
}: PlaylistIdPageProps) => {
  let newName = playlist?.replace(/-/g, " ");
  const playListData: PlaylistType[] = await getPlaylist(newName);

  return <PlaylistSection playListData={playListData} />;
};
export default PlaylistIdPage;