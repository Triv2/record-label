"use client";
import VideoPlayer from "@/components/video-player";
import { cn } from "@/lib/utils";
import { getSanityFileUrl } from "@/sanity/lib/fileUrl";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300","700"],
});
interface MusicVideoProps {
  videoUrl: string;
  artist?: string;
  title?: string;
  count?: number;
  video: any;
  image: {
    alt: string;
    asset?: any;
  };
}

const MusicVideo = ({
  videoUrl,
  artist,
  title,
  count,
  image,
  video,
}: MusicVideoProps) => {
  const index = String(count).padStart(2, "0");

  const fileUrl = getSanityFileUrl(video) || null;
  const newUrl = fileUrl.url;

  if (count !== 7) {
    return (
      <div className="flex flex-col h-full w-full justify-between sm:gap-2 col-span-1 row-span-1 ">
        <div className={cn("uppercase  flex basis-1/2 gap-3 lg:gap-6 tracking-tighter  text-sm  min-h-[70px] sm:min-h-0 h-[40%] overflow-clip",font.className)}>
          <span>{index}</span>
          <span>
            {artist} - {title}{" "}
          </span>
        </div>
        <div className="h-full w-full block bg-black">
          <VideoPlayer videoUrl={newUrl} videoLink={videoUrl} image={image} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col h-full w-full justify-between gap-2 col-span-2 row-span-2">
        <div className={cn("uppercase flex  gap-3 lg:gap-6 tracking-tighter text-sm  h-auto",font.className)}>
          <span>{index}</span>
          <span>
            {artist} - {title}{" "}
          </span>
        </div>
        <div className="flex items-center justify-center h-full w-full bg-black">
          <VideoPlayer videoUrl={newUrl} videoLink={videoUrl} image={image} className=" h-full w-full overflow-clip " />
        </div>
      </div>
    );
  }
};
export default MusicVideo;