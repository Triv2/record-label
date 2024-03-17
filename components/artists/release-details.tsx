import ImageContainer from "../image-container";

import Link from "next/link";
import { Apple, AudioLines, Building, Building2, Facebook, Instagram, Square, Waves, Youtube } from "lucide-react";
import social from "@/sanity/schemas/artists/social";
import Icon from "../icon";

interface ReleaseDetailsProps {
  data: any;
}
type aSocial = typeof social;

const ReleaseDetails = ({ data }: ReleaseDetailsProps) => {
  if (!data[0]) return null;
  const links = data[0].socials;

  let fb: string = "";
  let ig: string = "";
  let yt: string = "";
  let sp: string = "";
  let am: string = "";
  let ti: string = "";
  let ap: string = "";
  let de: string = "";
  let tt: string = "";

  {
    links &&
      links.map((item: aSocial) => {
        // @ts-ignore
        if (item.socialLink?.toLowerCase() === "apple") {
          // @ts-ignore
          ap = item.link;
        }
        // @ts-ignore
        if (item.socialLink?.toLowerCase() === "tidal") {
          // @ts-ignore
          ti = item.link;
        }
        // @ts-ignore
        if (item.socialLink?.toLowerCase() === "amazon") {
          // @ts-ignore
          am = item.link;
        }
        // @ts-ignore
        if (item.socialLink?.toLowerCase() === "deezer") {
          // @ts-ignore
          de = item.link;
        }
        // @ts-ignore
        if (item.socialLink?.toLowerCase() === "tiktok") {
          // @ts-ignore
          tt = item.link;
        }
        // @ts-ignore
        if (item.socialLink?.toLowerCase() === "facebook") {
          // @ts-ignore
          fb = item.link;
        }
        // @ts-ignore
        if (item.socialLink?.toLowerCase() === "youtube") {
          // @ts-ignore
          yt = item.link;
        }
        // @ts-ignore
        if (item.socialLink?.toLowerCase() === "spotify") {
          // @ts-ignore
          sp = item.link;
        }
        // @ts-ignore
        if (item.socialLink?.toLowerCase() == "instagram") {
          // @ts-ignore
          ig = item.link;
        }
      });
  }

  return (
    <div className="flex flex-col md:flex-row items-center py-3 justify-between  gap-4 lg:gap-0 w-full ">
      <div className="border border-black/[0.2] dark:border-white/[0.2] relative w-full  p-1 ">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        {data[0].mainImage && (
          <ImageContainer
            image={data[0].mainImage}
            width={400}
            height={400}
            imageClassName="transition-opacity w-full h-fit object-cover"
            classesWrapper="h-full w-full"
          />
        )}
      </div>

      <div className="w-full h-full flex items-center flex-col gap-5 justify-center">
        {data[0].artist.name && data[0].title && (
          <h3 className="max-w-md text-center md:text-left text-2xl font-bold ">
            {data[0].artist.name} - {data[0].title}
          </h3>
        )}

        <div>
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center maincol justify-between lg:gap-10 uppercase w-full px-10">
            {sp !== "" && (
              <Link href={sp}>
                <div className="flex gap-2 items-center">
                  <AudioLines />
                </div>
              </Link>
            )}
            {ap !== "" && (
              <Link href={ap}>
                <div className="flex gap-2 items-center">
                  <Apple />
                </div>
              </Link>
            )}
            {ti !== "" && (
              <Link href={ti}>
                <div className="flex gap-2 items-center">
                  <Waves />
                </div>
              </Link>
            )}
            {am !== "" && (
              <Link href={am}>
                <div className="flex gap-2 items-center">
                  <Building />
                </div>
              </Link>
            )}

            {de !== "" && (
              <Link href={de}>
                <div className="flex gap-2 items-center">
                  <Building2 />
                </div>
              </Link>
            )}

            {ig !== "" && (
              <Link href={ig}>
                <div className="flex gap-2 items-center">
                  <Instagram />
                </div>
              </Link>
            )}

            {tt !== "" && (
              <Link href={tt}>
                <div className="flex gap-2 items-center">
                  <Square />
                </div>
              </Link>
            )}
            {yt !== "" && (
              <Link href={yt}>
                <div className="flex gap-2 items-center">
                  <Youtube />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReleaseDetails;
