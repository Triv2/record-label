import { client } from "@/sanity/lib/client";
import FilmSection from "@/components/sections/film-section";

export const revalidate = 5;

const FilmPage = async () => {
  const filmData = await client.fetch(
    `*[_type == "header" && title == "Film"]{musicVideo->{video, link, thumbnail, file},description}`
  );

  const ourWorkData = await client.fetch(`*[_type == "musicVideo"]{songTitle, artist[]->{name}, link, video, thumbnail, file}`);

  return <FilmSection filmData={filmData} ourWorkData={ourWorkData} />;
};

export default FilmPage;
