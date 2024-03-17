import { AudioLines, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { client } from "@/sanity/lib/client";
import social from "@/sanity/schemas/artists/social";
import Newsletter from "./mailchimp/newsletter";

type aSocial = typeof social;

const Footer = async () => {
  const data = await client.fetch(`*[_type == 'artist' && name == 'Soulpunx']{socials[]->}`);
  if (!data[0]) return null;
  let fb: string = "";
  let ig: string = "";
  let yt: string = "";
  let sp: string = "";

  {
    data &&
      data[0].socials &&
      data[0].socials.forEach((item: aSocial) => {
        if (item.title === "facebook") {
          // @ts-ignore
          fb = item.link;
        }
        if (item.title === "youtube") {
          // @ts-ignore
          yt = item.link;
        }
        if (item.title === "spotify") {
          // @ts-ignore
          sp = item.link;
        }
        if (item.title == "instagram") {
          // @ts-ignore
          ig = item.link;
        }
      });
  }

  return (
    <div className="bg-transparent text-foreground border-t flex flex-col gap-6 h-full w-full py-6 justify-center items-start md:items-center  md:px-20">
      <div className="uppercase lg:text-lg text-sm md:text-md maincol tracking-tighter flex justify-between text-muted-foreground items-center w-full ">
        <span>Follow us</span>
        <Link href={"/imprint"}>
          <span>Imprint</span>
        </Link>
        <span>Follow us</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center maincol justify-between uppercase w-full">
        <Link href={yt}>
          <div className="flex gap-2 items-center">
            <Youtube className="h-5 w-5" />
            <span>Youtube</span>
          </div>
        </Link>
        <Link href={ig}>
          <div className="flex gap-2 items-center">
            <Instagram className="h-5 w-5" />
            <span>Instagram</span>
          </div>
        </Link>
        <Link href={sp}>
          <div className="flex gap-2 items-center">
            <AudioLines className="h-5 w-5" />
            <span>Spotify</span>
          </div>
        </Link>
        <Link href={fb}>
          <div className="flex gap-2 items-center">
            <Facebook className="h-5 w-5" />
            <span>Facebook</span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
