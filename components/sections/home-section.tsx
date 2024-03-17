"use client";
import { motion } from "framer-motion";
import Hero from "../home/hero/hero";
import NewReleases from "../home/new-releases/new-releases";
import OurWork from "../home/our-work/our-work";
import Links from "../home/links";
import Playlist from "../home/streaming-playlists/playlist";
interface HomeSectionProps {
  heroData: any;
  newReleasesData: any;
  ourWorkData: any;
  playListData: any;
}

const HomeSection = ({ heroData, newReleasesData, ourWorkData, playListData }: HomeSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
      className="maincol"
    >
      <div className="flex flex-col gap-20 pb-10">
        <Hero data={heroData} />
        <NewReleases data={newReleasesData} />
        <OurWork data={ourWorkData} />
        <Links />
        <Playlist data={playListData} />
      </div>
    </motion.div>
  );
};
export default HomeSection;
