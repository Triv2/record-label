"use client";
import ArtistList from "@/components/artists/artist-list";
import { motion } from "framer-motion";

export const revalidate = 5;

interface ArtistsSectionProps {
  artistsData: any;
}

const ArtistsSection = ({ artistsData }: ArtistsSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
    >
      <div className="maincol flex flex-col gap-8 py-10 md:h-screen">
        <div className="uppercase tracking-tighter flex justify-between items-center text-muted-foreground">
          <span>Our Artists</span>
          <span>Our Artists</span>
          <span>Our Artists</span>
        </div>

        <ArtistList data={artistsData} />
      </div>
    </motion.div>
  );
};

export default ArtistsSection;
