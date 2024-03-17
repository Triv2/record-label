
import Hero from "../home/hero/hero";
import OurWork from "../home/our-work/our-work";
import Links from "../home/links";
import NewReleasesCarousel from "../home/new-releases/new-releases-carousel";
import PlayListCarousel from "../home/streaming-playlists/playlist-carousel";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
interface HomeSectionProps {
  heroData: any;
  newReleasesData: any;
  ourWorkData: any;
  playListData: any;
}
const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "700"],
});
const HomeSection = ({
  heroData,
  newReleasesData,
  ourWorkData,
  playListData,
}: HomeSectionProps) => {
  return (
    <div
      
      className="flex flex-col items-center justify-center  w-full"
    >
      <Hero data={heroData} />

      <NewReleasesCarousel data={newReleasesData} />
      <div
        className={cn(
          "uppercase tracking-custom flex justify-between items-center w-[87%] text-muted-foreground dark:text-neutral-200  py-[1rem] lg:py-[5rem] border-t border-black dark:border-white",
          font.className
        )}
      >
        <span className="text-xxs lg:text-mlg">Our Work</span>
        <span className="text-xxs lg:text-mlg text-emerald-500 dark:text-emerald-200">
          Our Work
        </span>
        <span className="text-xxs lg:text-mlg">Our Work</span>
      </div>
      <div className="flex flex-col gap-8  lg:w-[87%] ">
        <OurWork data={ourWorkData} />
      </div>
      <Links />
      <div
        className={cn(
          "uppercase tracking-custom flex justify-between items-center text-muted-foreground dark:text-neutral-200 w-[87%] py-[1rem] lg:py-[5rem] border-t border-black dark:border-white",
          font.className
        )}
      >
        <span className="text-xxs lg:text-mlg">STREAMING PLAYLISTS</span>
        <span className="text-xxs lg:text-mlg text-emerald-500 dark:text-emerald-200">
          STREAMING PLAYLISTS
        </span>
        <span className="text-xxs lg:text-mlg">STREAMING PLAYLISTS</span>
      </div>

      <PlayListCarousel data={playListData} />
    </div>
  );
};
export default HomeSection;