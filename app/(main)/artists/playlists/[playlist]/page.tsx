import PlaylistSection from "@/components/sections/playlist-section";
import { client } from "@/sanity/lib/client";

export const revalidate = 5;
interface PlaylistIdPageProps {
  params: {
    playlist: string;
  };
}

const PlaylistIdPage = async ({ params: { playlist } }: PlaylistIdPageProps) => {
  let newName = playlist?.replace(/-/g, " ");

  const playListData = await client.fetch(
    `*[_type == "playlist" && title == "${newName}" ]{image,title,socials[]->,artist->{name}}`
  );
  return <PlaylistSection playListData={playListData} />;
};
export default PlaylistIdPage;
