import ArtistsSection from "@/components/sections/artists-section";
import { getArtists } from "@/sanity/lib/query";
import { ArtistType } from "@/types";

export const revalidate = 5;

const ArtistsPage = async () => {
  const artistsData: ArtistType[] = await getArtists();
  return <ArtistsSection artistsData={artistsData} />;
};

export default ArtistsPage;