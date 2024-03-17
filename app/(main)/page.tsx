import HomeSection from "@/components/sections/home-section";
import {
  getHeader,
  getMusicVideos,
  getNewReleases,
  getStreamingPlaylists,
} from "@/sanity/lib/query";
import {
  HeaderType,
  MusicVideoType,
  NewReleaseType,
  PlaylistType,
} from "@/types";

export const revalidate = 5;

const Home = async () => {
  const heroData: HeaderType[] = await getHeader("Home");
  const newReleasesData: NewReleaseType[] = await getNewReleases();
  const ourWorkData: MusicVideoType[] = await getMusicVideos();
  const playlistData: PlaylistType[] = await getStreamingPlaylists();

  return (
    <>
      <HomeSection
        heroData={heroData}
        newReleasesData={newReleasesData}
        ourWorkData={ourWorkData}
        playListData={playlistData}
      />
    </>
  );
};

export default Home;