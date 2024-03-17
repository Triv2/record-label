import musicVideo from "@/sanity/schemas/music-video";
import React from "react";
import MusicVideo from "./music-video";

type mVideo = typeof musicVideo;

interface OurWorkProps {
  data: any;
}

const OurWork = ({ data }: OurWorkProps) => {
  if (!data) return null;

  let dataSet1: mVideo[] = [];
  for (let i = 0; i < 2; i++) {
    dataSet1.push(data[i]);
  }

  let dataSet2: mVideo[] = [];
  for (let i = 2; i < 5; i++) {
    dataSet2.push(data[i]);
  }

  let dataSet3: mVideo[] = [];
  for (let i = 5; i < 6; i++) {
    dataSet3.push(data[i]);
  }
  let dataSet4: mVideo[] = [];
  for (let i = 6; i < 10; i++) {
    dataSet4.push(data[i]);
  }

  const concatNames = (set: any) => {
    let setName: string = "";
    if (1 < set.artist.length) {
      for (let i = 0; i < set.artist.length; i++) {
        if (i === set.artist.length - 1) {
          setName = setName + set.artist[i].name;
        } else {
          setName = setName + set.artist[i].name + ", ";
        }
      }
      return setName;
    } else {
      setName = set.artist[0].name;
      return setName;
    }
  };

  return (
    <div className="flex flex-col gap-8 maincol">
      <div className="uppercase tracking-tighter flex justify-between items-center text-muted-foreground">
        <span>Our Work</span>
        <span>Our Work</span>
        <span>Our Work</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-between">
        <div className="flex flex-col gap-2">
          {dataSet1 &&
            dataSet1.map((item: mVideo, index: number) => (
              <MusicVideo
                // @ts-ignore
                key={item.songTitle}
                // @ts-ignore
                videoUrl={item.link}
                // @ts-ignore
                image={item.thumbnail}
                artist={concatNames(item)}
                // @ts-ignore
                title={item.songTitle}
                count={index + 1}
                // @ts-ignore
                video={item.video}
                // @ts-ignore
                file={item.file}
              />
            ))}
        </div>
        {dataSet2 &&
          dataSet2.map((item: mVideo, index: number) => (
            <div key={index} className="flex flex-col gap-2">
              <MusicVideo
                // @ts-ignore
                key={item.songTitle}
                // @ts-ignore
                videoUrl={item.link}
                // @ts-ignore
                image={item.thumbnail}
                artist={concatNames(item)}
                // @ts-ignore
                title={item.songTitle}
                count={index + 3}
                // @ts-ignore
                video={item.video}
                // @ts-ignore
                file={item.file}
              />
            </div>
          ))}
      </div>

      {/* other one */}
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {dataSet3 &&
          dataSet3.map((item: mVideo, index: number) => (
            <div key={index} className="flex flex-col gap-2 w-full">
              <MusicVideo
                // @ts-ignore
                key={item.songTitle}
                // @ts-ignore
                videoUrl={item.link}
                // @ts-ignore
                image={item.thumbnail}
                // @ts-ignore
                artist={concatNames(item)}
                // @ts-ignore
                title={item.songTitle}
                count={index + 6}
                // @ts-ignore
                video={item.video}
                // @ts-ignore
                file={item.file}
              />
            </div>
          ))}

        <div className="w-full grid grid-cols-2 gap-4">
          {dataSet4 &&
            dataSet4.map((item: mVideo, index: number) => (
              <div key={index} className="flex flex-col gap-2">
                <MusicVideo
                  // @ts-ignore
                  key={item.songTitle}
                  // @ts-ignore
                  videoUrl={item.link}
                  // @ts-ignore
                  image={item.thumbnail}
                  // @ts-ignore
                  artist={concatNames(item)}
                  // @ts-ignore
                  title={item.songTitle}
                  // @ts-ignore
                  count={index + 7}
                  // @ts-ignore
                  video={item.video}
                  // @ts-ignore
                file={item.file}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
