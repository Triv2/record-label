import ImageContainer from "../image-container";

import Link from "next/link";
import {
  Apple,
  AudioLines,
  Building,
  Building2,
  Facebook,
  Instagram,
  Square,
  Waves,
  Youtube,
} from "lucide-react";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { SocialType } from "@/types";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300"],
});

interface ReleaseDetailsProps {
  data: any;
}


const ReleaseDetails = ({ data }: ReleaseDetailsProps) => {
  if (!data[0]) return null;

  const links: SocialType[] = data[0].socials || null;

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
      links.map((item) => {
        if (item.socialLink?.toLowerCase() === "apple") {
          ap = item.link;
        }

        if (item.socialLink?.toLowerCase() === "tidal") {
          ti = item.link;
        }

        if (item.socialLink?.toLowerCase() === "amazon") {
          am = item.link;
        }

        if (item.socialLink?.toLowerCase() === "deezer") {
          de = item.link;
        }

        if (item.socialLink?.toLowerCase() === "tiktok") {
          tt = item.link;
        }

        if (item.socialLink?.toLowerCase() === "facebook") {
          fb = item.link;
        }

        if (item.socialLink?.toLowerCase() === "youtube") {
          yt = item.link;
        }

        if (item.socialLink?.toLowerCase() === "spotify") {
          sp = item.link;
        }

        if (item.socialLink?.toLowerCase() == "instagram") {
          ig = item.link;
        }
      });
  }

  return (
    <div className="flex flex-col lg:flex-row items-center  justify-between border-b border-t border-black dark:border-white  gap-4 lg:gap-0 w-full">
    <div className="lg:border-r py-[2rem] lg:pr-[1.3rem] border-black dark:border-white relative w-full md:w-[60%] lg:w-[74%]">
        {data[0].mainImage && (
          <ImageContainer
          image={data[0].mainImage}
          width={800}
          height={800}
          imageClassName="transition-opacity border dark:border-white border-black object-cover"
          classesWrapper="h-full  bg-no-repeat bg-cover bg-fixed bg-center w-full"
        />
        )}
      </div>
      <div className={cn("w-full h-full flex  flex-col pb-[1rem]",font.className)} >
        <div className="flex flex-col w-full  lg:pl-[12%] gap-5">
        {data[0].artist.name && data[0].title && (
          <h3 className="max-w-md text-center uppercase md:text-left text-2xl  w-full">
            {data[0].artist.name} - {data[0].title}
          </h3>
        )}

        <div>
        <div className="flex gap-4 items-start lg:items-center  uppercase w-full">
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
    </div>
  );
};
export default ReleaseDetails;