import NewReleasesSection from "@/components/sections/new-releases-section";
import { getRelease } from "@/sanity/lib/query";
import { ReleaseType } from "@/types";

export const revalidate = 5;

interface ReleasePageProps {
  params: {
    release: string;
  };
}

const ReleasePage = async ({ params: { release } }: ReleasePageProps) => {
  let newName = release.replace(/-/g, " ");
  const releasesData: ReleaseType[] = await getRelease(newName);

  return (
    <>
      <NewReleasesSection releasesData={releasesData} />
    </>
  );
};
export default ReleasePage;