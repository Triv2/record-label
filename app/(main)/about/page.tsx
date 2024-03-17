import { client } from "@/sanity/lib/client";
import AboutSection from "@/components/sections/about-section";

export const revalidate = 5;

const AboutPage = async () => {
  const profileData = await client.fetch(`*[_type == "profile"]`);
  const headerData = await client.fetch(
    `*[_type == "header" && title == "About"]{musicVideo->{video, link, thumbnail},description}`
  );
  return <AboutSection profileData={profileData} headerData={headerData} />;
};

export default AboutPage;
