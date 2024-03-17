"use client";

import About from "../about/about";
import ProfileCardList from "../about/profile-card-list";
import { motion } from "framer-motion";
interface AboutSectionProps {
  profileData: any;
  headerData: any;
}

const AboutSection = ({ profileData, headerData }: AboutSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
      className="maincol flex flex-col py-10 gap-20"
    >
      <div className="uppercase tracking-tighter flex justify-between items-center text-muted-foreground">
        <span>Who we are</span>
        <span>Who we are</span>
        <span>Who we are</span>
      </div>
      <About data={headerData} />

      <div className="uppercase tracking-tighter flex justify-between items-center text-muted-foreground">
        <span>Who we are</span>
        <span>Our Team</span>
        <span>Who we are</span>
      </div>
      <ProfileCardList data={profileData} />
    </motion.div>
  );
};
export default AboutSection;
