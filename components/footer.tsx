import { AudioLines, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { client } from "@/sanity/lib/client";
import social from "@/sanity/schemas/artists/social";
import Newsletter from "./mailchimp/newsletter";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { getFooter } from "@/sanity/lib/query";
import { FooterType, SocialType } from "@/types";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "700"],
});


const Footer = async () => {
  const footerData: FooterType = await getFooter();
  if (!footerData) return null;
  let fb: string = "";
  let ig: string = "";
  let yt: string = "";
  let sp: string = "";

  {
    footerData &&
    footerData.socials &&
    footerData.socials.forEach((item: SocialType) => {
        if (item.title === "facebook") {
          fb = item.link;
        }
        if (item.title === "youtube") {
          yt = item.link;
        }
        if (item.title === "spotify") {
          sp = item.link;
        }
        if (item.title == "instagram") {
          ig = item.link;
        }
      });
  }

  return (
    <div className="flex flex-col items-center justify-center w-full pt-[10rem] ">
      <div
        className={cn(
          "uppercase tracking-custom flex justify-between items-center text-muted-foreground dark:text-neutral-200 pb-[1rem] lg:pb-[3rem] w-[87%]",
          font.className
        )}
      >
        <span className="text-xxs lg:text-mlg">Follow Us</span>
        <span className="text-xxs lg:text-mlg text-emerald-500 dark:text-emerald-200">
          Follow Us
        </span>
        <span className="text-xxs lg:text-mlg">Follow Us</span>
      </div>
      <div className="bg-transparent text-foreground border-t border-black dark:border-white flex flex-col gap-6 h-full  py-6 justify-center items-center  w-[87%] ">
        <div className="uppercase lg:text-lg text-sm md:text-md  tracking-tighter flex  justify-center lg:justify-evenly gap-10 text-muted-foreground dark:text-neutral-200 items-center w-full ">
          <Link href={"/imprint"}>
            <span className="text-emerald-500 dark:text-emerald-200 ">
              Imprint
            </span>
          </Link>
        </div>

        <div className="flex flex-wrap flex-row gap-8 items-center justify-evenly  uppercase w-full text-xs sm:text-sm md:text-md lg:text-xl xl:text-2xl px-2">
          <div className="grid grid-cols-2 lg:grid-cols-4 w-full h-full gap-2 lg:gap-10">
            <Link href={yt}>
              <div className="flex gap-2 items-center justify-center w-full h-full">
                <Youtube className="lg:h-[3.5rem] lg:w-[3.5rem] w-[30%]" />
                <span className={cn("w-[70%]", font.className)}>Youtube</span>
              </div>
            </Link>
            <Link href={ig}>
              <div className="flex gap-2 items-center justify-center w-full h-full">
                <Instagram className="lg:h-[3.5rem] lg:w-[3.5rem] w-[30%]" />
                <span className={cn("w-[70%]", font.className)}>Instagram</span>
              </div>
            </Link>
            <Link href={sp}>
              <div className="flex gap-2 items-center justify-center w-full h-full">
                <AudioLines className="lg:h-[3.5rem] lg:w-[3.5rem] w-[30%]" />
                <span className={cn("w-[70%]", font.className)}>Spotify</span>
              </div>
            </Link>
            <Link href={fb}>
              <div className="flex gap-2 items-center justify-center w-full h-full">
                <Facebook className="lg:h-[3.5rem] lg:w-[3.5rem] w-[30%]" />
                <span className={cn("w-[70%]", font.className)}>Facebook</span>
              </div>
            </Link>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <ModeToggle />
            <Newsletter />
          </div>
        </div>

        <p className="text-mlg text-center w-full">Record Label 2024</p>
      </div>
    </div>
  );
};

export default Footer;
