import ImageContainer from "@/components/image-container";

import Link from "next/link";
import { Apple, AudioLines, Square, Youtube } from "lucide-react";
import { SocialType } from "@/types";
interface PlaylistProps {
  data: any;
}

const StreamingPlaylist = ({ data }: PlaylistProps) => {
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
    <div className="flex flex-col items-center justify-center space-y-8">
      <section className="h-auto w-auto flex items-center  flex-col justify-center">
        <ImageContainer
          width={400}
          height={400}
          image={data[0].image}
          imageClassName="transition-opacity object-cover"
          classesWrapper="h-full object-cover w-full"
        />
        <article className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 w-full p-4 flex items-center justify-center flex-col">
          <h2 className="text-center tracking-tight text-3xl font-bold text-background dark:text-foreground">
            {data[0].title}
          </h2>
          <p className="text-background dark:text-foreground">
            By: {data[0].artist.name}
          </p>
        </article>
        <article className="w-full flex flex-col justify-center items-center gap-2 p-2 bg-transparent">
          {ap !== "" && (
            <Link
              href={ap}
              className="flex border w-full gap-2 items-center text-center justify-center p-2 text-muted-foreground"
            >
              <Apple />
              Apple Music
            </Link>
          )}
          {sp !== "" && (
            <Link
              href={sp}
              className="flex border w-full gap-2 items-center text-center justify-center p-2 text-muted-foreground"
            >
              <AudioLines />
              Spotify
            </Link>
          )}
          {de !== "" && (
            <Link
              href={sp}
              className="flex border w-full gap-2 items-center text-center justify-center p-2 text-muted-foreground"
            >
              <Square /> Deezer
            </Link>
          )}
          {yt !== "" && (
            <Link
              href={sp}
              className="flex border w-full gap-2 items-center text-center justify-center p-2 text-muted-foreground"
            >
              <Youtube /> Youtube Music
            </Link>
          )}
        </article>
      </section>
    </div>
  );
};
export default StreamingPlaylist;