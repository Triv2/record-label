"use client";
import * as React from "react";
import { useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className="rounded-none shadow-none" variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="flex rounded-none shadow-none flex-col p-2 gap-2 w-[120px]">
        <div
          className="cursor-pointer hover:bg-muted-foreground/10 transition-all duration-150 ease-linear p-1"
          onClick={() => {
            setTheme("light"), setOpen(false);
          }}
        >
          Light
        </div>
        <div
          className="cursor-pointer hover:bg-muted-foreground/10 transition-all duration-150 ease-linear p-1"
          onClick={() => {
            setTheme("dark"), setOpen(false);
          }}
        >
          Dark
        </div>
        <div
          className="cursor-pointer hover:bg-muted-foreground/10 transition-all duration-150 ease-linear p-1"
          onClick={() => {
            setTheme("system"), setOpen(false);
          }}
        >
          System
        </div>
      </PopoverContent>
    </Popover>
  );
}
