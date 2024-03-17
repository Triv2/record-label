import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import StreamingPlaylistCard from "./streaming-playlist-card";

import streamingPlaylists from "@/sanity/schemas/home/playlist";
import MobileStreamingPlaylistCard from "./mobile-streaming-playlist-card";

type sPlaylist = typeof streamingPlaylists;
interface PlaylistProps {
  data:any;
}

const Playlist =  ({
  data,
}:PlaylistProps) => {

  if (!data[0]) return null;

  let set1: sPlaylist[] = [];
  let set2: sPlaylist[] = [];
  let set3: sPlaylist[] = [];

  data.forEach((item: sPlaylist, index: number) => {
    if (index < 3) {
      set1.push(item);
    } else if (index < 6 && index >= 3) {
      set2.push(item);
    } else if (index < 9 && index >= 6) {
      set3.push(item);
    }
  });

  const allSets = [set1, set2, set3];

  return (
    <div className="flex flex-col items-center justify-center gap-20 mb-6 lg:mb-0 lg:gap-4 md:px-20">
      <span className="uppercase text-lg tracking-wider">Streaming Playlists</span>

      <Carousel className="hidden lg:flex">
        <CarouselContent className="h-[400px]">
          {allSets[0] !== null && (
            <CarouselItem className="flex w-full h-full gap-2">
              {set1[0] && (
                <StreamingPlaylistCard
                  // @ts-ignore
                  image={set1[0]?.image}
                  route={`${set1[0]?.title}`}
                />
              )}
              {set1[1] && (
                <StreamingPlaylistCard
                  // @ts-ignore
                  image={set1[1]?.image}
                  route={`${set1[1]?.title}`}
                />
              )}
              {set1[2] && (
                <StreamingPlaylistCard
                  // @ts-ignore
                  image={set1[2]?.image}
                  route={`${set1[2]?.title}`}
                />
              )}
            </CarouselItem>
          )}
          {allSets[1] !== null && set2[0] && (
            <CarouselItem className="flex w-full h-full gap-2">
              {set2[0] && (
                <StreamingPlaylistCard
                  // @ts-ignore
                  image={set2[0]?.image}
                  route={`${set2[0]?.title}`}
                />
              )}
              {set2[1] && (
                <StreamingPlaylistCard
                  // @ts-ignore
                  image={set2[1]?.image}
                  route={`${set2[1]?.title}`}
                />
              )}
              {set2[2] && (
                <StreamingPlaylistCard
                  // @ts-ignore
                  image={set2[2]?.image}
                  route={`${set2[2]?.title}`}
                />
              )}
            </CarouselItem>
          )}
          {allSets[2] !== null && set3[0] && (
            <CarouselItem className="flex w-full h-full gap-2">
              {set3[0] && (
                <StreamingPlaylistCard
                  // @ts-ignore
                  image={set3[0]?.image}
                  route={`${set3[0]?.title}`}
                />
              )}
              {set3[1] && (
                <StreamingPlaylistCard
                  // @ts-ignore
                  image={set3[1]?.image}
                  route={`${set3[1]?.title}`}
                />
              )}
              {set3[2] && (
                <StreamingPlaylistCard
                  // @ts-ignore
                  image={set3[2]?.image}
                  route={`${set3[2]?.title}`}
                />
              )}
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
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
            data.map((item: sPlaylist) => (
              <CarouselItem key={item.title} className="flex w-full h-full gap-2">
                <MobileStreamingPlaylistCard
                  key={item.title}
                  // @ts-ignore
                  image={item.image}
                  route={`${item.title}`}
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

export default Playlist;
