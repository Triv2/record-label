"use client";

import React from "react";
import Link from "next/link";
import ContactForm from "@/components/mailchimp/contact-form";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export const revalidate = 5;
const ContactPage = () => {
  return (
    <div
 
      className="flex flex-col py-[2rem] lg:pt-[3.75rem] gap-5 lg:gap-20 px-2 md:px-4 xl:px-[6.4rem] w-full"
    >
      <section className="flex flex-col  h-full border-t border-black dark:border-white border-b lg:pb-20 ">
        <div
          className={cn(
            "uppercase tracking-custom flex justify-between items-center text-muted-foreground dark:text-neutral-200 py-[1rem] lg:py-[5rem]"
          )}
        >
          <span className="text-xxs lg:text-mlg ">Who we are</span>
          <span className="text-xxs lg:text-mlg font-bold  text-emerald-500 dark:text-emerald-200">
            Contact us
          </span>
          <span className="text-xxs lg:text-mlg ">Who we are</span>
        </div>

        <div className="max-w-lg pb-[2rem] lg:pt-[1rem] lg:pb-[3rem]">
          <span
            className={cn(
              "uppercase text-6xl lg:text-xxl tracking-wide font-medium",
              font.className
            )}
          >
            Get in
            <br />
            Touch
          </span>
        </div>
      </section>
      <div className="flex items-center pt-[1rem] lg:pt-0 gap-4">
        <div className="h-6 w-6 rounded-full bg-emerald-200 " />
        <span className="uppercase">Contact us</span>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-col gap-8 w-full lg:w-1/2 justify-end items-end">
          <div className="grid w-full items-center gap-2 pt-[4rem] lg:pt-[2rem] ">
            <ContactForm />
          </div>
        </div>
      </div>

      <div
        className={cn(
          "text-lg flex flex-col tracking-tighter pt-20",
          font.className
        )}
      >
        <Link href={"/imprint"}>
          <span>Imprint:</span>
        </Link>
        <span>Soulpunx</span>
        <span>Kietz 24</span>
        <span>12557 Berlin</span>
        <span>Germany</span>
      </div>
    </div>
  );
};

export default ContactPage;