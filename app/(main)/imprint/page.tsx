import React from "react";
import { Oswald } from "next/font/google";
import { cn } from "@/lib/utils";
import { getImprint } from "@/sanity/lib/query";
import { ImprintType } from "@/types";

const oswald = Oswald({ subsets: ["latin"] });

export const revalidate = 5;

const ImprintPage = async () => {
  const data: ImprintType[] = await getImprint();
  if (!data) {
    return null;
  }
  return (
    <div className="maincol flex flex-col text-center items-center justify-center gap-8 py-14">
      <span
        className={cn("text-5xl uppercase tracking-tighter", oswald.className)}
      >
        Imprint
      </span>

      <div className="flex flex-col gap-8 text-muted-foreground font-light tracking-tight">
        <div className="flex flex-col">
          <span>{data[0].name}</span>
          <span>{data[0].title}</span>
        </div>

        <div className="flex flex-col">
          <span>{data[0].address1}</span>
          <span>{data[0].address2}</span>
          <span>{data[0].address3}</span>
        </div>

        <span>{data[0].telephone}</span>

        <div className="flex flex-col">
          <span>{data[0].website}</span>
          <span>{data[0].email}</span>
        </div>

        <span>{data[0].vatId}</span>

        <div className="flex flex-col">
          <span>Telephone Hours:</span>
          <span>{data[0].telephoneHours}</span>
        </div>
      </div>
    </div>
  );
};

export default ImprintPage;