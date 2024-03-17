import HomeSection from "@/components/sections/home-section";
import { client } from "@/sanity/lib/client";

export const revalidate = 5;

const Home = async () => {
  const heroData = await client.fetch(`*[_type == "header" && title == "Home"]{musicVideo->{video, link, file}}`);
  const newReleasesData = await client.fetch(`*[_type == "release" && new == true]{title, artist->{name}, mainImage}`);
  const ourWorkData =
    (await client.fetch(`*[_type == "musicVideo"]{songTitle, artist[]->{name}, link, video, file, thumbnail}`)) || null;
  const playlistData = await client.fetch(`*[_type == "playlist"]{title, image}`);
  return (
    <>
      <HomeSection heroData={heroData} newReleasesData={newReleasesData} ourWorkData={ourWorkData} playListData={playlistData} />
    </>
  );
};

export default Home;
