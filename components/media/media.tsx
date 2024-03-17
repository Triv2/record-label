import { Poppins } from "next/font/google";
import HeroVideoPlayer from "../home/hero/hero-video-player";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300"],
});

interface MediaProps {
  data: any;
}

const Media = ({ data }: MediaProps) => {
  if (!data[0]) return null;

  const bio = data[0].description;

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 lg:gap-0 w-full">
      <div className="border border-black dark:border-white relative w-full bg-black">
        {data && (
          <HeroVideoPlayer
            video={data[0].musicVideo.video}
            videoUrl={data[0].musicVideo.link}
          />
        )}
      </div>

      <div className="w-[76.5%] h-full flex flex-col md:items-center justify-center px-2">
        <div
          className={cn(
            "flex flex-col pl-4  items-start gap-3",
            font.className
          )}
        >
          <p className="max-w-md text-sm md:text-lg">{bio}</p>
          <p className="uppercase text-sm md:text-lg">Out NOW!</p>
        </div>
      </div>
    </div>
  );
};
export default Media;