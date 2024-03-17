import ImageContainer from "../image-container";
import artistSocial from "@/sanity/schemas/artists/social";
import Link from "next/link";
import { Apple, AudioLines, Building, Building2, Instagram, Square, Waves, Youtube } from "lucide-react";
import Icon from "../icon";

interface ArtistDetailsProps {
  data: any;
}
type aSocial = typeof artistSocial;

const ArtistDetails = ({ data }: ArtistDetailsProps) => {
  if (!data[0]) return null;

  const artist = data[0];
  const links = data[0].socials || null;

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
    <div className="flex flex-col md:flex-row items-center py-3 justify-between  gap-4 lg:gap-0 w-full">
      <div className="border border-black/[0.2] dark:border-white/[0.2] relative w-full p-1 ">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        {artist?.image && (
          <ImageContainer
            image={artist?.image}
            width={800}
            height={800}
            imageClassName="transition-opacity  object-cover"
            classesWrapper="h-full  bg-no-repeat bg-cover bg-fixed bg-center w-full"
          />
        )}
      </div>

      <div className="w-full h-full flex items-center flex-col gap-5 justify-center">
        {artist?.name && <h3 className="max-w-md text-center md:text-left text-2xl font-bold ">{artist?.name}</h3>}
        {artist?.bio && <p className="max-w-md text-center md:text-left text-lg  ">{artist?.bio}</p>}
        <div>
          <div className="flex gap-4 items-start lg:items-center maincol justify-between uppercase w-full">
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
      </div>
    </div>
  );
};
export default ArtistDetails;
