import { client } from "@/sanity/lib/client";
import ArtistSection from "@/components/sections/artist-section";

interface ArtistPageProps {
  params: {
    artistName: string;
  };
}

const ArtistPage = async ({ params: { artistName } }: ArtistPageProps) => {
  let newName = artistName.replace(/-/g, " ");
  const artistDetailsData = await client.fetch(`*[_type == "artist" && name == "${newName}"]{image,name,bio, socials[]->}`);
  const artistVideosData = await client.fetch(`*[_type == "artist" && name == "${newName}"]{musicVideos[]->}`);
  const artistReleasesData = await client.fetch(`*[_type == "artist" && name == "${newName}"]{name,releases[]->}`);

  return (
    <ArtistSection
      artistDetailsData={artistDetailsData}
      artistReleasesData={artistReleasesData}
      artistVideosData={artistVideosData}
    />
  );
};
export default ArtistPage;
