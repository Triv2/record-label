"use client";
import ReleaseDetails from "@/components/artists/release-details";
import { motion } from "framer-motion";

export const revalidate = 5;

interface ReleasesSectionProps {
  releasesData: any;
}

const ReleasesSection = ({ releasesData }: ReleasesSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
      className="maincol flex flex-col gap-20  w-full"
    >
      <div className="uppercase tracking-tighter flex justify-between items-center text-muted-foreground">
        <span>NEW RELEASES</span>
        <span className="hidden md:flex">NEW RELEASES</span>
        <span className="hidden md:flex">NEW RELEASES</span>
      </div>

      <ReleaseDetails data={releasesData} />
    </motion.div>
  );
};
export default ReleasesSection;
