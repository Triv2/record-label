"use client";


import ArtistMusicVideo from "./artist-music-video";
import { ArtistVideosType } from "@/types";

interface ArtistVideosProps {
  data: any;
}


const ArtistVideos = ({ data }: ArtistVideosProps) => {
  if (!data[0]) return null;

  const allVideos: ArtistVideosType[] = data[0].musicVideos || null;

  let vids: ArtistVideosType[] = [];
  let smallVideos: ArtistVideosType[] = [];
  let largeVideos: ArtistVideosType[] = [];

  {
    allVideos &&
      allVideos.forEach((item) => {
        vids.push(item);
      });
  }
  for (let i = 0; i < 2; i++) {
    smallVideos.push(vids[i]);
  }
  for (let i = 2; i < 3; i++) {
    largeVideos.push(vids[i]);
  }

  return (
    <div className="flex flex-col  w-full h-full py-[2.5rem]">
      <span className="uppercase text-2xl tracking-wider pb-[4rem]">Video</span>
      <div className="flex flex-col lg:flex-row items-center justify-start w-full h-full">
        <div className="flex items-start h-full w-full lg:w-1/2  ">
          {smallVideos[0] && (
            <ArtistMusicVideo
              videoUrl={smallVideos[0].link}
              video={smallVideos[0].video}
            />
          )}
        </div>
        <div className="flex items-start h-full w-full lg:w-1/2  ">
          {smallVideos[1] && (
            <ArtistMusicVideo
              videoUrl={smallVideos[1].link}
              video={smallVideos[1].video}
            />
          )}
        </div>
      </div>
      <div className="flex items-start h-1/2 w-full ">
        {largeVideos[0] && (
          <ArtistMusicVideo
            videoUrl={largeVideos[0].link}
            video={largeVideos[0].video}
          />
        )}
      </div>
    </div>
  );
};
export default ArtistVideos;