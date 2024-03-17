"use client";

import React, { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NewReleaseCard } from "./new-release-card";
import { type CarouselApi } from "@/components/ui/carousel";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { NewReleaseType } from "@/types";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "700"],
});

interface NewReleaseProps {
  data: NewReleaseType[];
}

const NewReleasesCarousel = ({ data }: NewReleaseProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const groupedArray = data.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 4);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, [] as NewReleaseType[][]);

  if (!data[0]) return null;

  return (
    <div className="flex flex-col items-center justify-center  w-full pb-[1rem] lg:pb-[5rem]">
      <div
        className={cn(
          "uppercase tracking-custom flex justify-between items-center w-[87%] text-muted-foreground dark:text-neutral-200  py-[1rem] lg:py-[5rem] border-t border-black dark:border-white",
          font.className
        )}
      >
        <span className="text-xxs lg:text-mlg">NEW RELEASES</span>
        <span className="text-xxs lg:text-mlg text-emerald-500 dark:text-emerald-200">
          NEW RELEASES
        </span>
        <span className="text-xxs lg:text-mlg">NEW RELEASES</span>
      </div>

      {/* desktop */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full  hidden sm:flex justify-center items-center   bg-white"
      >
        <CarouselContent className="h-[500px] ">
          {data &&
            groupedArray.map((item: NewReleaseType[], index) => (
              <CarouselItem
                key={index}
                className="pl-1 grid grid-cols-3 grid-rows-2 w-full h-full "
              >
                {item[0] && (
                  <NewReleaseCard
                    title={item[0].title}
                    name={item[0].artist.name}
                    image={item[0].mainImage}
                    imageClassName=" object-cover  "
                    wrapper="h-full bg-no-repeat  bg-cover bg-fixed bg-center w-full flex items-center justify-center "
                    className="h-full w-full col-span-1 row-span-2 group relative p-[0.05rem]  "
                    priority={true}
                  />
                )}

                <div className="flex sm:flex-col ">
                  {item[1] && (
                    <NewReleaseCard
                      title={item[1].title}
                      name={item[1].artist.name}
                      image={item[1].mainImage}
                      imageClassName=" object-cover  "
                      wrapper="h-full bg-no-repeat  bg-cover bg-fixed bg-center w-full flex items-center justify-center "
                      className="h-full w-full col-span-1 row-span-2 group relative p-[0.05rem]  "
                      priority={true}
                    />
                  )}
                  {item[2] && (
                    <NewReleaseCard
                      title={item[2].title}
                      name={item[2].artist.name}
                      image={item[2].mainImage}
                      imageClassName=" object-cover  "
                      wrapper="h-full bg-no-repeat  bg-cover bg-fixed bg-center w-full flex items-center justify-center "
                      className="h-full w-full col-span-1 row-span-2 group relative p-[0.05rem]  "
                      priority={true}
                    />
                  )}
                </div>

                {item[3] && (
                  <NewReleaseCard
                    title={item[3].title}
                    name={item[3].artist.name}
                    image={item[3].mainImage}
                    imageClassName=" object-cover  "
                    wrapper="h-full bg-no-repeat  bg-cover bg-fixed bg-center w-full flex items-center justify-center "
                    className="h-full w-full col-span-1 row-span-2 group relative p-[0.05rem]  "
                    priority={true}
                  />
                )}
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12 text-white " variant="ghost" />
        <CarouselNext className="mr-12 text-white " variant="ghost" />
      </Carousel>

      {/* mobile */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full flex sm:hidden justify-center items-center py-5 "
      >
        <CarouselContent className="h-[400px] ">
          {data &&
            data.map((item) => (
              <CarouselItem
                key={item.title}
                className="flex basis-1/2  gap-0 p-0"
              >
                <NewReleaseCard
                  title={item.title}
                  name={item.artist.name}
                  image={item.mainImage}
                  imageClassName=" object-cover w-full"
                  wrapper="h-full bg-no-repeat bg-cover bg-fixed bg-center w-full flex items-center justify-center"
                  className="h-full w-full  group relative "
                  priority={true}
                />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12 " />
        <CarouselNext className="mr-12 " />
      </Carousel>
    </div>
  );
};

export default NewReleasesCarousel;
