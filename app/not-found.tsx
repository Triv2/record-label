import Footer from "@/components/footer";
import Navbar from "@/components/navigation/navbar";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <div className="mt-14 flex flex-col items-center justify-center gap-6 md:mt-12">
          <Image alt="Error Image" src={"/404.svg"} width={700} height={700} />
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-6xl font-extrabold">404</h1>
            <span className="text-foreground/50">Oops! Looks like you&apos;ve ventured into uncharted territory.</span>
            <Link href={"/"} className="items-center flex gap-1 hover:text-muted-foreground">
              <ArrowLeft className="h-4 w-4" />
              <span>Back Home</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
