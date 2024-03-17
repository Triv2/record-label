import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";
const font = Poppins({
  subsets: ["latin"],
  weight: ["300"],
});

const Links = () => {
  return (
    <div
      className={cn(
        "text-center justify-center items-center w-full flex flex-col gap-4 uppercase pt-[6rem] pb-[4rem]",
        font.className
      )}
    >
      <p className=" text-lg lg:text-4xl tracking-tight text-emerald-500 dark:text-emerald-200">
       SHARE AND VIBE
      </p>
      <p className=" text-lg lg:text-4xl tracking-tight text-emerald-500 dark:text-emerald-200">
        CRAFTED WITH LOVE
      </p>

      <div className="gap-6 lg:gap-[4rem] flex flex-col lg:flex-row text-sm md:text-md pt-12 lg:text-lg tracking-tighter">
        <Link className="underline" href={"/artists"}>
          Artists
        </Link>
        <Link
          className="underline"
          href={""}
        >
          Youtube
        </Link>
        <Link className="underline" href={"/releases"}>
          Releases
        </Link>
        <Link className="underline" href={"/media"}>
          Media
        </Link>
      </div>
    </div>
  );
};

export default Links;