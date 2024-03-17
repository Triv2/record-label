interface VideoProps {
  videoUrl: string;
  count?: number;
  height?: number;
  width?: number;
}

const Video = ({ videoUrl, count, height, width }: VideoProps) => {
  return (
    <div className="flex flex-col h-full w-full gap-2">
      <iframe
        width={width}
        height={height}
        src={videoUrl + "?controls=0"}
        title="Our Work Video"
        className=" object-cover w-full h-full border"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default Video;
