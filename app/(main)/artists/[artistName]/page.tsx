import ArtistSection from "@/components/sections/artist-section";
import {
  ArtistDetailsType,
  ArtistReleasesType,
  ArtistVideosType,
} from "@/types";
import {
  getArtistDetails,
  getArtistReleases,
  getArtistVideos,
} from "@/sanity/lib/query";

export const revalidate = 5;
interface ArtistPageProps {
  params: {
    artistName: string;
  };
}

const ArtistPage = async ({ params: { artistName } }: ArtistPageProps) => {
  let newName = artistName.replace(/-/g, " ");

  const artistDetailsData: ArtistDetailsType[] = await getArtistDetails(
    newName
  );
  const artistVideosData: ArtistVideosType[] = await getArtistVideos(newName);
  const artistReleasesData: ArtistReleasesType[] = await getArtistReleases(
    newName
  );

  return (
    <ArtistSection
      artistDetailsData={artistDetailsData}
      artistReleasesData={artistReleasesData}
      artistVideosData={artistVideosData}
    />
  );
};
export default ArtistPage;