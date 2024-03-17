"use client";
import { routes } from "@/app/utils";
import Link from "next/link";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import useScroll from "@/app/hooks/useScroll";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(35);

  return (
    <header
      className={cn(`sticky inset-x-0 top-0 z-30 w-full transition-all px-2`, {
        "bg-background": scrolled,
      })}
    >
      <div className="maincol flex items-center justify-between py-6">
        <div className="flex items-center gap-8">
          <Link href="/">
            <h1 className="font-bold tracking-tighter uppercase text-xl">SoulPunx</h1>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-10">
          <div className="hidden gap-10 md:flex">
            {routes.map((route) => (
              <Link onClick={() => setOpen} className="relative" key={route.href} href={route.href}>
                <h1
                  className={cn(
                    "uppercase tracking-tighter duration-200 ease-linear transition-all",
                    pathname === route.href && "underline underline-offset-8"
                  )}
                >
                  {route.label}
                </h1>
              </Link>
            ))}
          </div>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="flex md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent className="border h-full items-center flex flex-col justify-center" side={"top"}>
            <div className="flex flex-col items-center w-full gap-6">
              {routes.map((route) => (
                <Link
                  onClick={() => setOpen(false)}
                  className={cn(
                    "uppercase tracking-tighter duration-200 ease-linear transition-all",
                    pathname === route.href && "underline underline-offset-8"
                  )}
                  key={route.href}
                  href={route.href}
                >
                  <h1 className="uppercase tracking-tighter">{route.label}</h1>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
