

import Media from "../media/media";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import MediaVideos from "../media/media-videos";
interface MediaSectionProps {
  mediaData: any;
  videosData: any;
}
const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "700"],
});

const MediaSection = ({ mediaData, videosData }: MediaSectionProps) => {
  return (
    <div
      className="flex flex-col px-2 md:px-4 xl:px-[6.4rem]"
    >
      <div
        className={cn(
          "uppercase tracking-custom flex justify-between items-center text-muted-foreground dark:text-neutral-200 gap-1 pb-[2rem] py-[1rem] lg:py-[5rem]",
          font.className
        )}
      >
        <span className="text-xxs lg:text-mlg">
          VIDEOS AND FILMS 
        </span>
        <span className="text-xxs lg:text-mlg text-emerald-500 dark:text-emerald-200 font-bold ">
          VIDEOS AND FILMS 
        </span>
        <span className="text-xxs lg:text-mlg ">
          VIDEOS AND FILMS 
        </span>
      </div>
      <Media data={mediaData} />
      <div
        className={cn(
          "uppercase tracking-custom flex justify-between items-center text-muted-foreground dark:text-neutral-200 border-b py-[1rem] pt-[2.5rem] lg:py-[5rem] border-black dark:border-white ",
          font.className
        )}
      >
        <span className="text-xxs lg:text-mlg ">Our Work</span>
        <span className="text-xxs lg:text-mlg  text-emerald-500 dark:text-emerald-200">
          Our Work
        </span>
        <span className="text-xxs lg:text-mlg">Our Work</span>
      </div>
      <div className="flex flex-col gap-8  pt-[2rem] w-full ">
        <MediaVideos data={videosData} />
      </div>
    </div>
  );
};
export default MediaSection;