"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import ContactForm from "@/components/mailchimp/contact-form";

export const revalidate = 5;
const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
      className="maincol py-10 gap-20 flex flex-col"
    >
      <div className="uppercase tracking-tighter flex justify-between items-center text-muted-foreground">
        <span>Who we are</span>
        <span>Contact us</span>
        <span>Who we are</span>
      </div>

      <div className="max-w-lg">
        <span className="uppercase text-7xl md:text-9xl tracking-wide font-medium">Get in Touch</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-6 w-6 rounded-full bg-pink-600" />
        <span className="uppercase">Contact us</span>
      </div>

      <div className="flex justify-end">
        <div className="flex flex-col gap-8 w-full md:w-1/2 justify-end items-end">
          <div className="grid w-full items-center gap-2 ">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="text-lg flex flex-col tracking-tighter">
        <Link href={"/imprint"}>
          <span>Imprint:</span>
        </Link>
        <span>Soulpunx</span>
        <span>Kietz 24</span>
        <span>12557 Berlin</span>
        <span>Germany</span>
      </div>
    </motion.div>
  );
};

export default ContactPage;
