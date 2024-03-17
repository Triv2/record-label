import ReleaseDetails from "@/components/artists/release-details";
import ReleasesSection from "@/components/sections/releases-section";
import { client } from "@/sanity/lib/client";
import { motion } from "framer-motion";

export const revalidate = 5;

interface ReleasePageProps {
  params: {
    release: string;
  };
}

const ReleasePage = async ({ params: { release } }: ReleasePageProps) => {
  let newName = release.replace(/-/g, " ");
  const releasesData = await client.fetch(
    `*[_type == "release" && title == "${newName}"]{title,artist->{name}, mainImage,socials[]->}`
  );
  return (
    <div className="maincol flex flex-col py-10 gap-20">
      <ReleasesSection releasesData={releasesData} />
    </div>
  );
};
export default ReleasePage;
