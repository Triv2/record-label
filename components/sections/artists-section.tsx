import ArtistList from "@/components/artists/artist-list";
import { cn } from "@/lib/utils";

import { Poppins } from "next/font/google";

export const revalidate = 5;
const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "700"],
});
interface ArtistsSectionProps {
  artistsData: any;
}

const ArtistsSection = ({ artistsData }: ArtistsSectionProps) => {
  return (
    <div
      className="flex flex-col py-[2rem] lg:pt-[3.75rem] gap-5 lg:gap-20 px-2 md:px-4 xl:px-[6.4rem]"
    >
      <div
        className={cn(
          "uppercase tracking-custom flex justify-between items-center text-muted-foreground dark:text-neutral-200 pt-[1rem] lg:pt-[5rem] border-t border-black dark:border-white",
          font.className
        )}
      >
        <span className="text-xxs lg:text-mlg">Our Artists</span>
        <span className="text-xxs lg:text-mlg text-emerald-500 dark:text-emerald-200">
          Our Artists
        </span>
        <span className="text-xxs lg:text-mlg">Our Artists</span>
      </div>

      <ArtistList data={artistsData} />
    </div>
  );
};

export default ArtistsSection;