import HeroVideo from "../home/hero/hero-video";
import Icon from "../icon";

interface AboutProps {
  data: any;
}

const About = ({ data }: AboutProps) => {
  if (!data[0]) return null;
  const bio = data[0].description;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-0 w-full">
      <div className="border border-black/[0.2] dark:border-white/[0.2] relative w-full p-1">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        {data && (
          <HeroVideo
            video={data[0].musicVideo.video}
            videoUrl={data[0].musicVideo.link}
            image={data[0].musicVideo.thumbnail}
            file={data[0].musicVideo.file}
          
          />
        )}
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <span className="max-w-md text-lg">{bio}</span>
      </div>
    </div>
  );
};
export default About;
