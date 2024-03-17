import ArtistsSection from "@/components/sections/artists-section";
import { client } from "@/sanity/lib/client";

export const revalidate = 5;

const ArtistsPage = async () => {
  const artistsData = await client.fetch(`*[_type == "artist"]`);
  return <ArtistsSection artistsData={artistsData} />;
};

export default ArtistsPage;
