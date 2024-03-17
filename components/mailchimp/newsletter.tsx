"use client";

import { useEffect, useState } from "react";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "../ui/button";

import NewsletterForm from "./newsletter-form";

const Newsletter = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="rounded-none shadow-none">Subscribe</Button>
      </PopoverTrigger>
      <PopoverContent className="rounded-none shadow-none" align="end">
        <NewsletterForm />
      </PopoverContent>
    </Popover>
  );
};

export default Newsletter;
