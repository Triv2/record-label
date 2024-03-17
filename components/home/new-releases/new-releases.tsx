import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NewReleaseCard } from "./new-release-card";

import { MobileNewReleaseCard } from "./mobile-new-release-card";
import release from "@/sanity/schemas/home/release";

type newReleaseData = typeof release;

interface NewReleaseProps {
  data: any;
}

const NewReleases = ({ data }: NewReleaseProps) => {
  if (!data[0]) return null;
  let set1: newReleaseData[] = [];
  let set2: newReleaseData[] = [];
  let set3: newReleaseData[] = [];

  data.forEach((item: newReleaseData, index: number) => {
    if (index < 4) {
      set1.push(item);
    } else if (index < 8 && index >= 4) {
      set2.push(item);
    } else if (index < 12 && index >= 8) {
      set3.push(item);
    }
  });

  const allSets = [set1, set2, set3];

  return (
    <div className="flex flex-col items-center justify-center gap-20 lg:gap-4 md:px-20 ">
      <span className="uppercase text-lg tracking-wider">New Releases</span>

      {/* desktop */}
      <Carousel className="hidden lg:flex ">
        <CarouselContent className="h-[400px]">
          {allSets[0] !== null && (set1.length >= 3) &&(
            <CarouselItem className="flex w-full h-full gap-2">
              {set1[0] && (
                <NewReleaseCard
                  title={set1[0].title}
                  // @ts-ignore
                  name={set1[0].artist.name}
                  // @ts-ignore
                  image={set1[0].mainImage}
                  imageClassName="transition-opacity object-cover"
                  className="h-full w-full sm:w-1/2 group relative border"
                  priority={true}
                />
              )}

              <div className="flex sm:flex-col  gap-2">
                {set1[1] && (
                  <NewReleaseCard
                    title={set1[1].title}
                    // @ts-ignore
                    name={set1[1].artist.name}
                    // @ts-ignore
                    image={set1[1].mainImage}
                    imageClassName=" transition-opacity object-cover"
                    className="w-full h-1/2 group relative border"
                  />
                )}
                {set1[2] && (
                  <NewReleaseCard
                    title={set1[2].title}
                    // @ts-ignore
                    name={set1[2].artist.name}
                    // @ts-ignore
                    image={set1[2].mainImage}
                    imageClassName=" transition-opacity object-cover"
                    className="w-full h-1/2 group relative border"
                  />
                )}
              </div>

              {set1[3] && (
                <NewReleaseCard
                  title={set1[3].title}
                  // @ts-ignore
                  name={set1[3].artist.name}
                  // @ts-ignore
                  image={set1[3].mainImage}
                  imageClassName=" transition-opacity object-cover"
                  className=" h-full w-full sm:w-1/2 group relative border"
                />
              )}
            </CarouselItem>
          )}

          {allSets[1] !== null && set2[0] && (set2.length >= 3) &&(
            <CarouselItem className="flex w-full h-full gap-2">
              {set2[0] && (
                <NewReleaseCard
                  title={set2[0].title}
                  // @ts-ignore
                  name={set2[0].artist.name}
                  // @ts-ignore
                  image={set2[0].mainImage}
                  imageClassName="transition-opacity object-cover"
                  className="w-auto sm:w-1/2 group relative border lg:min-w-[300px]"
                />
              )}

              <div className="flex sm:flex-col  gap-2">
                {set2[1] ? (
                  <NewReleaseCard
                    title={set2[1].title}
                    // @ts-ignore
                    name={set2[1].artist.name}
                    // @ts-ignore
                    image={set2[1].mainImage}
                    imageClassName=" transition-opacity object-cover"
                    className="w-full h-1/2 group relative border"
                  />
                ) : (
                  <div className="h-full w-full min-w-[300px]" />
                )}
                {set2[2] ? (
                  <NewReleaseCard
                    title={set2[2].title}
                    // @ts-ignore
                    name={set2[2].artist.name}
                    // @ts-ignore
                    image={set2[2].mainImage}
                    imageClassName=" transition-opacity object-cover"
                    className="w-full h-1/2 group relative border"
                  />
                ) : (
                  <div className="h-full w-full min-w-[300px]" />
                )}
              </div>

              {set2[3] ? (
                <NewReleaseCard
                  title={set2[3].title}
                  // @ts-ignore
                  name={set2[3].artist.name}
                  // @ts-ignore
                  image={set2[3].mainImage}
                  imageClassName=" transition-opacity object-cover"
                  className="w-full h-full sm:w-1/2 group relative border"
                />
              ) : (
                <div className="w-full min-w-[300px] " />
              )}
            </CarouselItem>
          )}

          {allSets[2] !== null && set3[0] && (set3.length >= 3) &&(
            <CarouselItem className="flex w-full h-full gap-2">
              {set3[0] && (
                <NewReleaseCard
                  title={set3[0].title}
                  // @ts-ignore
                  name={set3[0].artist.name}
                  // @ts-ignore
                  image={set3[0].mainImage}
                  imageClassName="transition-opacity object-cover"
                  className="w-full sm:w-1/2 group relative border"
                />
              )}

              <div className="flex sm:flex-col  gap-2">
                {set3[1] ? (
                  <NewReleaseCard
                    title={set3[1].title}
                    // @ts-ignore
                    name={set3[1].artist.name}
                    // @ts-ignore
                    image={set3[1].mainImage}
                    imageClassName=" transition-opacity object-cover"
                    className="w-full h-1/2 group relative border"
                  />
                ) : (
                  <div className="h-full w-full min-w-[300px]" />
                )}
                {set3[2] ? (
                  <NewReleaseCard
                    title={set3[2].title}
                    // @ts-ignore
                    name={set3[2].artist.name}
                    // @ts-ignore
                    image={set3[2].mainImage}
                    imageClassName=" transition-opacity object-cover"
                    className="w-full h-1/2 group relative border"
                  />
                ): (
                  <div className="h-full w-full min-w-[300px]" />
                )}
              </div>

              {set3[3] ? (
                <NewReleaseCard
                  title={set3[3].title}
                  // @ts-ignore
                  name={set3[3].artist.name}
                  // @ts-ignore
                  image={set3[3].mainImage}
                  imageClassName=" transition-opacity object-cover"
                  className="w-full h-full sm:w-1/2 group relative border"
                />
              ) : (
                <div className="h-full w-full min-w-[300px]" />
              )}
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious className="lg:ml-4 xl:ml-0" />
        <CarouselNext className="lg:mr-4 xl:mr-0" />
      </Carousel>

      {/* mobile */}
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="flex lg:hidden"
      >
        <CarouselContent className="h-[400px]">
          {data &&
            data.map((item: newReleaseData) => (
              <CarouselItem key={item.title} className="flex  gap-2">
                <MobileNewReleaseCard
                  key={item.title}
                  title={item.title}
                  // @ts-ignore
                  name={item.artist.name}
                  // @ts-ignore
                  image={item.mainImage}
                  imageClassName="transition-opacity object-cover"
                  className="object-cover"
                  priority={true}
                />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default NewReleases;
