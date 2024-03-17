"use client";
import StreamingPlaylist from "@/components/home/streaming-playlists/streaming-playlist";
import { motion } from "framer-motion";

export const revalidate = 5;
interface PlaylistSectionProps {
  playListData: any;
}

const PlaylistSection = ({ playListData }: PlaylistSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
      className="maincol flex flex-col py-10 gap-20"
    >
      <StreamingPlaylist data={playListData} />
    </motion.div>
  );
};
export default PlaylistSection;
