import React from "react";
import MusicVideo from "../home/our-work/music-video";
import { MusicVideoType } from "@/types";

interface MediaVideosProps {
  data: MusicVideoType[];
}

const MediaVideos = ({ data }: MediaVideosProps) => {
  if (!data) return null;

  let dataSet1: MusicVideoType[] = [];
  for (let i = 0; i < 13; i++) {
    dataSet1.push(data[i]);
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
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full h-full  px-2 lg:p-0 ">
      {/* {dataSet1 &&
        dataSet1.map((item, index: number) => (
          <MusicVideo
            key={item.songTitle}
            videoUrl={item.link}
            image={item.thumbnail}
            artist={concatNames(item)}
            title={item.songTitle}
            count={index + 1}
            video={item.video}
          />
        ))} */}
    </div>
  );
};

export default MediaVideos;