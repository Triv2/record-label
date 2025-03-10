import { Poppins } from "next/font/google";
import HeroVideoPlayer from "../home/hero/hero-video-player";
import { cn } from "@/lib/utils";
const font = Poppins({
  subsets: ["latin"],
  weight: ["300"],
});

interface AboutProps {
  data: any;
}

const About = ({ data }: AboutProps) => {
  if (!data[0]) return null;
  const bio = data[0].description;

 
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 lg:gap-0 w-full">
      <div className="border border-black dark:border-white relative  w-full bg-black pb-[0.05rem]">
        {data && (
          <HeroVideoPlayer
            video={data[0].musicVideo.video}
            videoUrl={data[0].musicVideo.link}
          />
        )}
      </div>

      <div className="w-full h-full flex items-center justify-center p-1">
        <span className={cn("max-w-md text-md md:text-lg", font.className)}>
          {bio}
          </span>
      </div>
    </div>
  );
};
export default About;