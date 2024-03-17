
import ArtistDetails from "@/components/artist/artist-details";
import ArtistVideos from "@/components/artist/artist-videos";
import ArtistReleases from "@/components/artist/artist-releases";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

interface ArtistSectionProps {
  artistDetailsData: any;
  artistVideosData: any;
  artistReleasesData: any;
}
const font = Poppins({
  subsets: ["latin"],
  weight: ["300","700"],
});

const ArtistSection = ({ artistDetailsData, artistReleasesData, artistVideosData }: ArtistSectionProps) => {
  return (
    <div
      
      className="flex flex-col py-[2rem] lg:pt-[3.75rem]  px-2 md:px-4 xl:px-[6.4rem]"
    >
      <div className={cn("uppercase tracking-custom flex justify-between items-center text-muted-foreground  border-t py-[1rem] lg:py-[5rem] border-black dark:border-white",font.className)}>
        <span className="text-xxs lg:text-mlg">OUR ARTISTS</span>
        <span className="text-xxs lg:text-mlg text-emerald-500 dark:text-emerald-200">OUR ARTISTS</span>
        <span className="text-xxs lg:text-mlg">OUR ARTISTS</span>
      </div>

      <ArtistDetails data={artistDetailsData}  />
      <ArtistVideos data={artistVideosData} />
      <ArtistReleases data={artistReleasesData} />
     
    </div>
  );
};
export default ArtistSection;