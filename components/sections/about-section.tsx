
import { Poppins } from "next/font/google";
import About from "../about/about";
import ProfileCardList from "../about/profile-card-list";
import { cn } from "@/lib/utils";
interface AboutSectionProps {
  profileData: any;
  headerData: any;
}
const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "700"],
});
const AboutSection = ({ profileData, headerData }: AboutSectionProps) => {
  return (
    <div
      className="flex flex-col py-[2rem] lg:pt-[3.75rem] gap-5 lg:gap-20 px-2 md:px-4 xl:px-[6.4rem]"
    >
      <div
        className={cn(
          "uppercase tracking-custom flex justify-between items-center text-muted-foreground dark:text-neutral-200  pt-[1rem] lg:pt-[5rem] border-t border-black dark:border-white",
          font.className
        )}
      >
        <span className="text-xxs lg:text-mlg">Who we are</span>
        <span className=" text-xxs lg:text-mlg text-emerald-500 dark:text-emerald-200 font-bold">
          Who we are
        </span>
        <span className="text-xxs lg:text-mlg">Who we are</span>
      </div>
      <About data={headerData} />

      <div
        className={cn(
          "uppercase tracking-custom flex justify-between items-center text-muted-foreground dark:text-neutral-200 pt-[1rem] lg:pt-[5rem] border-t border-black dark:border-white",
          font.className
        )}
      >
        <span className="text-xxs lg:text-mlg">Who we are</span>
        <span className="text-xxs lg:text-mlg text-emerald-500 dark:text-emerald-200">
          Our Team
        </span>
        <span className="text-xxs lg:text-mlg">Who we are</span>
      </div>
      <ProfileCardList data={profileData} />
    </div>
  );
};
export default AboutSection;