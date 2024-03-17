import release from "@/sanity/schemas/home/release";
import { ArtistReleaseCard } from "./artist-release-card";

interface ArtistReleasesProps {
  data: any;
}

type releaseCard = typeof release;

const ArtistReleases = ({ data }: ArtistReleasesProps) => {
  if (!data[0]) return null;
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="uppercase text-lg tracking-wider pb-10">Releases</span>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full h-full">
        {data[0].releases &&
          data[0].releases.map((release: releaseCard, index: number) => (
            <ArtistReleaseCard
              key={index}
              title={release.title}
              name={data[0].name}
              // @ts-ignore
              image={release.mainImage}
              imageClassName="transition-opacity object-cover"
              className="w-full h-full group relative border"
              height={400}
              width={400}
            />
          ))}
      </div>
    </div>
  );
};
export default ArtistReleases;
