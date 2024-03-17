import ImageContainer from "../image-container";

import Link from "next/link";
import {
  Apple,
  AudioLines,
  Building,
  Building2,
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

interface ArtistDetailsProps {
  data: any;
}

const ArtistDetails = ({ data }: ArtistDetailsProps) => {
  if (!data[0]) return null;

  const artist = data[0];
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
    <div className="flex flex-col lg:flex-row lg:items-center  justify-between border-b border-t border-black dark:border-white  gap-4 lg:gap-0 w-full">
      <div className="lg:border-r py-[2rem] lg:pr-[1.3rem] border-black dark:border-white relative w-full md:w-[60%] lg:w-[74%]">
        {artist?.image && (
          <ImageContainer
            image={artist?.image}
            width={800}
            height={800}
            imageClassName="transition-opacity border dark:border-white border-black object-cover"
            classesWrapper="h-full  bg-no-repeat bg-cover bg-fixed bg-center w-full"
          />
        )}
      </div>

      <div className="w-full h-full flex flex-col pb-[1rem]">
        <div className="flex flex-col w-full  lg:pl-[12%] gap-5">
          {artist?.name && (
            <h3
              className={cn(" text-3xl font-bold  uppercase ", font.className)}
            >
              {artist?.name}
            </h3>
          )}
          {artist?.bio && (
            <p
              className={cn(
                " text-sm lg:text-lg dark:text-neutral-100 w-full",
                font.className
              )}
            >
              {artist?.bio}
            </p>
          )}
          <div className="flex gap-4 items-start lg:items-center  uppercase w-full">
            {sp !== "" && (
              <Link href={sp}>
                <div className="flex gap-2 items-center">
                  <AudioLines />
                </div>
              </Link>
            )}
            {ap !== "" && (
              <Link href={yt}>
                <div className="flex gap-2 items-center">
                  <Apple />
                </div>
              </Link>
            )}
            {ti !== "" && (
              <Link href={yt}>
                <div className="flex gap-2 items-center">
                  <Waves />
                </div>
              </Link>
            )}
            {am !== "" && (
              <Link href={yt}>
                <div className="flex gap-2 items-center">
                  <Building />
                </div>
              </Link>
            )}

            {de !== "" && (
              <Link href={ig}>
                <div className="flex gap-2 items-center">
                  <Building2 />
                </div>
              </Link>
            )}

            {ig !== "" && (
              <Link href={sp}>
                <div className="flex gap-2 items-center">
                  <Instagram />
                </div>
              </Link>
            )}

            {tt !== "" && (
              <Link href={fb}>
                <div className="flex gap-2 items-center">
                  <Square />
                </div>
              </Link>
            )}
            {yt !== "" && (
              <Link href={fb}>
                <div className="flex gap-2 items-center">
                  <Youtube />
                </div>
              </Link>
            )}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default ArtistDetails;