
import ReleaseDetails from "@/components/artists/release-details";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

export const revalidate = 5;

interface NewReleasesSectionProps {
  releasesData: any;
}
const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "700"],
});
const NewReleasesSection = ({ releasesData }: NewReleasesSectionProps) => {
  return (
    <div
   
      className="flex flex-col py-[2rem] lg:pt-[3.75rem]  px-2 md:px-4 xl:px-[6.4rem] w-full"
    >
      <div
        className={cn(
          "uppercase tracking-custom flex justify-between items-center text-muted-foreground  border-t py-[1rem] lg:py-[5rem] border-black dark:border-white",
          font.className
        )}
      >
        <span className="text-xxs lg:text-mlg">NEW RELEASES</span>
        <span className="text-xxs lg:text-mlg text-emerald-500 dark:text-emerald-200 ">
          NEW RELEASES
        </span>
        <span className="text-xxs lg:text-mlg">NEW RELEASES</span>
      </div>

      <ReleaseDetails data={releasesData} />
    </div>
  );
};
export default NewReleasesSection;