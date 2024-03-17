"use client";

import OurWork from "../home/our-work/our-work";

import { motion } from "framer-motion";
import Film from "../film/film";
interface FilmSectionProps {
  filmData: any;
  ourWorkData: any;
}

const FilmSection = ({ filmData, ourWorkData }: FilmSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
      className="maincol flex flex-col py-10 gap-20"
    >
      <div className="uppercase tracking-tighter flex justify-between items-center text-muted-foreground">
        <span>VIDEOS AND FILMS BY SOULPUNX</span>
        <span className="hidden md:flex">VIDEOS AND FILMS BY SOULPUNX</span>
        <span className="hidden md:flex">VIDEOS AND FILMS BY SOULPUNX</span>
      </div>
      <Film data={filmData} />
      <OurWork data={ourWorkData} />
    </motion.div>
  );
};
export default FilmSection;
