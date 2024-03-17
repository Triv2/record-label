import ImageContainer from "@/components/image-container";
import social from "@/sanity/schemas/artists/social";
import Link from "next/link";
import { Apple, AudioLines, Square, Youtube } from "lucide-react";
interface PlaylistProps {
  data: any;
}
type aSocial = typeof social;

const StreamingPlaylist = ({ data }: PlaylistProps) => {
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
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="uppercase tracking-tighter w-full flex justify-between items-center text-muted-foreground">
        <span>OUR PLAYLISTS</span>
        <span className="hidden md:flex">OUR PLAYLISTS</span>
        <span className="hidden md:flex">OUR PLAYLISTS</span>
      </div>
      <section className="h-auto w-auto flex items-center border flex-col justify-center">
        <ImageContainer
          width={400}
          height={400}
          image={data[0].image}
          imageClassName="transition-opacity object-cover"
          classesWrapper="h-full object-cover w-full"
        />
        <article className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 w-full p-4 flex items-center justify-center flex-col">
          <h2 className="text-center tracking-tight text-3xl font-bold text-background dark:text-foreground">{data[0].title}</h2>
          <p className="text-background dark:text-foreground">By: {data[0].artist.name}</p>
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
