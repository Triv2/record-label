
import musicVideo from "@/sanity/schemas/music-video";
import VideoPlayer from "../video-player";

interface ArtistVideosProps {
  
  data:any;
}
type mVideo = typeof musicVideo;

const ArtistVideos =  ({ data }: ArtistVideosProps) => {
 
  if (!data[0]) return null;
  let vids: mVideo[] = [];
  let smallVideos: mVideo[] = [];
  let largeVideos: mVideo[] = [];

  {
    data[0].musicVideos &&
      data[0].musicVideos.forEach((item: mVideo) => {
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
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="uppercase text-lg tracking-wider pb-10">Videos</span>
      <div className="flex items-center justify-center w-full h-full">
        
        {// @ts-ignore
        smallVideos[0] && <VideoPlayer videoUrl={smallVideos[0].link} />}
        {// @ts-ignore
        smallVideos[1] && <VideoPlayer videoUrl={smallVideos[1].link} />}
      </div>
      {// @ts-ignore
      largeVideos[0] && <VideoPlayer videoUrl={largeVideos[0].link} />}
    </div>
  );
};
export default ArtistVideos;
