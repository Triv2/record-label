import AboutSection from "@/components/sections/about-section";
import { getHeader, getProfiles } from "@/sanity/lib/query";
import { ProfileType, HeaderType } from "@/types";

export const revalidate = 5;

const AboutPage = async () => {
  const profileData: ProfileType[] = await getProfiles();
  const headerData: HeaderType[] = await getHeader("About");

  return <AboutSection profileData={profileData} headerData={headerData} />;
};

export default AboutPage;