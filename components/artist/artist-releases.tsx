import { ArtistReleaseCard } from "../artists/artist-release-card";
import { ReleaseType } from "@/types";

interface ArtistReleasesProps {
  data: any;
}

const ArtistReleases = ({ data }: ArtistReleasesProps) => {
  if (!data[0]) return null;

  const releases: ReleaseType[] = data[0].releases || null;

  return (
    <div className="flex flex-col  w-full h-full border-t dark:border-white border-black pt-[2.5rem]">
      <span className="uppercase text-2xl tracking-wider pb-[4rem]">
        Releases
      </span>
      {releases && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full h-full min-h-[450px]">
          {releases &&
            releases.map((release, index: number) => (
              <ArtistReleaseCard
                key={index}
                title={release.title}
                name={data[0].name}
                image={release.mainImage}
                imageClassName="transition-opacity object-cover"
                className="w-full h-full flex items-center justify-center flex-col border dark:border-white border-black"
              />
            ))}
        </div>
      )}
    </div>
  );
};
export default ArtistReleases;