
import StreamingPlaylist from "@/components/home/streaming-playlists/streaming-playlist";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

export const revalidate = 5;
interface PlaylistSectionProps {
  playListData: any;
}
const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "700"],
});

const PlaylistSection = ({ playListData }: PlaylistSectionProps) => {
  return (
    <div
    
      className="maincol flex flex-col py-20 gap-20 w-full px-1"
    >
      <div
        className={cn(
          "uppercase tracking-custom flex justify-between items-center text-muted-foreground  pt-[5rem] border-t border-black dark:border-white",
          font.className
        )}
      >
        <span className="text-xxs lg:text-mlg">OUR PLAYLISTS</span>
        <span className="text-xxs lg:text-mlg text-emerald-500 dark:text-emerald-200 font-bold ">
          OUR PLAYLISTS
        </span>
        <span className="text-xxs lg:text-mlg">OUR PLAYLISTS</span>
      </div>

      <StreamingPlaylist data={playListData} />
    </div>
  );
};
export default PlaylistSection;