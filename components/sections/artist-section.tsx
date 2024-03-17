"use client";
import ArtistDetails from "@/components/artists/artist-details";
import ArtistVideos from "@/components/artists/artist-videos";
import ArtistReleases from "@/components/artists/artist-releases";
import { motion } from "framer-motion";

interface ArtistSectionProps {
  artistDetailsData: any;
  artistVideosData: any;
  artistReleasesData: any;
}

const ArtistSection = ({ artistDetailsData, artistReleasesData, artistVideosData }: ArtistSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
      className="maincol flex flex-col py-10 gap-20"
    >
      <div className="uppercase tracking-tighter flex justify-between items-center text-muted-foreground">
        <span>OUR ARTISTS</span>
        <span className="hidden md:flex">OUR ARTISTS</span>
        <span className="hidden md:flex">OUR ARTISTS</span>
      </div>

      <ArtistDetails data={artistDetailsData} />
      <ArtistVideos data={artistVideosData} />
      <ArtistReleases data={artistReleasesData} />
    </motion.div>
  );
};
export default ArtistSection;
