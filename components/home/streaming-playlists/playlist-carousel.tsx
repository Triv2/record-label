"use client";

import React, { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { type CarouselApi } from "@/components/ui/carousel";

import StreamingPlaylistCard from "./streaming-playlist-card";
import { PlaylistType } from "@/types";

interface PlayListCarouselProps {
  data: PlaylistType[];
}

const PlayListCarousel = ({ data }: PlayListCarouselProps) => {
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

  if (!data[0]) return null;

  return (
    <div className="flex flex-col items-center justify-center  w-full">
      <Carousel
        opts={{
          align: "start",
        }}
        setApi={setApi}
        className="w-full hidden sm:grid  bg-white"
      >
        <CarouselContent className="w-full h-auto m-0 p-[0.02rem]">
          {data &&
            data.map((item, index: number) => (
              <CarouselItem
                key={index}
                className="min-w-0 basis-1/3 aspect-square w-full   p-[0.03rem]"
              >
                <StreamingPlaylistCard
                  image={item.image}
                  route={`${item.title}`}
                />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12  " variant="outline" />
        <CarouselNext className="mr-12  " variant="outline" />
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
            data.map((item, index: number) => (
              <CarouselItem key={index} className=" p-0">
                <StreamingPlaylistCard
                  image={item.image}
                  route={`${item.title}`}
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
export default PlayListCarousel;